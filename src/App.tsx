import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/Tasklist";
import { Task } from "./Task";
import "./App.css";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              isComplete: !task.isComplete,
              toggleComplete: () => {},
              update: () => {},
            }
          : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
