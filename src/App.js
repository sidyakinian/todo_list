import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css'

import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

const App = () => {

  let todos = [
    { id: uuidv4(), name: "Learn React" },
    { id: uuidv4(), name: "Get a job" },
    { id: uuidv4(), name: "Enjoy life" },
  ]

  return (
    <div className='todo-list'>
      <h2 style={{ color: 'white' }}>Todo list</h2>
      <TodoInput />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
