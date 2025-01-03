import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="todo-list">
        <h2>To-Do List</h2>
        <ul>
          <li>
            <input type="checkbox" id="task1" />
            <label htmlFor="task1">Task 1: Buy groceries</label>
            <span className="trash-icon" role="button" aria-label="Delete Task 1">🗑️</span>
          </li>
          <li>
            <input type="checkbox" id="task2" />
            <label htmlFor="task2">Task 2: Walk the dog</label>
            <span className="trash-icon" role="button" aria-label="Delete Task 2">🗑️</span>
          </li>
          <li>
            <input type="checkbox" id="task3" />
            <label htmlFor="task3">Task 3: Read a book</label>
            <span className="trash-icon" role="button" aria-label="Delete Task 3">🗑️</span>
          </li>
          <li>
            <input type="checkbox" id="task4" />
            <label htmlFor="task4">Task 4: Write some code</label>
            <span className="trash-icon" role="button" aria-label="Delete Task 4">🗑️</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
