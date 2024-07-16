import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
  const [input, setInput] = useState('');
  console.log(input);

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
    console.log(input, 'Task Added');
  };
  return (
    <div>
      <form action="" onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="Enter something"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" disabled={!input}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
