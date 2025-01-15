import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} name={todo.name} />
      ))}
    </ul>
  )
}

export default TodoList;