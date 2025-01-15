import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoList from './components/TodoList';

const App = () => {
  
  let todos = [
    { id: uuidv4(), name: "Learn React" },
    { id: uuidv4(), name: "Get a job" },
    { id: uuidv4(), name: "Enjoy life" },
  ]

  return (
    <div>
      <h2 style={{ color: 'white' }}>Todo list</h2>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
