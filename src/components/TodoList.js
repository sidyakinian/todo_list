import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} id={todo.id} name={todo.name} removeTodo={removeTodo} />
      ))}
    </ul>
  )
}

export default TodoList;