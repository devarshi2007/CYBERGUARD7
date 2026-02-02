import { db } from './lib/firebase.js';
import { doc, setDoc } from "firebase/firestore";
import { auth } from './lib/firebase.js';

export async function saveQuizScore(score, quizType = 'risk-assessment') {
  const user = auth.currentUser;
  if (!user) {
    console.log('No user logged in, skipping score save');
    return;
  }

  try {
    await setDoc(doc(db, "quiz_scores", user.uid), {
      lastScore: score,
      quizType: quizType,
      lastPlayed: new Date(),
      email: user.email
    }, { merge: true });
    
    console.log('Quiz score saved successfully!');
  } catch (error) {
    console.error('Error saving quiz score:', error);
  }
}

window.saveQuizScore = saveQuizScore;
