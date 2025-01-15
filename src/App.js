import React from 'react';
import TodoList from './components/TodoList';

const App = () => {
  
  let todos = [
    "Learn React",
    "Get a job",
    "Enjoy life"
  ]

  return (
    <div>
      <h2 style={{ color: 'white' }}>Todo list</h2>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
