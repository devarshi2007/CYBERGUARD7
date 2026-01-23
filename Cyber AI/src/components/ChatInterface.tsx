import React, { useState, useRef, useEffect } from 'react';
import { MessageBubble } from './MessageBubble';
import { ChatInput } from './ChatInput';
import { ChatHistory } from './ChatHistory';
import { Message, UploadedFile, ChatSession } from '../types';
import { geminiService } from '../services/geminiService';
import { Trash2, Menu } from 'lucide-react';

export const ChatInterface: React.FC = () => {
  const [sessions, setSessions] = useState<ChatSession[]>(() => {
    const saved = localStorage.getItem('chatSessions');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.map((session: any) => ({
          ...session,
          createdAt: new Date(session.createdAt),
          updatedAt: new Date(session.updatedAt),
          messages: session.messages.map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp)
          }))
        }));
      } catch {
        return [];
      }
    }
    return [];
  });

  const [currentSessionId, setCurrentSessionId] = useState<string>(() => {
    const saved = localStorage.getItem('currentSessionId');
    if (saved && sessions.find(s => s.id === saved)) {
      return saved;
    }
    const newSessionId = `session-${Date.now()}`;
    return newSessionId;
  });

  const [showSidebar, setShowSidebar] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const currentSession = sessions.find(s => s.id === currentSessionId);
  const messages = currentSession?.messages || [];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    localStorage.setItem('chatSessions', JSON.stringify(sessions));
  }, [sessions]);

  useEffect(() => {
    localStorage.setItem('currentSessionId', currentSessionId);
  }, [currentSessionId]);

  useEffect(() => {
    if (currentSession && currentSession.messages.length > 0) {
      geminiService.restoreChatHistory(currentSession.messages);
    } else {
      geminiService.resetChat();
    }
  }, [currentSessionId]);

  const updateSessionMessages = (updater: (messages: Message[]) => Message[]) => {
    setSessions(prevSessions => {
      const sessionExists = prevSessions.find(s => s.id === currentSessionId);
      
      if (!sessionExists) {
        const newSession: ChatSession = {
          id: currentSessionId,
          title: 'New Chat',
          messages: updater([]),
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        return [newSession, ...prevSessions];
      }
      
      return prevSessions.map(session => {
        if (session.id === currentSessionId) {
          const updatedMessages = updater(session.messages);
          const title = session.title === 'New Chat' && updatedMessages.length > 0
            ? updatedMessages[0].content.slice(0, 50) + (updatedMessages[0].content.length > 50 ? '...' : '')
            : session.title;
          
          return {
            ...session,
            messages: updatedMessages,
            title,
            updatedAt: new Date(),
          };
        }
        return session;
      });
    });
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
      fileUrls: uploadedFiles.map(f => f.id),
    };

    updateSessionMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    const aiMessageId = (Date.now() + 1).toString();
    const aiPlaceholder: Message = {
      id: aiMessageId,
      role: 'model',
      content: '',
      timestamp: new Date(),
      isStreaming: true,
    };

    updateSessionMessages(prev => [...prev, aiPlaceholder]);

    try {
      let accumulatedText = '';

      await geminiService.sendMessageStream(text, (chunkText) => {
        accumulatedText += chunkText;
        
        updateSessionMessages(prev =>
          prev.map((msg) => 
            msg.id === aiMessageId 
              ? { ...msg, content: accumulatedText } 
              : msg
          )
        );
      });

      updateSessionMessages(prev =>
        prev.map((msg) => 
          msg.id === aiMessageId 
            ? { ...msg, isStreaming: false } 
            : msg
        )
      );

      setUploadedFiles([]);

    } catch (error) {
      console.error("Failed to generate response", error);
      
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred. Please try again.";
      
      updateSessionMessages(prev =>
        prev.map((msg) => 
          msg.id === aiMessageId 
            ? { 
                ...msg, 
                content: errorMessage, 
                isStreaming: false,
                isError: true
              } 
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = (file: UploadedFile) => {
    setUploadedFiles((prev) => [...prev, file]);
  };

  const handleRemoveFile = (fileId: string) => {
    setUploadedFiles((prev) => prev.filter(f => f.id !== fileId));
  };

  const handleClearChat = () => {
    if (window.confirm('Are you sure you want to clear all messages in this chat?')) {
      setSessions(prevSessions =>
        prevSessions.map(session =>
          session.id === currentSessionId
            ? { ...session, messages: [], updatedAt: new Date() }
            : session
        )
      );
      setUploadedFiles([]);
      geminiService.resetChat();
    }
  };

  const handleNewChat = () => {
    const newSessionId = `session-${Date.now()}`;
    setCurrentSessionId(newSessionId);
    geminiService.resetChat();
  };

  const handleSelectSession = (sessionId: string) => {
    setCurrentSessionId(sessionId);
  };

  const handleDeleteSession = (sessionId: string) => {
    if (window.confirm('Are you sure you want to delete this chat?')) {
      setSessions(prevSessions => {
        const filtered = prevSessions.filter(s => s.id !== sessionId);
        
        if (sessionId === currentSessionId) {
          if (filtered.length > 0) {
            setCurrentSessionId(filtered[0].id);
          } else {
            const newSessionId = `session-${Date.now()}`;
            setCurrentSessionId(newSessionId);
          }
        }
        
        return filtered;
      });
    }
  };

  return (
    <div className="flex h-screen bg-slate-900 text-gray-100">
      {showSidebar && (
        <ChatHistory
          sessions={sessions}
          currentSessionId={currentSessionId}
          onSelectSession={handleSelectSession}
          onNewChat={handleNewChat}
          onDeleteSession={handleDeleteSession}
        />
      )}
      
      <div className="flex-1 flex flex-col">
        <header className="flex-none bg-slate-800 border-b border-slate-700 px-6 py-4 shadow-sm z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <Menu size={20} />
            </button>
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
              <span className="material-symbols-rounded text-2xl">smart_toy</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-cyan-400 tracking-tight">Cyber AI</h1>
              <p className="text-xs text-slate-400 font-medium flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Powered by Gemini 3 Flash
              </p>
            </div>
          </div>
          {messages.length > 0 && (
            <button
              onClick={handleClearChat}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-700 transition-colors"
            >
              <Trash2 size={16} />
              Clear
            </button>
          )}
        </header>

      <main className="flex-1 overflow-hidden relative flex flex-col w-full">
        <div className="flex-1 overflow-y-auto px-4 py-6 md:px-8">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 opacity-60">
              <div className="w-24 h-24 bg-gradient-to-tr from-cyan-900 to-purple-900 rounded-full flex items-center justify-center mb-6 shadow-sm border border-cyan-500">
                <span className="material-symbols-rounded text-5xl text-cyan-400">
                  auto_awesome
                </span>
              </div>
              <h2 className="text-2xl font-semibold text-cyan-300 mb-2">How can I help you today?</h2>
              <p className="text-slate-400 max-w-md">
                I'm powered by Google Gemini. You can chat with me, ask questions, and upload files for analysis.
              </p>
            </div>
          ) : (
            messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))
          )}
          <div ref={messagesEndRef} className="h-4" />
        </div>

        <div className="flex-none bg-gradient-to-t from-slate-900 via-slate-900 to-transparent pt-10 pb-6">
          <div className="w-full max-w-4xl mx-auto px-4">
            {uploadedFiles.length > 0 && (
              <div className="mb-4 p-4 bg-slate-800 border border-cyan-500 rounded-lg">
                <h3 className="text-sm font-semibold text-cyan-300 mb-3">Uploaded Files ({uploadedFiles.length})</h3>
                <div className="space-y-2">
                  {uploadedFiles.map((file) => (
                    <div key={file.id} className="flex items-center justify-between bg-slate-700 p-3 rounded border border-slate-600">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-200 truncate">{file.name}</p>
                        <p className="text-xs text-slate-400">{(file.size / 1024).toFixed(1)} KB</p>
                      </div>
                      <button
                        onClick={() => handleRemoveFile(file.id)}
                        className="ml-2 text-slate-400 hover:text-red-400 transition-colors"
                      >
                        <span className="material-symbols-rounded text-lg">close</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
          </div>
        </div>
      </main>
      </div>
    </div>
  );
};
