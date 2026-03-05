import { db, auth } from './lib/firebase.js';
import { doc, setDoc } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';

export async function saveQuizScore(score, quizType = 'risk-assessment') {
  if (!db) {
    console.log('Firebase not initialized, skipping score save');
    return;
  }

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

export async function saveRiskAssessment(data) {
  if (!db) {
    console.log('Firebase not initialized, skipping assessment save');
    return;
  }

  const user = auth.currentUser;
  if (!user) {
    console.log('No user logged in, skipping assessment save');
    return;
  }

  try {
    await setDoc(doc(db, "users", user.uid, "riskAssessments", "2025"), {
      score: data.score,
      riskLevel: data.riskLevel,
      answers: data.answers,
      weaknesses: data.weaknesses,
      recommendations: data.recommendations,
      completedAt: new Date(),
      email: user.email
    });

    await setDoc(doc(db, "quiz_scores", user.uid), {
      lastScore: data.score,
      quizType: 'risk-assessment-2025',
      lastPlayed: new Date(),
      email: user.email
    }, { merge: true });

    console.log('Risk assessment saved to Firestore successfully!');
  } catch (error) {
    console.error('Error saving risk assessment:', error);
  }
}

window.saveQuizScore = saveQuizScore;
window.saveRiskAssessment = saveRiskAssessment;
