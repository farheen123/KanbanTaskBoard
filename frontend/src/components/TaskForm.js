import React, { useState } from "react";
import { useTasks } from '../context/TaskContext';

const TaskForm = () => {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask({ title, description, status: 0 }); // 0 = ToDo
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-md p-6 w-full max-w-md mx-auto mb-6"
    >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          required
          className="mail_text w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task description"
          className="mail_text w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      <div class="map_btn_main">
      <button
        type="submit"
        className="submit-button w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
      >
        Add Task
      </button>
      </div>
    </form>
  );
};

export default TaskForm;