import { useReducer } from 'react';

type CounterState = {
  count: number;
};

const initialState = {
  count: 0
};

type UpdateAction = {
  type: 'increment' | 'decrement';
  payload: number;
};

type ResetAction = {
  type: 'reset';
};

type CounterAction = UpdateAction | ResetAction; // descriminated unions. recommended approach for typing the useReducer

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    case 'reset':
      return initialState;

    default:
      return state;
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: 20 }}>Count: {state.count}</div>
      <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>Decrement 10</button>
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>Increment 10</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};
