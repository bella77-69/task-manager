import React from 'react';
import { Task } from '../Task';
import TaskItem from './TaskItem';

type TaskListProps = {
  tasks: Task[];
  toggleComplete: (id: number) => void;
  deleteTask: (id: number) => void;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
