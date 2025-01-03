import React from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = [
    { id: 'task1', task: 'Task 1: Buy groceries' },
    { id: 'task2', task: 'Task 2: Walk the dog' },
    { id: 'task3', task: 'Task 3: Read a book' },
    { id: 'task4', task: 'Task 4: Write some code' },
    { id: 'task5', task: 'Task 5: Implement components' },
  ];

  return (
    <div className="todo-list">
      <h2>To-Do List</h2>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} id={todo.id} task={todo.task} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList; 