import React, { useState } from "react";
import "./App.css";

const Todo = ({ text, index }) => <div>{index+1}.{text}</div>;

const TodoAdd = ({ addTodos }) => {
  const [text, setText] = useState("");
  const handleSubmit = event => {
    event.preventDefault();
    if (!text) return;
    addTodos(text);
    setText("");
  };
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input
        value={text}
        type="text"
        onChange={({ target: { value } }) => setText(value)}
        placeholder="add todo"
      />
    </form>
  );
};
const App = () => {
  const [todos, setTodos] = useState([{ text: "asdsada" }, { text: "asdsada" }]);

  const addTodos = text => {
    setTodos([...todos, { text }]);
  };
  const deleteTodos = position => {
    setTodos(todos.filter((_, index) => index !== position));
  };
  return (
    <div className="App">
      <header className="App-header">
        {todos.map(({ text }, index) => (
          <div className="Todo-list" key={index}>
            <Todo text={text} index={index}/>
            <button className="button" onClick={() => deleteTodos(index)}>
              X
            </button>
          </div>
        ))}
        <TodoAdd addTodos={addTodos} />
      </header>
    </div>
  );
};

export default App;
