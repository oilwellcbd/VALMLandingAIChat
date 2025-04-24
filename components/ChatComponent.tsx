'use client';

import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

// Define types for our chat messages
type MessageRole = 'user' | 'assistant' | 'system';

interface ChatMessage {
  role: MessageRole;
  content: string;
  timestamp?: Date;
}

const ChatComponent = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: "Hi, I'm your VA Loan Expert. How can I help you with your VA loan journey today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [showModelInfo, setShowModelInfo] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isTyping, setIsTyping] = useState(false);

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

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [input]);

  // Simulate typing effect for the assistant
  const simulateTyping = (response: string, callback: (text: string) => void) => {
    setIsTyping(true);
    let i = 0;
    const responseLength = response.length;
    const avgTypingSpeed = 30; // ms per character
    
    const type = () => {
      if (i < responseLength) {
        const chunkSize = Math.floor(Math.random() * 3) + 1; // Random chunk size between 1-3 chars
        i = Math.min(i + chunkSize, responseLength);
        callback(response.substring(0, i));
        
        // Vary the typing speed slightly
        const variance = Math.random() * 20 - 10; // +/- 10ms
        const delay = avgTypingSpeed + variance;
        
        setTimeout(type, delay);
      } else {
        setIsTyping(false);
      }
    };
    
    type();
  };

  // Handle sending a new message
  const handleSendMessage = async (e: React.FormEvent, messageText: string = input) => {
    e.preventDefault();
    
    if (!messageText.trim()) return;
    
    // Add user message to chat
    const userMessage: ChatMessage = {
      role: 'user',
      content: messageText,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // First show thinking animation
    setIsThinking(true);
    
    // In a real implementation, this would call the Anthropic API
    // For now, we'll simulate a response with a timeout
    try {
      // Simulated API call
      setTimeout(() => {
        setIsThinking(false);
        const response = getSimulatedResponse(messageText);
        
        // Add empty assistant message
        const assistantMessage: ChatMessage = {
          role: 'assistant',
          content: '',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, assistantMessage]);
        
        // Simulate typing effect
        simulateTyping(response, (partialResponse) => {
          setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1].content = partialResponse;
            return newMessages;
          });
        });
        
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.error('Error getting chat response:', error);
      setIsThinking(false);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.",
        timestamp: new Date()
      }]);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  };

  // Function to handle clicking a quick question
  const handleQuickQuestion = (question: string, e: React.MouseEvent) => {
    e.preventDefault();
    handleSendMessage(e as unknown as React.FormEvent, question);
  };

  // Format timestamp
  const formatTime = (date?: Date) => {
    if (!date) return '';
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-[600px] relative">
      {/* Model info badge */}
      <div 
        className="absolute -top-6 right-6 bg-gradient-to-r from-primary to-primary-dark text-white px-3 py-1 rounded-t-lg text-xs font-medium z-20 flex items-center shadow-lg"
      >
        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
        VA Loan Expert
      </div>
      
      {/* Chat messages */}
      <div className="flex-1 p-4 pt-10 overflow-y-auto bg-gradient-to-b from-primary/5 to-white">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`relative ${
                message.role === 'user' 
                  ? 'ml-4 mr-0' 
                  : message.role === 'system' 
                    ? 'mx-auto max-w-[90%] my-6' 
                    : 'ml-0 mr-4'
              }`}
            >
              {/* System message */}
              {message.role === 'system' && (
                <div className="bg-gradient-to-r from-violet-600/10 to-indigo-600/10 p-4 rounded-lg border border-indigo-200 text-center">
                  <div className="inline-block bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-2 py-1 rounded text-xs font-medium mb-2">
                    SYSTEM
                  </div>
                  <p className="text-gray-700 text-sm">{message.content}</p>
                </div>
              )}
              
              {/* User message */}
              {message.role === 'user' && (
                <div className="flex items-end justify-end mb-4">
                  <div className="mr-2 text-xs text-gray-500 self-end mb-1">
                    {formatTime(message.timestamp)}
                  </div>
                  <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-3 rounded-t-lg rounded-bl-lg shadow-md max-w-[80%]">
                    <p className="text-sm">{message.content}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-300 ml-2 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
              
              {/* Assistant message */}
              {message.role === 'assistant' && (
                <div className={`flex items-end mb-4 ${index === 0 ? 'mt-4' : ''}`}>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-dark mr-2 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div className="bg-white p-3 rounded-t-lg rounded-br-lg shadow-md max-w-[80%] border border-gray-100">
                    <ReactMarkdown className="text-sm prose prose-sm max-w-none">
                      {message.content}
                    </ReactMarkdown>
                    {isTyping && index === messages.length - 1 && (
                      <div className="h-4 w-12 mt-1">
                        <div className="flex space-x-1">
                          <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse"></div>
                          <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="ml-2 text-xs text-gray-500 self-end mb-1">
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {isThinking && (
            <div className="flex items-end mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-dark mr-2 flex-shrink-0 flex items-center justify-center overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div className="bg-white p-4 rounded-t-lg rounded-br-lg shadow-md max-w-[80%] border border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="relative w-6 h-6 animate-spin">
                    <svg className="w-full h-full text-indigo-300" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">VA Loan Expert is thinking...</span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Quick questions */}
      {messages.length < 4 && (
        <div className="px-4 py-3 bg-gradient-to-r from-primary/5 to-secondary/5">
          <p className="text-sm text-gray-600 mb-2 font-medium">Ask me about:</p>
          <div className="flex flex-wrap gap-2">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={(e) => handleQuickQuestion(question, e)}
                className="bg-white border border-primary/20 rounded-full px-3 py-1.5 text-sm text-gray-700 hover:bg-primary/5 transition-colors duration-200 shadow-sm"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Input area */}
      <div className="border-t border-primary/10 p-4 bg-white">
        <form onSubmit={handleSendMessage} className="flex items-end space-x-2">
          <div className="relative flex-1">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about VA loans..."
              className="w-full border border-primary/20 rounded-2xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none max-h-32 text-sm"
              rows={1}
              disabled={isLoading}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  if (input.trim()) handleSendMessage(e);
                }
              }}
            />
            <div className="absolute right-3 bottom-3 text-xs text-gray-400">
              {input.length > 0 && `${input.length}/2000`}
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-full w-10 h-10 flex items-center justify-center hover:from-primary-dark hover:to-primary disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </form>
        <div className="mt-2 text-xs text-center text-gray-500">
          <span className="flex items-center justify-center">
            <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
            VA Loan Expert • <span className="text-primary hover:underline cursor-pointer">Privacy Policy</span>
          </span>
        </div>
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
  
  if (lowerMessage.includes('claude') || lowerMessage.includes('ai') || lowerMessage.includes('model')) {
    return "I'm your VA Loan Expert. I'm designed to be helpful, harmless, and honest in all my interactions. For VA loans specifically, I've been trained on the latest guidelines and regulations to provide you with accurate and up-to-date information. My knowledge cutoff is April 2025, so I'm aware of the most recent VA loan policies and interest rate trends. How else can I assist with your VA loan questions today?";
  }
  
  return "Thank you for your question. As your VA Loan Expert, I'm here to help you navigate the VA loan process with the most accurate and up-to-date information. Could you provide more details about what you're looking to accomplish with your VA loan benefit? Whether you're buying your first home, refinancing, or just exploring options, I'm here to guide you every step of the way.";
}

export default ChatComponent;
