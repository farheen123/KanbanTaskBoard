import React, { createContext, useContext, useState, useEffect } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../api.js";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      console.error("Failed to fetch tasks", err);
    }
  };

  const addTask = async (task) => {
    await createTask(task);
    fetchTasks();
  };

  const editTask = async (id, task) => {
    await updateTask(id, task);
    fetchTasks();
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);