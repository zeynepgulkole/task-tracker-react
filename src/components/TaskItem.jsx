import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { updateTaskStatus } = useContext(TaskContext);

  const handleStatusChange = (e) => {
    updateTaskStatus(task.id, e.target.value);
  };

  // Duruma göre sınıf belirleme
  const getStatusClass = () => {
    switch (task.status) {
      case 'pending':
        return 'pending-task';
      case 'in-progress':
        return 'in-progress-task';
      case 'completed':
        return 'completed-task';
      default:
        return '';
    }
  };

  return (
    <div className={`item-container ${getStatusClass()}`}>
      <h3>{task.title}</h3>
      <p>{task.dueDate}</p>
      <select value={task.status} onChange={handleStatusChange}>
        <option value="pending">Yapılacak</option>
        <option value="in-progress">Devam Ediyor</option>
        <option value="completed">Tamamlandı</option>
      </select>
    </div>
  );
};

export default TaskItem;
