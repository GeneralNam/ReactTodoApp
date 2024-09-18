import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// Todo 리스트 만들어줘

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() !== '') {
      setTodos([...todos, todo]);
      setTodo('');
    }
  }

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <input
      value={todo}
      onChange={handleChange}
      />  
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
