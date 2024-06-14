export default function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  const getAnswerClass = (index) => {
    if (hasAnswered) {
      return index === question.correctOption ? 'correct' : 'wrong';
    }
    return '';
  };

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          type="button"
          key={option}
          className={`btn btn-option ${
            index === answer ? 'answer' : ''
          } ${getAnswerClass(index)}`}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
