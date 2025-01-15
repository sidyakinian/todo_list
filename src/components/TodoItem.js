const TodoItem = ({ name }) => {
  return (
    <li style={{ color: 'white' }}>
      {name}
      <img 
        src="./trash.svg" 
        alt="Trash" 
        style={{ 
          marginLeft: '10px', 
          width: '16px', 
          height: '16px', 
          cursor: 'pointer' 
        }}
      />
    </li>
  )
}

export default TodoItem;