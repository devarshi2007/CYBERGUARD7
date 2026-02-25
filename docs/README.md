# 🛡️ CyberGuard - Cybersecurity Education Platform

A comprehensive, interactive cybersecurity education platform designed to teach users about digital security, threats, and best practices through engaging tools and educational content.

## 🌟 Features

### 🎓 Learning & Education
- **Interactive Cyber Hygiene Checklist** - Track your security progress with a comprehensive 10-point checklist
- **Phishing Detective Lab** - Test your ability to identify phishing emails with real-world scenarios
- **Beginner-Friendly Tutorials** - Step-by-step guides covering passwords, 2FA, encryption, and more
- **Secure Coding Practices** - Learn secure development principles and best practices
- **Network Security Basics** - Understand firewalls, VPNs, SSL/TLS, and network protection
- **Encryption Fundamentals** - Master symmetric/asymmetric encryption and hashing

### 🛠️ Cybersecurity Tools
- **Password Strength Checker** - Analyze password security with real-time feedback
- **Hash Generator** - Generate MD5, SHA-256, SHA-512 hashes for various inputs
- **Base64 Encoder/Decoder** - Encode and decode Base64 strings
- **URL Encoder/Decoder** - Handle URL encoding for web security
- **Text Case Converter** - Convert text cases for various security contexts

### 📊 Interactive Features
- **Live Threat Monitor** - Real-time cybersecurity threat statistics and trends
- **Cyber News Feed** - Latest cybersecurity news and updates
- **Attack Mapper** - Visualize common attack vectors and defense strategies
- **Behavior Simulator** - Learn safe vs. risky online behaviors

### 🎨 User Experience
- **Dark/Light Theme Toggle** - Seamless theme switching with persistence
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Progressive Web App (PWA)** - Installable app with offline capabilities
- **Accessibility Compliant** - Full ARIA support and keyboard navigation

## 🚀 Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Variables for theming
- **Icons**: Unicode emojis and custom CSS icons
- **APIs**: RESTful API integration for dynamic content
- **PWA**: Service Worker, Web App Manifest, offline caching
- **Storage**: LocalStorage for user preferences and progress

## 📁 Project Structure

```
cyberguard/
├── index.html              # Homepage with overview and features
├── learning.html           # Educational content and interactive labs
├── tools.html              # Cybersecurity tools and utilities
├── header.html             # Navigation header component
├── footer.html             # Footer with links and social media
├── style.css               # Main stylesheet with themes
├── script.js               # Main JavaScript functionality
├── sw.js                   # Service Worker for PWA features
├── manifest.json           # PWA manifest configuration
└── README.md              # Project documentation
```

## 🛠️ Installation & Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for full PWA functionality)

### Local Development
1. **Clone or download** the project files
2. **Open `index.html`** in your web browser
3. For full PWA functionality, serve via local web server:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```

### PWA Installation
1. Open the website in a supported browser (Chrome/Edge recommended)
2. Click the install prompt or browser menu → "Install CyberGuard"
3. The app will be available offline and function like a native application

## 🎯 Key Components

### Cyber Hygiene Checklist
- 10 essential security practices
- Progress tracking with visual indicators
- Certificate generation upon completion
- Persistent storage of user progress

### Phishing Detective Lab
- Interactive email scenarios
- Real-time scoring system
- Educational feedback for each decision
- Multiple difficulty levels

### Security Tools Suite
- Password analysis with strength indicators
- Cryptographic hash generation
- Encoding/decoding utilities
- Real-time processing with instant results

## 🔒 Security Features

- **Input Validation**: All user inputs are validated and sanitized
- **Error Handling**: Comprehensive error boundaries and fallback mechanisms
- **Secure Storage**: Sensitive data handled with appropriate security measures
- **HTTPS Ready**: Designed for secure HTTPS deployment
- **Content Security**: Safe handling of external resources and APIs

## 📱 Progressive Web App (PWA)

CyberGuard is a fully functional PWA with:
- **Offline Capability**: Core functionality works without internet
- **Installable**: Can be installed on desktop and mobile devices
- **Fast Loading**: Cached resources for instant loading
- **Background Sync**: Data synchronization when online
- **Push Notifications**: Security alert notifications (future feature)

## ♿ Accessibility

- **WCAG 2.1 AA Compliant**: Full accessibility support
- **Screen Reader Compatible**: ARIA labels and semantic HTML
- **Keyboard Navigation**: All features accessible via keyboard
- **High Contrast Support**: Clear visibility in all themes
- **Focus Management**: Proper focus indicators and navigation

## 📊 Performance

- **Optimized Assets**: Efficient loading of resources
- **Lazy Loading**: Components load as needed
- **Caching Strategy**: Intelligent caching for better performance
- **Mobile Optimized**: Fast loading on mobile networks
- **Memory Efficient**: Minimal memory footprint

## 🎓 Educational Value

This project demonstrates:
- **Modern Web Development**: HTML5, CSS3, ES6+ JavaScript
- **Progressive Web Apps**: Service workers, manifests, offline functionality
- **User Experience Design**: Intuitive interfaces and interactions
- **Accessibility**: Inclusive design principles
- **Security Awareness**: Practical cybersecurity education
- **Responsive Design**: Cross-device compatibility

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select main branch as source
4. Access at `https://username.github.io/repository-name`

### Netlify/Vercel
1. Connect GitHub repository
2. Automatic deployments on push
3. HTTPS enabled by default
4. CDN distribution worldwide

### Traditional Hosting
1. Upload files to web server
2. Ensure HTTPS certificate
3. Configure proper MIME types
4. Test PWA functionality

## 🤝 Contributing

This project serves as a comprehensive example of modern web development and cybersecurity education. For educational purposes, consider:

1. **Fork** the repository
2. **Add** new security tools or educational content
3. **Improve** existing features
4. **Test** across different browsers and devices
5. **Submit** pull requests with improvements

## 📄 License

This project is created for educational purposes as part of a diploma final year project. All rights reserved.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern cybersecurity platforms and educational resources
- **API Providers**: Various cybersecurity data sources and APIs
- **Open Source Libraries**: jsPDF for certificate generation
- **Educational Content**: Based on industry best practices and standards

## 📞 Support

For questions about this project or cybersecurity education:
- Review the code comments for implementation details
- Check browser console for debugging information
- Test functionality across different devices and browsers

---

**Built with ❤️ for cybersecurity education and awareness**

*Diploma Final Year Project - Modern Web Development & Cybersecurity Education*
