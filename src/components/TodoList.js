import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo }) => {
  return <ul>
    {todos.map(todo => (
      <TodoItem key={todo.id} id={todo.id} task={todo.task} onRemove={removeTodo} />
    ))}
  </ul>
};

export default TodoList; 