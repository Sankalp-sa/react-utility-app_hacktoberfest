
import React from 'react';
import "./TaskList.css"

function TaskList({ tasks, onDeleteTask }) {

  return (
   <div className="container task-div"> 
    <ul className="task-list p-4">
      {tasks.map((task) => (
        <li key={task._id} className='mb-3'>
          {task.title}
          <button onClick={() => onDeleteTask(task._id)} className='btn btn-danger ms-5'>
            Delete
          </button>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default TaskList;
