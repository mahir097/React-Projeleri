import { useState } from "react";
import "./styles.css";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodos = () => {
    if (!value) return;
    const newValue = {
      id: crypto.randomUUID(),
      text: value
    };

    setTodos((prevTodos) => [...prevTodos, newValue]);
    setValue("");
  };

  function handleDelete(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleAddTodos();
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>To Do List</h1>
        </div>
        <div className="sub-header">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyPress}
          />

          <button onClick={handleAddTodos}>Add</button>
        </div>
        <div className="todo-container">
          <ul className="todo-list">
            {todos.map((todo, i) => (
              <li key={todo.id}>
                {i + 1}-{todo.text}
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
