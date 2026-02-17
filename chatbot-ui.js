const PROXY_URL = import.meta.env?.VITE_PROXY_URL || 'https://gemini-proxy.devarshithakur2007.workers.dev';

if (!window.ChatbotConfig) {
    console.error('❌ ChatbotConfig not found! Make sure config.js is loaded before chatbot-ui.js');
    throw new Error('ChatbotConfig is required');
}

const config = window.ChatbotConfig;
const MODEL_NAME = config.api.modelName;

console.log('🚀 Cyber AI Chatbot initialized');
console.log('📡 Using model:', MODEL_NAME);
console.log('🔒 Using secure proxy (API key hidden)');
console.log('🌐 Proxy URL:', PROXY_URL);
console.log('⚙️ Config loaded: Success');

let menuToggle, sidebar, chatInput, sendBtn, chatMessages, newChatBtn;

let chatHistoryMessages = [];
let isProcessing = false;
let currentChatId = null;
let chatHistory = [];

function loadChatHistory() {
    const saved = config.storage.load(config.chat.storageKey, null);
    if (saved) {
        chatHistory = saved;
        updateChatHistorySidebar();
    }
}

function saveChatHistory() {
    config.storage.save(config.chat.storageKey, chatHistory);
}

function saveCurrentChat() {
    const messages = chatMessages.querySelectorAll('.message:not(.welcome-screen)');
    if (messages.length === 0) return;

    const firstUserMessage = chatMessages.querySelector('.user-message .message-content');
    const title = firstUserMessage ? firstUserMessage.textContent.substring(0, 30) : 'New Chat';
    
    const chatData = {
        id: currentChatId || Date.now(),
        title: title,
        timestamp: new Date().toISOString(),
        messages: Array.from(messages).map(msg => ({
            type: msg.classList.contains('user-message') ? 'user' : 'bot',
            content: msg.querySelector('.message-content').innerHTML
        }))
    };

    currentChatId = chatData.id;

    const existingIndex = chatHistory.findIndex(c => c.id === chatData.id);
    if (existingIndex >= 0) {
        chatHistory[existingIndex] = chatData;
    } else {
        chatHistory.unshift(chatData);
    }

    saveChatHistory();
    updateChatHistorySidebar();
}

function loadChat(chatId) {
    const chatData = chatHistory.find(c => c.id === chatId);
    if (!chatData) return;

    currentChatId = chatId;
    chatMessages.innerHTML = '';
    chatHistoryMessages = [];
    
    chatData.messages.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${msg.type}-message`;
        
        if (msg.type === 'bot') {
            messageDiv.innerHTML = `
                <div class="message-avatar">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <rect width="32" height="32" rx="8" fill="#6366F1"/>
                        <path d="M16 8C13.79 8 12 9.79 12 12V14H10V20H22V14H20V12C20 9.79 18.21 8 16 8ZM16 10C17.1 10 18 10.9 18 12V14H14V12C14 10.9 14.9 10 16 10Z" fill="white"/>
                    </svg>
                </div>
                <div class="message-content">${msg.content}</div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-content">${msg.content}</div>
            `;
        }
        chatMessages.appendChild(messageDiv);
    });
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    if (config.ui.sidebar.closeOnChatSelect && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
}

function deleteChat(chatId, event) {
    event.stopPropagation();
    
    if (confirm('Are you sure you want to delete this chat?')) {
        chatHistory = chatHistory.filter(c => c.id !== chatId);
        saveChatHistory();
        updateChatHistorySidebar();
        
        if (currentChatId === chatId) {
            initChat();
            chatMessages.innerHTML = `
                <div class="welcome-screen">
                    <div class="sparkle-icon">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                            <circle cx="40" cy="40" r="40" fill="#E8E8FF" opacity="0.3"/>
                            <path d="M40 20L42.5 37.5L60 40L42.5 42.5L40 60L37.5 42.5L20 40L37.5 37.5L40 20Z" fill="#8B8BF6"/>
                            <path d="M52 28L53.5 34.5L60 36L53.5 37.5L52 44L50.5 37.5L44 36L50.5 34.5L52 28Z" fill="#8B8BF6"/>
                        </svg>
                    </div>
                    <h2 class="welcome-title">${config.prompts.welcome.title}</h2>
                    <p class="welcome-subtitle">${config.prompts.welcome.subtitle}</p>
                </div>
            `;
        }
    }
}

function updateChatHistorySidebar() {
    const historySection = document.querySelector('.chat-history-section');
    
    if (chatHistory.length === 0) {
        historySection.innerHTML = `
            <h3 class="chat-history-title">CHAT HISTORY</h3>
            <p class="no-history">No chat history yet</p>
        `;
        return;
    }

    let historyHTML = '<h3 class="chat-history-title">CHAT HISTORY</h3><div class="chat-history-list">';
    
    chatHistory.forEach(chat => {
        const date = new Date(chat.timestamp);
        const dateStr = date.toLocaleDateString('en-GB');
        historyHTML += `
            <div class="chat-history-item" data-chat-id="${chat.id}">
                <div class="chat-info">
                    <div class="chat-title">${escapeHtml(chat.title)}</div>
                    <div class="chat-date">${dateStr}</div>
                </div>
                <button class="delete-chat-btn" data-chat-id="${chat.id}" title="Delete chat">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M2 4h12M5.333 4V2.667a1.333 1.333 0 0 1 1.334-1.334h2.666a1.333 1.333 0 0 1 1.334 1.334V4m2 0v9.333a1.333 1.333 0 0 1-1.334 1.334H4.667a1.333 1.333 0 0 1-1.334-1.334V4h9.334Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        `;
    });
    
    historyHTML += '</div>';
    historySection.innerHTML = historyHTML;

    document.querySelectorAll('.chat-history-item').forEach(item => {
        const chatId = parseInt(item.getAttribute('data-chat-id'));
        
        item.addEventListener('click', (e) => {
            if (!e.target.closest('.delete-chat-btn')) {
                loadChat(chatId);
            }
        });
        
        const deleteBtn = item.querySelector('.delete-chat-btn');
        if (deleteBtn) {
            deleteBtn.addEventListener('click', (e) => {
                deleteChat(chatId, e);
            });
        }
    });
}

function initChat() {
    chatHistoryMessages = [];
    currentChatId = null;
    console.log('✅ Chat session created');
}

function initializeUI() {
    menuToggle = document.getElementById('menu-toggle');
    sidebar = document.querySelector('.sidebar');
    chatInput = document.getElementById('chat-input');
    sendBtn = document.getElementById('send-btn');
    chatMessages = document.getElementById('chat-messages');
    newChatBtn = document.querySelector('.new-chat-btn');

    if (!chatInput || !sendBtn || !chatMessages) {
        console.error('❌ Required elements not found!');
        console.log('chatInput:', chatInput);
        console.log('sendBtn:', sendBtn);
        console.log('chatMessages:', chatMessages);
        return false;
    }

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    document.addEventListener('click', (e) => {
        if (sidebar && menuToggle && sidebar.classList.contains('active') && 
            !sidebar.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });

    if (chatInput) {
        chatInput.placeholder = config.ui.input.placeholder;
        chatInput.maxLength = config.ui.input.maxLength;
    }

    if (newChatBtn) {
        newChatBtn.addEventListener('click', () => {
            saveCurrentChat();
            initChat();
            chatMessages.innerHTML = `
                <div class="welcome-screen">
                    <div class="sparkle-icon">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                            <circle cx="40" cy="40" r="40" fill="#E8E8FF" opacity="0.3"/>
                            <path d="M40 20L42.5 37.5L60 40L42.5 42.5L40 60L37.5 42.5L20 40L37.5 37.5L40 20Z" fill="#8B8BF6"/>
                            <path d="M52 28L53.5 34.5L60 36L53.5 37.5L52 44L50.5 37.5L44 36L50.5 34.5L52 28Z" fill="#8B8BF6"/>
                        </svg>
                    </div>
                    <h2 class="welcome-title">${config.prompts.welcome.title}</h2>
                    <p class="welcome-subtitle">${config.prompts.welcome.subtitle}</p>
                </div>
            `;
        });
    }

    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (config.ui.input.submitOnEnter && e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
        if (config.ui.input.shiftEnterForNewLine && e.key === 'Enter' && e.shiftKey) {
        }
    });

    console.log('✅ UI initialized successfully');
    return true;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (initializeUI()) {
            loadChatHistory();
            initChat();
        }
    });
} else {
    if (initializeUI()) {
        loadChatHistory();
        initChat();
    }
}

function handleDemoCommand(message, contentDiv) {
    const command = message.substring(6).trim();
    
    const demo = config.demos[command];
    if (demo) {
        contentDiv.innerHTML = formatMessage(demo.content);
    } else {
        contentDiv.innerHTML = formatMessage(`
**Available Demonstrations:**

- \`/demo prompt-injection\` - Learn about AI prompt injection attacks
- \`/demo log-analysis\` - Analyze security logs for threats

Try one of these commands to see educational security demonstrations!
`);
    }
    
    isProcessing = false;
    sendBtn.disabled = false;
    chatMessages.scrollTop = chatMessages.scrollHeight;
    saveCurrentChat();
}

async function sendMessage() {
    const message = chatInput.value.trim();
    console.log('📤 Sending message:', message);
    
    if (!config.functions.validateMessage(message)) {
        console.log('⚠️ Invalid message, ignoring');
        return;
    }
    
    if (isProcessing) {
        console.log('⚠️ Already processing, ignoring');
        return;
    }

    const welcomeScreen = document.querySelector('.welcome-screen');
    if (welcomeScreen) {
        welcomeScreen.remove();
    }

    addMessage(message, 'user');
    chatInput.value = '';
    isProcessing = true;
    sendBtn.disabled = true;

    chatHistoryMessages.push({
        role: 'user',
        parts: [{ text: message }]
    });

    const botMessageDiv = createBotMessage(`<span class="typing-indicator">${config.chat.typingIndicator}</span>`);
    const contentDiv = botMessageDiv.querySelector('.message-content');

    if (message.startsWith('/demo ')) {
        handleDemoCommand(message, contentDiv);
        return;
    }

    const predefinedResponse = config.functions.checkPredefinedResponse(message);
    if (predefinedResponse) {
        contentDiv.innerHTML = formatMessage(predefinedResponse);
        chatHistoryMessages.push({
            role: 'model',
            parts: [{ text: predefinedResponse }]
        });
        isProcessing = false;
        sendBtn.disabled = false;
        chatMessages.scrollTop = chatMessages.scrollHeight;
        saveCurrentChat();
        return;
    }

    try {
        console.log('🔄 Sending to proxy...');
        
        const response = await fetch(PROXY_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: MODEL_NAME,
                contents: chatHistoryMessages,
                systemInstruction: {
                    parts: [{ text: config.systemInstruction }]
                }
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response received';
        
        contentDiv.innerHTML = formatMessage(aiResponse);
        
        chatHistoryMessages.push({
            role: 'model',
            parts: [{ text: aiResponse }]
        });
        
        console.log('✅ Response received successfully');
        isProcessing = false;
        sendBtn.disabled = false;
        chatMessages.scrollTop = chatMessages.scrollHeight;
        saveCurrentChat();

    } catch (error) {
        console.error('❌ Error:', error);
        
        if (error.message.includes('429') || error.message.includes('Rate limit')) {
            contentDiv.innerHTML = `
                <div style="color: #EF4444; margin-bottom: 0.5rem;">⚠️ <strong>Request Failed</strong></div>
                <div style="color: #F59E0B; margin-bottom: 0.5rem;">An error occurred while processing your request.</div>
                <div style="color: #94A3B8; font-size: 0.9rem;">
                    Please try again.
                </div>
            `;
        } else {
            const errorMessage = error.message || 'An unexpected error occurred';
            contentDiv.innerHTML = `<span style="color: #EF4444;">Error: ${errorMessage}</span>`;
        }
        
        chatHistoryMessages.pop();
        
        isProcessing = false;
        sendBtn.disabled = false;
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

function createBotMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message';
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#6366F1"/>
                <path d="M16 8C13.79 8 12 9.79 12 12V14H10V20H22V14H20V12C20 9.79 18.21 8 16 8ZM16 10C17.1 10 18 10.9 18 12V14H14V12C14 10.9 14.9 10 16 10Z" fill="white"/>
            </svg>
        </div>
        <div class="message-content">${text}</div>
    `;
    chatMessages.appendChild(messageDiv);
    return messageDiv;
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    if (sender === 'bot') {
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" rx="8" fill="#6366F1"/>
                    <path d="M16 8C13.79 8 12 9.79 12 12V14H10V20H22V14H20V12C20 9.79 18.21 8 16 8ZM16 10C17.1 10 18 10.9 18 12V14H14V12C14 10.9 14.9 10 16 10Z" fill="white"/>
                </svg>
            </div>
            <div class="message-content">${formatMessage(text)}</div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="message-content">${escapeHtml(text)}</div>
        `;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function formatMessage(text) {
    return config.functions.formatMessage(text);
}

function escapeHtml(text) {
    return config.functions.escapeHtml(text);
}

window.addEventListener('beforeunload', () => {
    saveCurrentChat();
});
