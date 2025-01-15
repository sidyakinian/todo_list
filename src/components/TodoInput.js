const TodoInput = () => {
  return (
    <div>
      <input
        type="text"
        value="new task"
        onChange={() => console.log('changed')}
        placeholder="enter new task"
      />
      <button onClick={() => {}}>Add</button>
    </div>
  )
}

export default TodoInput;