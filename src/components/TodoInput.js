const TodoInput = ({ newTodo, setNewTodo, addTodo }) => {
  return (
    <div className='todo-input'>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="enter new task"
      />
      <button onClick={addTodo}>Add</button>
    </div>
  )
}

export default TodoInput;