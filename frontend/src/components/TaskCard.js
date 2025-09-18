import React from "react";

const TaskCard = ({ task, moveTask, removeTask }) => {
  return (
    <div className="task">
     <p>{task.title}</p>
      <div>
        {task.status !== 0 && <button className="submit-buttom-small taskcard-margin" onClick={() => moveTask(task.id, 0)}>To Do</button>}
        &nbsp;&nbsp;{task.status !== 1 && <button className="submit-buttom-small-inprogress taskcard-margin" onClick={() => moveTask(task.id, 1)}>In Progress</button>}
        &nbsp;&nbsp;{task.status !== 2 && <button className="submit-buttom-small taskcard-margin" onClick={() => moveTask(task.id, 2)}>Done</button>}
        &nbsp;&nbsp; <button className="submit-buttom-small" onClick={() => removeTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;