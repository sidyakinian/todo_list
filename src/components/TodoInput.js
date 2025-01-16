const TodoInput = ({ newTodo, setNewTodo }) => {
  return (
    <div className='todo-input'>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="enter new task"
      />
      <button onClick={() => {}}>Add</button>
    </div>
  )
}

export default TodoInput;