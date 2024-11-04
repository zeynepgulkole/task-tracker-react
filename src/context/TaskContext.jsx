// 1. yazılan sayfa içerisindeki taskları tutacak olan context oluşturuldu.

import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTaskStatus = (taskId, status) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, status } : task));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
};
