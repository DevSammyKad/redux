import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index';
const StateMan = () => {
  const myState = useSelector((state) => state.changeTheNumber);

  const dispatch = useDispatch();

  return (
    <div className="flex">
      <button onClick={() => dispatch(incNumber(5))}>Increment</button>
      <p>Count: {myState}</p>
      <button onClick={() => dispatch(decNumber(5))}>Decrement</button>
    </div>
  );
};

export default StateMan;
