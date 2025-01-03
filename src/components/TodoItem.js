import React from 'react';

const TodoItem = ({ id, task, onDelete }) => {
  return (
    <li className="todo-item">
      <input type="checkbox" />
      <span>{task}</span>
      <button onClick={() => onDelete(id)} className="delete-button">
        🗑️
      </button>
    </li>
  );
};

export default TodoItem; 