import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index';
import StateMan from './StateMan';

function App() {
  const myState = useSelector((state) => state.changeTheNumber);

  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>INCREMENT AND DECREMENT</h1>
        <p>Using REACT + VITE and REDUX </p>

        <div className="flex">
          <button onClick={() => dispatch(incNumber())}>Increment</button>
          <p>Count: {myState}</p>
          <button onClick={() => dispatch(decNumber())}>Decrement</button>
        </div>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <StateMan />
    </>
  );
}

export default App;
