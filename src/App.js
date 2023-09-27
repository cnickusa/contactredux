import React from "react";
import { Route, Routes } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import EditTodo from "./components/EditTodo";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoList />}/>
        <Route path="/add" element={<AddTodo />}/>
        <Route path="/edit/:id" element={<EditTodo />}/>
      </Routes>
    </>
  );
}

export default App;
