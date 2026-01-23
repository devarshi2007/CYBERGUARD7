/**
 * WCAG 2.2 AA Accessible Chatbot Implementation
 * 
 * Features:
 * - ARIA live regions for message announcements
 * - Keyboard navigation
 * - Focus management
 * - Loading states
 * - Error handling
 */

class AccessibleChatbot {
  constructor(options = {}) {
    this.chatContainer = options.container || document.getElementById('chat-messages');
    this.inputField = options.input || document.getElementById('chat-input');
    this.sendButton = options.sendButton || document.getElementById('send-btn');
    this.liveRegion = options.liveRegion || this.createLiveRegion();
    this.statusRegion = options.statusRegion || this.createStatusRegion();
    
    this.init();
  }

  init() {
    // Set up ARIA attributes
    this.setupARIA();
    
    // Attach event listeners
    this.attachEventListeners();
    
    // Announce chatbot ready
    this.announceStatus('Chatbot ready. Type your message and press Enter or click Send.');
  }

  /**
   * Create ARIA live region for message announcements
   */
  createLiveRegion() {
    const liveRegion = document.createElement('div');
    liveRegion.id = 'chat-live-region';
    liveRegion.setAttribute('role', 'log');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'false');
    liveRegion.setAttribute('aria-relevant', 'additions');
    liveRegion.className = 'sr-only';
    document.body.appendChild(liveRegion);
    return liveRegion;
  }

  /**
   * Create status region for loading/error states
   */
  createStatusRegion() {
    const statusRegion = document.createElement('div');
    statusRegion.id = 'chat-status-region';
    statusRegion.setAttribute('role', 'status');
    statusRegion.setAttribute('aria-live', 'polite');
    statusRegion.setAttribute('aria-atomic', 'true');
    statusRegion.className = 'sr-only';
    document.body.appendChild(statusRegion);
    return statusRegion;
  }

  /**
   * Set up ARIA attributes on chat elements
   */
  setupARIA() {
    // Chat messages container
    if (this.chatContainer) {
      this.chatContainer.setAttribute('role', 'log');
      this.chatContainer.setAttribute('aria-label', 'Chat conversation');
      this.chatContainer.setAttribute('aria-live', 'polite');
      this.chatContainer.setAttribute('aria-relevant', 'additions');
    }

    // Input field
    if (this.inputField) {
      this.inputField.setAttribute('aria-label', 'Type your message');
      this.inputField.setAttribute('aria-describedby', 'chat-instructions');
      this.inputField.setAttribute('aria-invalid', 'false');
      
      // Add instructions for screen readers
      const instructions = document.createElement('span');
      instructions.id = 'chat-instructions';
      instructions.className = 'sr-only';
      instructions.textContent = 'Type your cybersecurity question and press Enter to send';
      this.inputField.parentNode.insertBefore(instructions, this.inputField);
    }

    // Send button
    if (this.sendButton) {
      this.sendButton.setAttribute('aria-label', 'Send message');
      // Ensure disabled state is properly announced
      this.sendButton.disabled = false;
    }
  }

  /**
   * Attach event listeners
   */
  attachEventListeners() {
    if (this.sendButton) {
      this.sendButton.addEventListener('click', () => this.sendMessage());
    }

    if (this.inputField) {
      this.inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.sendMessage();
        }
      });

      // Clear error state on input
      this.inputField.addEventListener('input', () => {
        this.inputField.setAttribute('aria-invalid', 'false');
      });
    }
  }

  /**
   * Send message and handle response
   */
  async sendMessage() {
    const message = this.inputField.value.trim();

    if (!message) {
      this.inputField.setAttribute('aria-invalid', 'true');
      this.announceStatus('Please enter a message before sending');
      this.inputField.focus();
      return;
    }

    // Add user message
    this.addMessage('user', message);
    
    // Clear input
    this.inputField.value = '';
    this.inputField.setAttribute('aria-invalid', 'false');

    // Show loading state
    this.setLoadingState(true);
    this.announceStatus('Processing your message...');

    try {
      // Simulate API call (replace with actual chatbot logic)
      const response = await this.getChatbotResponse(message);
      
      // Add bot response
      this.addMessage('bot', response);
      
      // Announce completion
      this.announceStatus('Response received');
      
    } catch (error) {
      // Handle error
      this.addMessage('bot', 'Sorry, I encountered an error. Please try again.');
      this.announceStatus('Error: Unable to get response. Please try again.');
      
    } finally {
      // Remove loading state
      this.setLoadingState(false);
      
      // Return focus to input
      this.inputField.focus();
    }
  }

  /**
   * Add message to chat (with ARIA announcements)
   */
  addMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.setAttribute('role', 'article');
    messageDiv.setAttribute('aria-label', `${sender === 'user' ? 'You' : 'CyberGuard AI'} said:`);

    if (sender === 'bot') {
      // Add bot avatar
      const avatar = document.createElement('div');
      avatar.className = 'message-avatar';
      avatar.setAttribute('aria-hidden', 'true');
      avatar.innerHTML = `
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#6366F1"/>
          <path d="M16 8C13.79 8 12 9.79 12 12V14H10V20H22V14H20V12C20 9.79 18.21 8 16 8ZM16 10C17.1 10 18 10.9 18 12V14H14V12C14 10.9 14.9 10 16 10Z" fill="white"/>
        </svg>
      `;
      messageDiv.appendChild(avatar);
    }

    // Add message content
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = text;
    messageDiv.appendChild(contentDiv);

    // Add timestamp (for screen readers)
    const timestamp = document.createElement('time');
    timestamp.className = 'sr-only';
    timestamp.setAttribute('datetime', new Date().toISOString());
    timestamp.textContent = `Sent at ${new Date().toLocaleTimeString()}`;
    messageDiv.appendChild(timestamp);

    // Append to chat
    this.chatContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    this.chatContainer.scrollTop = this.chatContainer.scrollHeight;

    // Announce message to screen readers
    this.announceMessage(sender, text);
  }

  /**
   * Announce message via ARIA live region
   */
  announceMessage(sender, text) {
    const announcement = document.createElement('div');
    announcement.textContent = `${sender === 'user' ? 'You' : 'CyberGuard AI'}: ${text}`;
    
    // Clear previous announcements
    this.liveRegion.innerHTML = '';
    
    // Add new announcement
    this.liveRegion.appendChild(announcement);
    
    // Remove after announcement (prevent clutter)
    setTimeout(() => {
      announcement.remove();
    }, 3000);
  }

  /**
   * Announce status updates
   */
  announceStatus(message) {
    this.statusRegion.textContent = message;
    
    // Clear status after 3 seconds
    setTimeout(() => {
      this.statusRegion.textContent = '';
    }, 3000);
  }

  /**
   * Set loading state with ARIA busy
   */
  setLoadingState(isLoading) {
    if (isLoading) {
      // Disable input and button
      this.inputField.disabled = true;
      this.inputField.setAttribute('aria-busy', 'true');
      this.sendButton.disabled = true;
      this.sendButton.setAttribute('aria-busy', 'true');
      
      // Add visual loading indicator
      const loadingDiv = document.createElement('div');
      loadingDiv.id = 'chat-loading';
      loadingDiv.className = 'message bot-message loading';
      loadingDiv.setAttribute('role', 'status');
      loadingDiv.setAttribute('aria-label', 'Loading response');
      loadingDiv.innerHTML = `
        <div class="message-avatar" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#6366F1"/>
            <path d="M16 8C13.79 8 12 9.79 12 12V14H10V20H22V14H20V12C20 9.79 18.21 8 16 8ZM16 10C17.1 10 18 10.9 18 12V14H14V12C14 10.9 14.9 10 16 10Z" fill="white"/>
          </svg>
        </div>
        <div class="message-content">
          <span class="typing-indicator" aria-hidden="true">●●●</span>
          <span class="sr-only">Typing...</span>
        </div>
      `;
      this.chatContainer.appendChild(loadingDiv);
      
    } else {
      // Enable input and button
      this.inputField.disabled = false;
      this.inputField.removeAttribute('aria-busy');
      this.sendButton.disabled = false;
      this.sendButton.removeAttribute('aria-busy');
      
      // Remove loading indicator
      const loadingDiv = document.getElementById('chat-loading');
      if (loadingDiv) loadingDiv.remove();
    }
  }

  /**
   * Simulate chatbot response (replace with actual API)
   */
  async getChatbotResponse(message) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock response
    return `I received your message about "${message}". Here's some information about cybersecurity best practices...`;
  }

  /**
   * Clear chat history (accessible)
   */
  clearChat() {
    if (confirm('Are you sure you want to clear the chat history?')) {
      this.chatContainer.innerHTML = '';
      this.announceStatus('Chat history cleared');
      this.inputField.focus();
    }
  }

  /**
   * Export chat transcript (accessible)
   */
  exportTranscript() {
    const messages = this.chatContainer.querySelectorAll('.message');
    let transcript = 'CyberGuard AI Chat Transcript\n';
    transcript += `Generated: ${new Date().toLocaleString()}\n\n`;
    
    messages.forEach((msg, index) => {
      const sender = msg.classList.contains('user-message') ? 'You' : 'CyberGuard AI';
      const content = msg.querySelector('.message-content').textContent;
      transcript += `${sender}: ${content}\n\n`;
    });
    
    // Create downloadable file
    const blob = new Blob([transcript], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `chat-transcript-${Date.now()}.txt`;
    link.click();
    
    this.announceStatus('Chat transcript downloaded');
  }
}

// Initialize accessible chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Only initialize if chatbot elements exist
  if (document.getElementById('chat-messages')) {
    window.accessibleChatbot = new AccessibleChatbot({
      container: document.getElementById('chat-messages'),
      input: document.getElementById('chat-input'),
      sendButton: document.getElementById('send-btn')
    });
    
    // Expose clear and export functions
    window.clearChat = () => window.accessibleChatbot.clearChat();
    window.exportTranscript = () => window.accessibleChatbot.exportTranscript();
  }
});
