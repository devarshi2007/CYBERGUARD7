import React from 'react';
import { ChatSession } from '../types';
import { MessageSquare, Plus, Trash2 } from 'lucide-react';

interface ChatHistoryProps {
  sessions: ChatSession[];
  currentSessionId: string;
  onSelectSession: (sessionId: string) => void;
  onNewChat: () => void;
  onDeleteSession: (sessionId: string) => void;
}

export const ChatHistory: React.FC<ChatHistoryProps> = ({
  sessions,
  currentSessionId,
  onSelectSession,
  onNewChat,
  onDeleteSession,
}) => {
  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - new Date(date).getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days} days ago`;
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className="w-64 bg-slate-800 border-r border-slate-700 flex flex-col h-full">
      <div className="p-4 border-b border-slate-700">
        <button
          onClick={onNewChat}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium shadow-md"
        >
          <Plus size={18} />
          New Chat
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-2">
        <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 mb-2">
          Chat History
        </h2>
        {sessions.length === 0 ? (
          <p className="text-sm text-slate-500 text-center py-8 px-2">
            No chat history yet
          </p>
        ) : (
          <div className="space-y-1">
            {sessions.map((session) => (
              <div
                key={session.id}
                className={`group relative flex items-center gap-2 px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${
                  session.id === currentSessionId
                    ? 'bg-cyan-900 text-cyan-100 border border-cyan-500'
                    : 'hover:bg-slate-700 text-slate-200'
                }`}
                onClick={() => onSelectSession(session.id)}
              >
                <MessageSquare size={16} className="flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{session.title}</p>
                  <p className="text-xs text-slate-400">{formatDate(session.updatedAt)}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteSession(session.id);
                  }}
                  className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-900 rounded transition-opacity"
                >
                  <Trash2 size={14} className="text-red-400" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
