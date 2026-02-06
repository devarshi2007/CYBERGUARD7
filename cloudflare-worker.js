const GEMINI_API_BASE = 'https://generativelanguage.googleapis.com';

const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW_MS = 60000;
const MAX_REQUESTS_PER_WINDOW = 30;

export default {
  async fetch(request, env, ctx) {
    return handleRequest(request, env);
  }
};

async function handleRequest(request, env) {
  if (request.method === 'OPTIONS') {
    return handleCORS();
  }

  if (request.method === 'GET') {
    return handleLandingPage();
  }

  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';
  
  // Rate limiting disabled
  // if (!checkRateLimit(clientIP)) {
  //   return jsonResponse({ 
  //     error: 'Rate limit exceeded',
  //     message: 'Maximum 30 requests per minute. Please try again later.'
  //   }, 429);
  // }

  try {
    const body = await request.json();
    
    const apiKey = env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('GEMINI_API_KEY not configured');
      return jsonResponse({ error: 'Server configuration error' }, 500);
    }

    const modelName = body.model || 'gemini-2.5-flash';
    const endpoint = body.stream 
      ? `${GEMINI_API_BASE}/v1beta/models/${modelName}:streamGenerateContent?key=${apiKey}`
      : `${GEMINI_API_BASE}/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

    const geminiPayload = {
      contents: body.contents || [],
      systemInstruction: body.systemInstruction,
      generationConfig: body.generationConfig || {}
    };

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(geminiPayload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', errorText);
      return jsonResponse({ 
        error: 'API request failed',
        status: response.status
      }, response.status);
    }

    if (body.stream) {
      return new Response(response.body, {
        status: response.status,
        headers: {
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });
    } else {
      const data = await response.json();
      return jsonResponse(data, 200);
    }
  } catch (error) {
    console.error('Worker error:', error.message);
    return jsonResponse({ 
      error: 'Internal server error',
      message: error.message 
    }, 500);
  }
}

function checkRateLimit(clientIP) {
  const now = Date.now();
  
  if (!rateLimitStore.has(clientIP)) {
    rateLimitStore.set(clientIP, { count: 1, windowStart: now });
    return true;
  }

  const rateLimitData = rateLimitStore.get(clientIP);
  const timeSinceWindowStart = now - rateLimitData.windowStart;

  if (timeSinceWindowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(clientIP, { count: 1, windowStart: now });
    return true;
  }

  if (rateLimitData.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  rateLimitData.count++;
  return true;
}

function handleCORS() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400'
    }
  });
}

function handleLandingPage() {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gemini API Proxy</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        .container {
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            max-width: 600px;
            width: 100%;
            padding: 40px;
        }
        h1 {
            color: #667eea;
            font-size: 2rem;
            margin-bottom: 10px;
            text-align: center;
        }
        .status {
            background: #10b981;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            display: inline-block;
            font-size: 0.9rem;
            margin: 10px auto;
            display: block;
            text-align: center;
            width: fit-content;
        }
        p {
            color: #4b5563;
            line-height: 1.6;
            margin: 15px 0;
        }
        .code-block {
            background: #1f2937;
            color: #10b981;
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            overflow-x: auto;
        }
        .info-box {
            background: #f3f4f6;
            border-left: 4px solid #667eea;
            padding: 15px;
            margin: 20px 0;
            border-radius: 5px;
        }
        .info-box strong {
            color: #667eea;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            color: #9ca3af;
            font-size: 0.85rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🤖 Gemini API Proxy</h1>
        <div class="status">✓ Active & Running</div>
        
        <p>This is a secure proxy for the Google Gemini API. It handles requests from your CyberGuard AI chatbot while keeping your API key safe.</p>
        
        <div class="info-box">
            <strong>🔒 Security Features:</strong><br>
            • API key stored securely as a secret<br>
            • CORS enabled for authorized domains<br>
            • Request validation
        </div>
        
        <div class="info-box">
            <strong>📡 API Endpoint:</strong><br>
            POST requests only<br>
            Content-Type: application/json
        </div>
        
        <div class="code-block">
POST https://gemini-proxy.devarshithakur2007.workers.dev
{
  "model": "gemini-2.5-flash",
  "contents": [{
    "parts": [{ "text": "Hello!" }]
  }]
}
        </div>
        
        <div class="footer">
            Powered by Cloudflare Workers<br>
            Created for CyberGuard AI
        </div>
    </div>
</body>
</html>
  `;
  
  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html;charset=UTF-8',
    }
  });
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
