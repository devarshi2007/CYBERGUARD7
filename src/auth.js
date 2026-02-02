import { auth } from './lib/firebase.js';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail 
} from 'firebase/auth';

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
    console.error('Auth elements not found');
    return;
  }

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

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Account created! You can now log in.');
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

    try {
      await signInWithEmailAndPassword(auth, email, password);
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

    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent! Check your inbox.');
      resetPasswordForm.style.display = 'none';
      hideOverlay();
      document.getElementById('reset-password-form-element').reset();
    } catch (error) {
      alert('Error: ' + error.message);
    }
  });

  onAuthStateChanged(auth, (user) => {
    const statusEl = document.getElementById('user-status');
    
    if (user) {
      statusEl.innerHTML = `Welcome, ${user.email}`;
      btnShowLogin.style.display = 'none';
      btnShowSignup.textContent = 'Logout';
      btnShowSignup.onclick = async () => {
        await signOut(auth);
        location.reload();
      };
    } else {
      statusEl.innerHTML = 'Not logged in';
      btnShowLogin.style.display = 'inline-block';
      btnShowSignup.textContent = 'Sign Up';
      btnShowSignup.onclick = () => {
        signupForm.style.display = 'block';
        loginForm.style.display = 'none';
        showOverlay();
      };
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAuth);
} else {
  initAuth();
}
