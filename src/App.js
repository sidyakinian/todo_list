import React from 'react';
import TodoItem from './components/TodoItem';

const App = () => {
  return (
    <div>
      <ul>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  );
}

export default App;
