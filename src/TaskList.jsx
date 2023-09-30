import React, { useEffect } from 'react';
import animation from './deleteButtonAnimation.js';

function TaskList({ tasks, onDeleteTask }) {

  return (
   <div className="container task-div"> 
    <ul className="task-list p-4">
      {tasks.map((task) => (
        <li key={task._id}>
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
