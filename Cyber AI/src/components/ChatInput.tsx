import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
    }
  }, [input]);

  const handleSubmit = (e: React.FormEvent | React.KeyboardEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    onSendMessage(input.trim());
    setInput('');
    
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`relative flex items-end gap-2 bg-slate-800 rounded-3xl border shadow-lg transition-all duration-300 ${
        isLoading ? 'border-slate-600 opacity-80' : 'border-slate-600 hover:border-cyan-500 focus-within:ring-4 focus-within:ring-cyan-900 focus-within:border-cyan-500'
      }`}
    >
      <textarea
        ref={textareaRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask anything or describe what's in your files..."
        rows={1}
        disabled={isLoading}
        className="w-full py-4 pl-6 pr-12 bg-transparent border-none outline-none resize-none text-slate-100 placeholder-slate-500 max-h-[150px] min-h-[56px]"
        style={{ borderRadius: '24px' }}
      />
      
      <button
        type="submit"
        disabled={!input.trim() || isLoading}
        className={`absolute right-2 bottom-2 p-2 rounded-full flex items-center justify-center transition-all duration-200
          ${!input.trim() || isLoading 
            ? 'bg-slate-700 text-slate-500 cursor-not-allowed' 
            : 'bg-cyan-600 text-white hover:bg-cyan-700 hover:scale-105 active:scale-95 shadow-md'
          }`}
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
        ) : (
          <Send size={20} />
        )}
      </button>
    </form>
  );
};
