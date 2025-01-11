import React from 'react';

const TodoInput = ({ newTodo, setNewTodo, addTodo }) => {
  return (
    <div className="todo-input">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter new task"
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default TodoInput; 