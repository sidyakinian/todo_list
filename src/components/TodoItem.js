import React from 'react';

const TodoItem = ({ id, task, onRemove }) => {
  return (
    <li>
      {task}
      <button 
        onClick={() => onRemove(id)} 
        style={{ 
          marginLeft: '10px', 
          backgroundColor: 'transparent',
          border: 'none',
          padding: 0
        }}
      >
        <img src='../trash.svg' alt="Trash" style={{ width: '16px', height: '16px' }} />
      </button>
    </li>
  );
};

export default TodoItem; 