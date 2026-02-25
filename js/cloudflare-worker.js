const apiKeys = [
  env.GEMINI_API_KEY_1,
  env.GEMINI_API_KEY_2,
  env.GEMINI_API_KEY_3,
  env.GEMINI_API_KEY_4
].filter(Boolean);

if (apiKeys.length === 0) {
  console.error("No GEMINI API keys configured");
  return jsonResponse({ error: "Server configuration error" }, 500);
}

const modelName = body.model || "gemini-2.5-flash";
const geminiPayload = {
  contents: body.contents || [],
  systemInstruction: body.systemInstruction,
  generationConfig: body.generationConfig || {}
};

let lastError = null;

for (let i = 0; i < apiKeys.length; i++) {
  const apiKey = apiKeys[i];

  const endpoint = body.stream
    ? `${GEMINI_API_BASE}/v1beta/models/${modelName}:streamGenerateContent?key=${apiKey}`
    : `${GEMINI_API_BASE}/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(geminiPayload)
    });

    // ✅ Success
    if (response.ok) {
      console.log(`Success using API key index: ${i}`);

      if (body.stream) {
        return new Response(response.body, {
          status: response.status,
          headers: {
            "Content-Type": "text/plain",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
          }
        });
      } else {
        const data = await response.json();
        return jsonResponse(data, 200);
      }
    }

    // 🔁 If quota or rate limited → try next key
    if (response.status === 429 || response.status === 403) {
      console.warn(`API key ${i} quota exceeded. Trying next key...`);
      lastError = await response.text();
      continue;
    }

    // ❌ Other errors → return immediately
    const errorText = await response.text();
    console.error("Gemini API error:", errorText);
    return jsonResponse(
      { error: "API request failed", status: response.status },
      response.status
    );

  } catch (err) {
    console.error(`Error with API key ${i}:`, err.message);
    lastError = err.message;
    continue;
  }
}

// ❌ All keys failed
return jsonResponse({
  error: "All API keys exhausted",
  details: lastError
}, 503);
