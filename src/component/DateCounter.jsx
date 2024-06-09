import { useReducer } from 'react';

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'dec':
      return { ...state, count: state.count - state.step };
    case 'inc':
      return { ...state, count: state.count + state.step };
    case 'setCount':
      return { ...state, count: action.payload };
    case 'setStep':
      return { ...state, step: action.payload };
    case 'reset':
      return initialState;
    default:
      throw new Error('Unknown action');
  }
}

export default function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  const date = new Date();
  date.setDate(date.getDate() + count);

  const inc = () => {
    dispatch({ type: 'inc' });
  };

  const dec = () => {
    dispatch({ type: 'dec' });
  };

  const defineCount = (e) => {
    dispatch({ type: 'setCount', payload: Number(e.target.value) });
  };

  const defineStep = (e) => {
    dispatch({ type: 'setStep', payload: Number(e.target.value) });
  };

  const reset = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button type="button" onClick={dec}>
          -
        </button>
        <input value={count} onChange={defineCount} />
        <button type="button" onClick={inc}>
          +
        </button>
      </div>

      <p>{date.toDateString()}</p>

      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}