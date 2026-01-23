# 🔐 Gemini API Proxy Deployment Guide

## Quick Setup (Cloudflare Workers)

### 1. Create Cloudflare Account
- Go to [cloudflare.com](https://cloudflare.com)
- Sign up for free account
- Navigate to Workers & Pages

### 2. Deploy the Worker

**Option A: Dashboard Deployment (Easiest)**
1. Go to Workers & Pages → Create Application → Create Worker
2. Name it `gemini-proxy`
3. Click "Deploy"
4. Click "Edit Code"
5. Replace all code with contents of `cloudflare-worker.js`
6. Click "Save and Deploy"

**Option B: CLI Deployment (Recommended)**
```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy the worker
wrangler deploy cloudflare-worker.js
```

### 3. Add Your API Key as Secret
```bash
# Using CLI (recommended - never exposes the key)
wrangler secret put GEMINI_API_KEY
# Paste: AIzaSyB_v9RY1yMcPBPGq2jjKSG5ABV3kVsIwL8

# Or via Dashboard
# Workers → gemini-proxy → Settings → Variables → Add Secret
# Name: GEMINI_API_KEY
# Value: AIzaSyB_v9RY1yMcPBPGq2jjKSG5ABV3kVsIwL8
```

### 4. Get Your Worker URL
After deployment, you'll get a URL like:
```
https://gemini-proxy.YOUR-SUBDOMAIN.workers.dev
```

### 5. Update Frontend Code
Replace the code in `chatbot-ui.js` with `chatbot-ui-updated.js`

Update your worker URL in config:
```javascript
const PROXY_URL = 'https://gemini-proxy.YOUR-SUBDOMAIN.workers.dev';
```

### 6. Remove Exposed API Key
In `config.js`, replace:
```javascript
api: {
    key: 'AIzaSyB_v9RY1yMcPBPGq2jjKSG5ABV3kVsIwL8', // DELETE THIS
```

With:
```javascript
api: {
    key: '', // Removed - now using secure proxy
```

### 7. Test Your Setup
```bash
curl -X POST https://gemini-proxy.YOUR-SUBDOMAIN.workers.dev \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gemini-2.5-flash",
    "contents": [{
      "parts": [{ "text": "Hello!" }]
    }]
  }'
```

---

## Alternative: Vercel Deployment

### 1. Create `api/gemini-proxy.js`
```javascript
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const rateLimits = new Map();

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    return res.status(200).json({});
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = req.headers['x-forwarded-for'] || 'unknown';
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ error: 'Rate limit exceeded' });
  }

  try {
    const { model = 'gemini-2.5-flash', contents, systemInstruction } = req.body;
    
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents, systemInstruction })
      }
    );

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

function checkRateLimit(ip) {
  const now = Date.now();
  const limit = rateLimits.get(ip);
  
  if (!limit || now - limit.start > 60000) {
    rateLimits.set(ip, { count: 1, start: now });
    return true;
  }
  
  if (limit.count >= 30) return false;
  limit.count++;
  return true;
}
```

### 2. Deploy to Vercel
```bash
npm install -g vercel
vercel login
vercel --prod
vercel env add GEMINI_API_KEY
```

Your endpoint: `https://YOUR-PROJECT.vercel.app/api/gemini-proxy`

---

## 🔒 Security Benefits

### Before (Insecure)
❌ API key visible in browser DevTools  
❌ API key in source code  
❌ Anyone can steal and abuse your key  
❌ Unlimited requests → quota drain  
❌ Key exposure in network requests  

### After (Secure)
✅ API key stored as encrypted secret  
✅ Key never sent to browser  
✅ Rate limiting prevents abuse (30 req/min)  
✅ CORS protection  
✅ Request validation  
✅ Error handling without key exposure  
✅ IP-based rate limiting  

**Cost**: FREE (Cloudflare: 100k req/day, Vercel: 100k req/month)

---

## 🧪 Testing Checklist

- [ ] Worker deployed successfully
- [ ] API key added as secret (not hardcoded)
- [ ] Frontend updated to use proxy URL
- [ ] Test chat message works
- [ ] Test rate limiting (send 31 requests quickly)
- [ ] Verify API key not in browser Network tab
- [ ] Check browser console for errors
- [ ] Test from different device/IP

---

## 🚨 Important Notes

1. **Never commit** `wrangler.toml` with secrets to Git
2. **Delete** old API key from `config.js` immediately
3. **Generate new key** if old one was already exposed
4. **Monitor usage** at [Google AI Studio](https://aistudio.google.com)
5. **Set quota limits** in Google Cloud Console

---

## 📞 Troubleshooting

**"Worker not found"**
→ Check worker name matches URL

**"GEMINI_API_KEY is not defined"**
→ Run `wrangler secret put GEMINI_API_KEY`

**"CORS error"**
→ Check proxy URL matches exactly (https://)

**"Rate limit exceeded"**
→ Wait 1 minute or increase `MAX_REQUESTS_PER_WINDOW`

**"Invalid API key"**
→ Verify key in Cloudflare dashboard secrets

---

**Total deployment time: ~5 minutes** ⚡
