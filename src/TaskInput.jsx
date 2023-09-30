import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

function TaskInput({ onAddTask }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    onAddTask(newTask);
    setNewTask('');
  };

  return (
    <>
      <div className="input-group my-4">
        <input type="text" className="form-control" placeholder="Add your task" aria-label="Recipient's username" aria-describedby="button-addon2" value={newTask}
          onChange={(e) => setNewTask(e.target.value)} />
        <button className="btn btn-primary pb-2" type="button" id="button-addon2" onClick={handleAddTask}><AiOutlinePlusCircle /></button>
      </div>
      {/* <div className="task-input">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div> */}
    </>
  );
}

export default TaskInput;
