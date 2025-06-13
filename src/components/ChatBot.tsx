import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useChatBot } from '../contexts/ChatBotContext';

const ChatBot = () => {
  const { isOpen, closeChat, toggleChat, prefilledMessage } = useChatBot();
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! I\'m your AI assistant. How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (prefilledMessage && isOpen) {
      setInputValue(prefilledMessage);
      setTimeout(() => {
        setMessages(prev => [...prev, { type: 'user', text: prefilledMessage }]);
        setInputValue('');
        
        setTimeout(() => {
          setMessages(prev => [...prev, {
            type: 'bot',
            text: 'Thanks for your message! Our team will get back to you shortly. In the meantime, feel free to explore our services or book a call with our experts.'
          }]);
        }, 1000);
      }, 500);
    }
  }, [prefilledMessage, isOpen]);

  const sendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { type: 'user', text: inputValue }]);
      setInputValue('');

      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'bot',
          text: 'Thanks for your message! Our team will get back to you shortly. In the meantime, feel free to explore our services or book a call with our experts.'
        }]);
      }, 1000);
    }
  };

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-black/80 border border-white/20 rounded-xl backdrop-blur-md z-50 flex flex-col page-transition-enter page-transition-enter-active">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center">
              <div className="w-8 h-8 dynamic-gradient-icon rounded-full flex items-center justify-center mr-3">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-white font-light">AI Assistant</h3>
                <p className="text-xs text-gray-400">Online now</p>
              </div>
            </div>
            <button onClick={closeChat} className="text-gray-400 hover:text-white transition-colors duration-200">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] text-white'
                    : 'bg-white/10 text-gray-200'
                }`}>
                  <p className="text-sm font-light">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-sm transition-colors duration-200"
              />
              <button
                onClick={sendMessage}
                className="w-8 h-8 dynamic-gradient-icon rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] rounded-full flex items-center justify-center shadow-lg hover:from-[#0052D4]/80 hover:via-[#4364F7]/80 hover:to-[#6FB1FC]/80 transition-all duration-300 z-50 hover-glow hover:scale-110"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
    </>
  );
};

export default ChatBot;