import React from 'react';
import { Message } from '../types';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.role === 'user';
  const isError = message.isError;

  return (
    <div className={`flex w-full mb-6 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex max-w-[85%] md:max-w-[75%] gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-sm 
          ${isUser ? 'bg-cyan-600 text-white' : 'bg-slate-700 border border-cyan-500 text-cyan-400'}`}>
          <span className="material-symbols-rounded text-sm">
            {isUser ? 'person' : 'auto_awesome'}
          </span>
        </div>

        <div
          className={`relative px-5 py-3.5 rounded-2xl text-sm md:text-base leading-relaxed shadow-sm
            ${isUser 
              ? 'bg-cyan-600 text-white rounded-tr-sm' 
              : isError
                ? 'bg-red-900 border border-red-500 text-red-200 rounded-tl-sm'
                : 'bg-slate-800 border border-slate-600 text-slate-100 rounded-tl-sm'
            }
          `}
        >
          <div className="whitespace-pre-wrap break-words">
            {message.content}
          </div>
          
          {message.isStreaming && (
            <span className="inline-block w-1.5 h-4 ml-1 align-middle bg-current opacity-70 animate-pulse" />
          )}

          <div className={`text-[10px] mt-2 opacity-60 font-medium ${isUser ? 'text-cyan-100 text-right' : 'text-slate-400'}`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </div>
  );
};
