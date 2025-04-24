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
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [showModelInfo, setShowModelInfo] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isTyping, setIsTyping] = useState(false);

  // Selected top two most important quick questions
  const topQuickQuestions = [
    "Am I eligible for a VA loan?",
    "What are VA loan benefits?"
  ];

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

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
  const handleSendMessage = async (e: React.FormEvent, messageText: string = inputValue) => {
    e.preventDefault();
    
    if (!messageText.trim()) return;
    
    // Add user message to chat
    const userMessage: ChatMessage = {
      role: 'user',
      content: messageText,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
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

  // Handle quick question selection
  const handleQuickQuestion = (question: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    handleSendMessage(new Event('submit') as unknown as React.FormEvent, question);
  };

  // Format timestamp
  const formatTime = (date?: Date) => {
    if (!date) return '';
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat messages area with subtle background pattern */}
      <div 
        className="flex-1 p-6 pt-10 overflow-y-auto scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-gray-100"
        style={{
          backgroundImage: 'radial-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          overflowAnchor: 'none' // Prevents browser from automatically scrolling when content changes
        }}
      >
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`mb-4 ${message.role === 'assistant' ? 'mr-8' : 'ml-8'} animate-fade-in`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`flex items-start ${message.role === 'assistant' ? '' : 'flex-row-reverse'}`}>
              {/* Avatar */}
              <div className={`flex-shrink-0 ${message.role === 'assistant' ? 'mr-3' : 'ml-3'}`}>
                {message.role === 'assistant' ? (
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center relative">
                    <span className="text-xs font-bold">AI</span>
                    <div className="absolute -right-1 -top-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Message bubble */}
              <div 
                className={`
                  relative p-4 rounded-xl max-w-[85%] shadow-md
                  ${message.role === 'assistant' 
                    ? 'bg-white border border-primary/20 text-gray-800 backdrop-blur-sm bg-opacity-95' 
                    : 'bg-gradient-to-br from-primary to-primary-dark text-white'}
                  transition-all duration-300 hover:shadow-lg
                `}
              >
                {/* Typing indicator for AI's last message */}
                {message.role === 'assistant' && index === messages.length - 1 && isTyping ? (
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                ) : (
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                )}
                
                {/* Message time */}
                <div 
                  className={`
                    text-[10px] absolute bottom-1 ${message.role === 'assistant' ? 'right-2' : 'left-2'}
                    ${message.role === 'assistant' ? 'text-gray-400' : 'text-white/70'}
                  `}
                >
                  {formatTime(message.timestamp)}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Empty state with animated prompt */}
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center p-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 animate-pulse-slow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">VA Loan Expert AI</h3>
            <p className="text-gray-600 mb-4 max-w-xs">I'm here to answer all your questions about VA loans and help you get started with your application.</p>
            <div className="animate-bounce-slow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} style={{ height: '1px', opacity: 0 }} />
      </div>

      {/* Input area with premium, standout styling */}
      <div className="p-5 border-t border-gray-200 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Premium background effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/10 pointer-events-none z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 pointer-events-none z-0"></div>
        
        {/* Subtle accent lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        
        {/* Shine effect */}
        <div className="absolute -inset-full w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 animate-shine pointer-events-none z-20"></div>
        
        {/* Content with relative positioning to appear above the effects */}
        <div className="relative z-30">
          {/* Simplified quick questions - just two key ones positioned elegantly */}
          <div className="flex justify-end mb-3">
            {topQuickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuickQuestion(question)}
                className="text-xs bg-white hover:bg-primary hover:text-white text-gray-700 py-1 px-3 rounded-full transition-colors duration-300 border border-gray-200 hover:border-primary flex items-center group shadow-sm hover:shadow ml-2"
              >
                <span>{question}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 ml-1.5 text-primary group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>

          {/* Message input with premium styling */}
          <form onSubmit={handleSendMessage} className="flex items-end gap-3">
            <div className="relative flex-1 group">
              {/* Enhanced glow effect for input - contained within the input boundaries */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/40 to-primary/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              {/* Floating label effect - positioned to the left to avoid overlap with quick questions */}
              <div className="absolute -top-5 left-2 px-3 py-1 bg-white text-primary text-xs font-semibold z-20 rounded-full shadow-md border border-primary/30 animate-bounce-slow" style={{ animationDuration: '4s' }}>
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  CHAT WITH VALM
                </span>
              </div>
              
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your question here..."
                className="w-full border-3 border-primary/40 focus:border-primary focus:ring-4 focus:ring-primary/30 rounded-full py-5 pl-7 pr-14 text-sm transition-all duration-300 shadow-lg group-hover:shadow-xl relative z-10 bg-white"
                disabled={isTyping}
              />
              
              {inputValue.length > 0 && (
                <button
                  type="button"
                  onClick={() => setInputValue('')}
                  className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              
              {/* Animated hint */}
              {!inputValue.trim() && !isTyping && (
                <div className="absolute right-12 top-1/2 -translate-y-1/2 flex items-center text-xs text-gray-400 animate-pulse-slow z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Ask anything
                </div>
              )}
            </div>
            
            <div className="relative group">
              {/* Premium button glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/50 via-secondary/50 to-primary-dark/50 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className={`
                  relative z-10 rounded-full w-14 h-14 flex items-center justify-center transition-all duration-300
                  ${!inputValue.trim() || isTyping 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-primary via-secondary to-primary-dark text-white shadow-lg hover:shadow-xl transform group-hover:scale-105'}
                `}
              >
                {/* Premium send icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </form>
          
          {/* Powered by indicator with futuristic styling */}
          <div className="mt-2 text-center">
            <p className="text-xs text-gray-400 flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1 animate-pulse"></span>
              Powered by advanced AI technology
            </p>
          </div>
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
