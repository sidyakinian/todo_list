import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

function App() {  
  const [todos, setTodos] = useState(() => {
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
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    console.log('first load');
  }, []);

  const addTodo = () => {
    if (newTodo.trim() /* trim whitespace */) {
      setTodos([...todos, { id: `task${todos.length + 1}`, task: newTodo }]);
      setNewTodo('');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-list">
      <h2>Todo list</h2>
      <TodoInput newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
