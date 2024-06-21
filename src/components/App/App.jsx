
import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Feedback from '..//Feefback/Feedback'; 
import Options from '..//Options/Options'; 
import Notification from '..//Notification/Notification'; 
import css from "./App.module.css";


const LOCAL_STORAGE_KEY = 'feedback'; 

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const storedFeedback = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedFeedback) {
      return JSON.parse(storedFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

const updateFeedback = (feedbackType) => {
    setFeedback((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
    };
  
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(feedback));
  }, [feedback]);

   return (
    <div className={css.App}>
      <Description />
      <Options 
        updateFeedback={updateFeedback} 
        resetFeedback={resetFeedback} 
        totalFeedback={totalFeedback} 
      />
      {totalFeedback === 0 && <Notification />}
      <Feedback
        feedback={feedback}
        totalFeedback={totalFeedback}
        positiveFeedbackPercentage={positiveFeedbackPercentage}
      />
    </div>
  );
};
 
export default App;




















