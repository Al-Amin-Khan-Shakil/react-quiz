export default function StartScreen({ questions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>
        {questions.length}
        {' '}
        questions to test your React mastery
      </h3>
      <button
        type="button"
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'start' })}
      >
        Lets&apos; start
      </button>
    </div>
  );
}
