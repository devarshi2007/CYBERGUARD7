# Security Headers Implementation Guide

This guide covers HTTP Security Headers required for the CyberGuard website. These headers protect against common web vulnerabilities including XSS, clickjacking, MIME sniffing, and man-in-the-middle attacks.

## Quick Overview

| Header | Purpose | Status |
|--------|---------|--------|
| HSTS | Enforces HTTPS connection | **✅ Implemented** |
| CSP | Prevents XSS & injection attacks | **✅ Implemented** |
| X-Content-Type-Options | Prevents MIME sniffing | **✅ Implemented** |
| X-Frame-Options | Prevents clickjacking | **✅ Implemented** |
| X-XSS-Protection | Legacy XSS protection | **✅ Implemented** |
| Referrer-Policy | Controls referrer leakage | **✅ Implemented** |
| Permissions-Policy | Restricts browser features | **✅ Implemented** |

---

## Implementation Methods

### 1. Apache (.htaccess) - RECOMMENDED
**File location:** Root directory of your website

```apache
# Copy the .htaccess file included in this project
# Make sure mod_headers and mod_rewrite are enabled on your server
```

**Enable Apache modules:**
```bash
a2enmod headers
a2enmod rewrite
systemctl restart apache2
```

---

### 2. Nginx

Add to your Nginx server configuration block:

```nginx
# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name cyberguard.com www.cyberguard.com;
    return 301 https://$server_name$request_uri;
}

# HTTPS Server Block
server {
    listen 443 ssl http2;
    server_name cyberguard.com www.cyberguard.com;
    
    # SSL Configuration
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    
    # Security Headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: https:; frame-src 'self' www.youtube.com www.g2.com www.clutch.co www.capterra.com; connect-src 'self' https:; object-src 'none'; base-uri 'self'; form-action 'self'" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
    
    # Gzip Compression
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css text/xml text/javascript application/json application/javascript;
    
    # Caching
    location ~* \.(js|css|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
    
    location ~* \.html$ {
        expires 0;
        add_header Cache-Control "public, max-age=0, must-revalidate";
    }
}
```

---

### 3. Node.js/Express

Install helmet middleware:

```bash
npm install helmet
```

Use in your Express app:

```javascript
const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet());
app.use(helmet.hsts({
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
}));

app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', 
        "default-src 'self'; script-src 'self' 'unsafe-inline' cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: https:; frame-src 'self' www.youtube.com www.g2.com www.clutch.co www.capterra.com; connect-src 'self' https:; object-src 'none'; base-uri 'self'; form-action 'self'"
    );
    next();
});
```

---

### 4. Cloudflare

Go to **Security** → **Headers** and add custom headers:

1. **Strict-Transport-Security (HSTS)**
   - Max Age: `31536000` (1 year)
   - Include Subdomains: `Yes`
   - Preload: `Yes`

2. **X-Content-Type-Options**
   - Value: `nosniff`

3. **X-Frame-Options**
   - Value: `SAMEORIGIN`

4. **Referrer-Policy**
   - Value: `strict-origin-when-cross-origin`

---

## Header Explanations

### Strict-Transport-Security (HSTS)
- **What it does:** Forces browsers to use HTTPS for all communication
- **Max-Age:** 31536000 seconds = 1 year
- **IncludeSubDomains:** Applies to all subdomains
- **Preload:** Allows inclusion in browser's HSTS preload list

### Content-Security-Policy (CSP)
- **What it does:** Restricts script sources and prevents XSS attacks
- **Directives:**
  - `default-src 'self'`: Only load from same origin by default
  - `script-src`: Allow scripts from self and CDNs
  - `style-src`: Allow styles from self and Google Fonts
  - `frame-src`: Allow iframes from YouTube, G2, Clutch, Capterra
  - `img-src`: Allow images from self, data URIs, and HTTPS
  - `object-src 'none'`: Prevent plugins

### X-Content-Type-Options
- **What it does:** Prevents MIME type sniffing attacks
- **Value:** `nosniff` - Browser must respect Content-Type header

### X-Frame-Options
- **What it does:** Prevents clickjacking attacks
- **Value:** `SAMEORIGIN` - Allow framing only from same origin

### Permissions-Policy
- **What it does:** Restricts access to browser features
- **Value:** Disables geolocation, microphone, camera

---

## Verification

### Test Your Headers

Visit one of these tools to verify your headers are properly set:

1. **Mozilla Observatory**
   - https://observatory.mozilla.org/
   - Scans your site for security best practices

2. **SSL Labs**
   - https://www.ssllabs.com/ssltest/
   - Tests SSL/TLS configuration and security headers

3. **Security Headers**
   - https://securityheaders.com/
   - Specifically checks HTTP security headers

### Manual Testing (using curl)

```bash
curl -I https://cyberguard.com
```

Look for these headers in the response:
```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
Content-Security-Policy: ...
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: ...
```

---

## Additional Security Recommendations

### 1. SSL/TLS Certificate
- Use Let's Encrypt (free) or a commercial CA
- Support TLS 1.2+ only
- Use strong ciphers (avoid RC4, MD5)

### 2. DNS Security
- Enable DNSSEC
- Use DNS provider with DDoS protection

### 3. Monitoring
- Set up error logging
- Monitor for suspicious traffic patterns
- Use Web Application Firewall (WAF)

### 4. Regular Updates
- Keep all software updated
- Monitor security advisories
- Run security audits quarterly

### 5. Privacy Compliance
- Implement Privacy Policy
- Support GDPR/CCPA requests
- Handle data securely

---

## Deployment Checklist

- [ ] SSL/TLS certificate installed and valid
- [ ] HSTS header enabled (start with short max-age, then increase)
- [ ] Content-Security-Policy tested and deployed
- [ ] Security headers verified using tools
- [ ] HTTP redirects to HTTPS
- [ ] DNSSEC enabled
- [ ] Server information headers removed
- [ ] Error pages don't leak sensitive info
- [ ] Regular security testing scheduled
- [ ] Incident response plan documented

---

## Support & Questions

For help implementing these headers:
- Check your hosting provider's documentation
- Review OWASP Secure Headers Project
- Visit https://securityheaders.com for recommendations
