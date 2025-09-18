import axios from "axios";

// Adjust the URL to match your backend
const API = axios.create({
  baseURL: "http://localhost:5000/api/"
});

// Tasks endpoints
export const getTasks = () => API.get("/tasks");
export const createTask = (task) => API.post("/tasks", task);
export const updateTask = (id, task) => API.put(`/tasks/${id}`, task);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);