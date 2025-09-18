import React from "react";
import TaskCard from "./TaskCard";

const Column = ({ title, tasks, moveTask, removeTask }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md p-4 min-h-[500px]">
      <div className="flex flex-col gap-3">
        {tasks.length === 0 ? (
          <p className="text-gray-400 text-sm text-center">No tasks yet</p>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              moveTask={moveTask}
              removeTask={removeTask}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Column;