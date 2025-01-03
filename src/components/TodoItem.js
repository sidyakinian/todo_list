import React from 'react';

const TodoItem = ({ id, task, onRemove }) => {
  return (
    <li>
      {task}
      <button onClick={() => onRemove(id)} style={{ marginLeft: '10px' }}>
        🗑️
      </button>
    </li>
  );
};

export default TodoItem; 