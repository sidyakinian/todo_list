import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css'

import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

const App = () => {

  const [todos, setTodos] = useState([
    { id: uuidv4(), name: "Learn React" },
    { id: uuidv4(), name: "Get a job" },
    { id: uuidv4(), name: "Enjoy life" },
  ]);
  const [newTodo, setNewTodo] = useState("");

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
