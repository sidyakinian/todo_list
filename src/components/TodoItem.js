import React from 'react';

const TodoItem = ({ id, task }) => {
  return (
    <li>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{task}</label>
      <span className="trash-icon" role="button" aria-label={`Delete ${task}`}>🗑️</span>
    </li>
  );
};

export default TodoItem; 