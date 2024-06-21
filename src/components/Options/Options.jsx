import css from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => { 

  const handleOptionClick = (feedbackType) => {
    updateFeedback(feedbackType);
  };

  return (
    <div className={css.Options}>
      <button onClick={() => handleOptionClick('good')}>Good</button>
      <button onClick={() => handleOptionClick('neutral')}>Neutral</button>
      <button onClick={() => handleOptionClick('bad')}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback}>Reset</button>
      )}
    </div>
  );
};

export default Options;