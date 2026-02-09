export const firebaseConfig = {
  apiKey: "AIzaSyCMnAW2U0FFkDAUIedgQpY6qzbKZsMRRbs",
  authDomain: "cyberguard-edu-4978e.firebaseapp.com",
  projectId: "cyberguard-edu-4978e",
  storageBucket: "cyberguard-edu-4978e.firebasestorage.app",
  messagingSenderId: "801815484714",
  appId: "1:801815484714:web:59603c4f4bf865e76e2653"
};

let app, auth, db;

try {
  if (typeof window !== 'undefined') {
    const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js');
    const { getAuth } = await import('https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js');
    const { getFirestore } = await import('https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js');

    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    console.log('[Firebase] Initialized successfully');
  }
} catch (error) {
  console.warn('[Firebase] Initialization error:', error.message);
  console.warn('[Firebase] Auth features will be disabled. App will continue without authentication.');
}

export { app, auth, db };
