// 3. yazılan sayfa

import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="list-container">
      {tasks.length > 0 ? (
        tasks.map(task => <TaskItem key={task.id} task={task} />)
      ) : (
        <p>Henüz görev yok</p>
      )}
    </div>
  );
};

export default TaskList;
