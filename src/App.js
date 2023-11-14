import './App.css';
import Header from "./Mycomponents/Header";
import { Todos } from "./Mycomponents/Todos";
import { Footer } from "./Mycomponents/Footer";
import { AddTodo } from "./Mycomponents/AddTodo";
import { About } from "./Mycomponents/About";
// import { EditTodo } from "./Mycomponents/EditTodo";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);


    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, date) => {
    // const date = new Date();
    // const formattedDate = new Date().toLocaleDateString();
    console.log("I am adding this todo", title, date)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      date: date,

    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }




  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <div style={{ background: '#d9d2e9', minHeight: '100vh', padding: '20px' }}>
    <Router>
      <Header title="My Todos List" searchBar={false} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;