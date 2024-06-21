import css from "./Feedback.module.css"

const Feedback = ({ totalFeedback, positiveFeedbackPercentage, feedback }) => {
  if (totalFeedback === 0) return null;

  return (
    <div className={css.Feedback}>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total Feedback: {totalFeedback}</p>
      <p>Positive Feedback: {positiveFeedbackPercentage}%</p>
    </div>
  );
};

export default Feedback;