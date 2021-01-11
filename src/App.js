import REACT from "react";
import "./App.css";

//Importing Components

import Form from "./components/Form";
import TodoList from "./components/todolist";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Ayush's TODO list</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
