import React from 'react';
import TodoItem from './components/TodoItem';

const App = () => {
  
  let todos = [
    "Learn React",
    "Get a job",
    "Enjoy life"
  ]

  return (
    <div>
      <h2 style={{ color: 'white' }}>Todo list</h2>
      <ul>
        <TodoItem todo={todos[0]} />
        <TodoItem todo={todos[1]} />
        <TodoItem todo={todos[2]} />
      </ul>
    </div>
  );
}

export default App;
