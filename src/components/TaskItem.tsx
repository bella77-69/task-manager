import React from 'react';
import { Task } from '../Task';

type TaskItemProps = {
  task: Task;
  toggleComplete: (id: number) => void;
  deleteTask: (id: number) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className='task-item'>
      <h3 style={{ textDecoration: task.isComplete ? 'line-through' : 'none' }}>
        {task.title}
      </h3>
      <p>{task.description}</p>
      <button onClick={() => toggleComplete(task.id)}>
        {task.isComplete ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
