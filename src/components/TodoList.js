import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    // Retrieve todos from local storage or initialize with default values
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [
      { id: 'task1', task: 'Task 1: Buy groceries' },
      { id: 'task2', task: 'Task 2: Walk the dog' },
      { id: 'task3', task: 'Task 3: Read a book' },
      { id: 'task4', task: 'Task 4: Write some code' },
      { id: 'task5', task: 'Task 5: Implement components' },
    ];
  });
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    // Save todos to local storage whenever they change
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: `task${todos.length + 1}`, task: newTodo }]);
      setNewTodo('');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-list">
      <h2>To-Do List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter new task"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} id={todo.id} task={todo.task} onRemove={removeTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList; 