"use client";
import React, { useState } from "react";
import styles from "./todolist.module.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, { title: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index] = {
      ...newTasks[index],
      completed: !newTasks[index].completed,
    };
    setTasks(newTasks);
  };

  return (
    <div className={styles.container}>
      <h1>Todo List</h1>
      <input
        className={styles.input}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a task"
      />
      <button className={styles.addtaskbtn} onClick={addTask}>
        Add Task
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={styles.task}>
            <span className={task.completed ? styles.completed : ""}>
              {task.title}
            </span>
            <button onClick={() => toggleTaskCompletion(index)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
