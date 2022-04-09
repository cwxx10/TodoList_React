import "./App.css";
import React, { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const [qtdTask, setQtdTask] = useState(0);
  const [style, setStyle] = useState(false);

  const addTask = () => {
    setTodoList([...todoList, currentTask]);
    setQtdTask(qtdTask + 1);
    //...todoList = tudo que já havia no array todoList
    //currentTask é para adicionar no array a currenttask
  };

  const cleanTask = () => {
    setTodoList([]);
    setQtdTask(qtdTask === 0);
  };

  return (
    <div className="main">
      <h1>
        <i id="ico1" class="fa-solid fa-circle-check"></i> Todo List
      </h1>
      <p className="p_qtd">Tasks: {qtdTask}</p>
      <div>
        <input
          type="text"
          placeholder="Type your task here"
          onKeyDown={(event) => {
            if (event.keyCode === 13) addTask();
          }}
          //onkeydown = function to enter
          onChange={(event) => {
            setCurrentTask(event.target.value);
          }}
        />
        <button type="button" onClick={addTask}>
          Add Task
        </button>
        <button onClick={cleanTask}>Clear All Tasks</button>
        <hr />

        <div>
          {todoList.map((val, key) => {
            return (
              <ul>
                <li>{val}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
