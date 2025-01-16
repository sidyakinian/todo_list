import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css'

import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

const App = () => {

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [ 
      { id: uuidv4(), name: "Learn React" },
      { id: uuidv4(), name: "Get a job" },
      { id: uuidv4(), name: "Enjoy life" },
    ]
  });
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    console.log('first load');
  }, []);

  const addTodo = () => {
    setTodos([...todos, { id: uuidv4(), name: newTodo }]);
    setNewTodo("");
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className='todo-list'>
      <h2 style={{ color: 'white' }}>Todo list</h2>
      <TodoInput newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
