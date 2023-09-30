<<<<<<< HEAD
import React, { useEffect } from 'react';
import animation from './deleteButtonAnimation.js';
=======
import React from 'react';
import "./TaskList.css"
>>>>>>> 5328122c21536184c3893a4af6623b59bf7add2e

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
