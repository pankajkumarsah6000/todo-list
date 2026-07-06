import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTodos([...todos, task]);
    setTask("");
  };

  return (
    <div className="page">
      <h1>📝 Todo List</h1>

      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter Task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>✅ {todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;