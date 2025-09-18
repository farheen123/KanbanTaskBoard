import React from "react";
import Column from "./Column.js";
import { useTasks } from "../context/TaskContext";

// Column labels
const columns = {
  0: "To Do",
  1: "In Progress",
  2: "Done",
};

const KanbanBoard = () => {
  const { tasks, editTask, removeTask } = useTasks();

  const onMove = (taskId, newStatus) => {
    const task = tasks.find((t) => t.id === taskId);
    if (task) editTask(task.id, { ...task, status: newStatus });
  };

  return (
          <div class="blog_section layout_padding">
             <div class="container">
                <div class="row">
                   <div class="col-md-12">
                      <h1>Kanban Task Board</h1>
                   </div>
                </div>
                <div className="blog_section_2">
  <div className="row">
    {Object.keys(columns).map((colId) => (
      <div key={colId} className="col-md-4">

        <div className="btn_main">
          <div className={`date_text ${colId === "1" ? "active" : ""}`}>
            <a href="#">{columns[colId]}</a>
          </div>
        </div>
        <div className="blog_box">
          <Column
            title={columns[colId]}
            tasks={tasks.filter((t) => t.status === parseInt(colId))}
            moveTask={onMove}
            removeTask={removeTask}
          />
        </div>
      </div>
    ))}
  </div>
</div>
                </div>
             </div>
       
  );
};

export default KanbanBoard;