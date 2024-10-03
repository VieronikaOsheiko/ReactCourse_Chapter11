import React from "react";
import PageTitle from "./components/PageTitle";
import ToDoContainer from "./components/ToDoContainer";
import './App.css'

function App() {
  return (
    
    <div>
      <PageTitle title="My ToDo App" />
      <ToDoContainer />
    </div>

  );
}

export default App;