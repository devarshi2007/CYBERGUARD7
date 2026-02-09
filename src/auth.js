import { auth } from './lib/firebase.js';

let firebaseAuthModule = null;

async function loadFirebaseAuth() {
  if (!firebaseAuthModule) {
    try {
      firebaseAuthModule = await import('https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js');
    } catch (error) {
      console.warn('[Auth] Firebase auth module could not be loaded:', error.message);
    }
  }
  return firebaseAuthModule;
}

function initAuth() {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const resetPasswordForm = document.getElementById('reset-password-form');
  const authOverlay = document.getElementById('auth-overlay');
  const btnShowLogin = document.getElementById('btn-show-login');
  const btnShowSignup = document.getElementById('btn-show-signup');
  const btnHideLogin = document.getElementById('btn-hide-login');
  const btnHideSignup = document.getElementById('btn-hide-signup');
  const btnForgotPassword = document.getElementById('btn-forgot-password');
  const btnHideReset = document.getElementById('btn-hide-reset');

  if (!loginForm || !signupForm || !resetPasswordForm || !authOverlay || !btnShowLogin || !btnShowSignup) {
    console.error('[Auth] Auth elements not found');
    return;
  }

  console.log('[Auth] Initializing authentication UI');

  function showOverlay() {
    authOverlay.style.display = 'block';
  }

  function hideOverlay() {
    authOverlay.style.display = 'none';
  }

  btnShowLogin.onclick = () => {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
    showOverlay();
  };

  btnShowSignup.onclick = () => {
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
    showOverlay();
  };

  btnHideLogin.onclick = () => {
    loginForm.style.display = 'none';
    hideOverlay();
  };

  btnHideSignup.onclick = () => {
    signupForm.style.display = 'none';
    hideOverlay();
  };

  btnForgotPassword.onclick = () => {
    loginForm.style.display = 'none';
    resetPasswordForm.style.display = 'block';
  };

  btnHideReset.onclick = () => {
    resetPasswordForm.style.display = 'none';
    hideOverlay();
  };

  authOverlay.onclick = () => {
    loginForm.style.display = 'none';
    signupForm.style.display = 'none';
    resetPasswordForm.style.display = 'none';
    hideOverlay();
  };

  document.getElementById('signup-form-element').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (!auth) {
      alert('Authentication service is currently unavailable. Please try again later.');
      return;
    }

    try {
      const authModule = await loadFirebaseAuth();
      if (!authModule) {
        throw new Error('Authentication module could not be loaded');
      }
      const userCredential = await authModule.createUserWithEmailAndPassword(auth, email, password);
      await authModule.sendEmailVerification(userCredential.user);
      alert('Account created! Verification email sent. Please check your inbox and verify your email.');
      signupForm.style.display = 'none';
      hideOverlay();
      document.getElementById('signup-form-element').reset();
    } catch (error) {
      alert('Error: ' + error.message);
    }
  });

  document.getElementById('login-form-element').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (!auth) {
      alert('Authentication service is currently unavailable. Please try again later.');
      return;
    }

    try {
      const authModule = await loadFirebaseAuth();
      if (!authModule) {
        throw new Error('Authentication module could not be loaded');
      }
      await authModule.signInWithEmailAndPassword(auth, email, password);
      alert('Logged in successfully!');
      loginForm.style.display = 'none';
      hideOverlay();
      document.getElementById('login-form-element').reset();
    } catch (error) {
      alert('Error: ' + error.message);
    }
  });

  document.getElementById('reset-password-form-element').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('reset-email').value;

    if (!auth) {
      alert('Authentication service is currently unavailable. Please try again later.');
      return;
    }

    try {
      const authModule = await loadFirebaseAuth();
      if (!authModule) {
        throw new Error('Authentication module could not be loaded');
      }
      await authModule.sendPasswordResetEmail(auth, email);
      alert('Password reset email sent! Check your inbox.');
      resetPasswordForm.style.display = 'none';
      hideOverlay();
      document.getElementById('reset-password-form-element').reset();
    } catch (error) {
      alert('Error: ' + error.message);
    }
  });

  if (auth) {
    loadFirebaseAuth().then((authModule) => {
      if (!authModule) return;
      
      authModule.onAuthStateChanged(auth, (user) => {
        const statusEl = document.getElementById('user-status');
        const verificationBanner = document.getElementById('verification-banner');
        
        if (user) {
          if (statusEl) statusEl.innerHTML = `Welcome, ${user.email}`;
          btnShowLogin.style.display = 'none';
          btnShowSignup.textContent = 'Logout';
          btnShowSignup.onclick = async () => {
            await authModule.signOut(auth);
            location.reload();
          };

          if (verificationBanner) {
            if (!user.emailVerified) {
              verificationBanner.style.display = 'block';
            } else {
              verificationBanner.style.display = 'none';
            }
          }
        } else {
          if (statusEl) statusEl.innerHTML = 'Not logged in';
          btnShowLogin.style.display = 'inline-block';
          btnShowSignup.textContent = 'Sign Up';
          btnShowSignup.onclick = () => {
            signupForm.style.display = 'block';
            loginForm.style.display = 'none';
            showOverlay();
          };

          if (verificationBanner) {
            verificationBanner.style.display = 'none';
          }
        }
      });
    });
  }

  const resendVerificationBtn = document.getElementById('resend-verification');
  if (resendVerificationBtn) {
    resendVerificationBtn.onclick = async () => {
      if (!auth || !auth.currentUser) return;
      
      const user = auth.currentUser;
      if (user && !user.emailVerified) {
        try {
          const authModule = await loadFirebaseAuth();
          if (!authModule) {
            throw new Error('Authentication module could not be loaded');
          }
          await authModule.sendEmailVerification(user);
          alert('Verification email sent! Please check your inbox.');
        } catch (error) {
          alert('Error: ' + error.message);
        }
      }
    };
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAuth);
} else {
  initAuth();
}
