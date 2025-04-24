'use client';

import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

// Define types for our chat messages
type MessageRole = 'user' | 'assistant';

interface ChatMessage {
  role: MessageRole;
  content: string;
}

const ChatComponent = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: "Hi, I'm your VA Loan Expert. How can I help you with your VA loan journey today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sample quick questions
  const quickQuestions = [
    "Am I eligible for a VA loan?",
    "What are VA loan benefits?",
    "How much can I borrow?",
    "What's the VA funding fee?"
  ];

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle sending a new message
  const handleSendMessage = async (e: React.FormEvent, messageText: string = input) => {
    e.preventDefault();
    
    if (!messageText.trim()) return;
    
    // Add user message to chat
    const userMessage: ChatMessage = {
      role: 'user',
      content: messageText
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // In a real implementation, this would call the Anthropic API
    // For now, we'll simulate a response with a timeout
    try {
      // Simulated API call
      setTimeout(() => {
        const response = getSimulatedResponse(messageText);
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: response
        }]);
        setIsLoading(false);
      }, 1500);
      
      // In production, this would be:
      /*
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage]
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to get response');
      }
      
      const data = await response.json();
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.message
      }]);
      */
    } catch (error) {
      console.error('Error getting chat response:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle clicking a quick question
  const handleQuickQuestion = (question: string, e: React.MouseEvent) => {
    e.preventDefault();
    handleSendMessage(e as unknown as React.FormEvent, question);
  };

  return (
    <div className="flex flex-col h-[600px]">
      {/* Chat messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`chat-bubble ${
                message.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai'
              }`}
            >
              <ReactMarkdown>{message.content}</ReactMarkdown>
            </div>
          ))}
          
          {isLoading && (
            <div className="chat-bubble chat-bubble-ai">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Quick questions */}
      {messages.length < 3 && (
        <div className="px-4 py-2 bg-gray-50">
          <p className="text-sm text-gray-500 mb-2">Common questions:</p>
          <div className="flex flex-wrap gap-2">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={(e) => handleQuickQuestion(question, e)}
                className="bg-white border border-gray-300 rounded-full px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Input area */}
      <div className="border-t border-gray-200 p-4">
        <form onSubmit={handleSendMessage} className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question here..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-primary text-white rounded-lg px-4 py-2 hover:bg-primary-dark disabled:opacity-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

// Function to generate simulated responses (will be replaced with actual API call)
function getSimulatedResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('eligible') || lowerMessage.includes('qualify')) {
    return "To be eligible for a VA loan, you generally need to meet one of these service requirements:\n\n- 90 consecutive days of active service during wartime\n- 181 days of active service during peacetime\n- 6 years of service in the National Guard or Reserves\n- Or be the spouse of a service member who died in the line of duty\n\nWould you like me to help determine your specific eligibility?";
  }
  
  if (lowerMessage.includes('benefit') || lowerMessage.includes('advantages')) {
    return "VA loans offer several significant benefits:\n\n- **No down payment** required in most cases\n- **No private mortgage insurance (PMI)**\n- **Competitive interest rates** often lower than conventional loans\n- **Limited closing costs**\n- **No prepayment penalty**\n\nWhich of these benefits would you like to learn more about?";
  }
  
  if (lowerMessage.includes('borrow') || lowerMessage.includes('how much')) {
    return "VA loans don't have a specific loan limit for eligible veterans with full entitlement. However, your loan amount will depend on:\n\n1. Your income and debt-to-income ratio\n2. Your credit score and history\n3. The appraised value of the home\n\nWould you like to use our calculator to estimate how much you might qualify for?";
  }
  
  if (lowerMessage.includes('funding fee')) {
    return "The VA funding fee is a one-time payment that helps offset the cost of the VA loan program. The fee varies based on:\n\n- Down payment amount\n- Type of service (Regular military, Reserves, or National Guard)\n- Whether it's your first VA loan or a subsequent use\n\nThe fee ranges from 1.4% to 3.6% of the loan amount. Some veterans may be exempt from the funding fee, including those with service-connected disabilities.";
  }
  
  return "Thank you for your question. As a VA loan expert, I'm here to help you navigate the VA loan process. Could you provide more details about what you're looking to accomplish with your VA loan benefit? Whether you're buying your first home, refinancing, or just exploring options, I'm here to guide you every step of the way.";
}

export default ChatComponent;
