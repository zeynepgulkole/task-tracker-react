import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isValidDate(dueDate)) {
      setError("Geçersiz bir tarih girdiniz. Lütfen geçerli bir tarih girin.");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      dueDate,
      status: "pending",
    };
    addTask(newTask);
    setTaskTitle("");
    setDueDate("");
    setError("");  // Hata mesajını temizler
  };

  // Tarih formatının geçerli olup olmadığını kontrol eden fonksiyon
  const isValidDate = (dateString) => {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;  // yyyy-mm-dd formatı için
    if (!dateString.match(datePattern)) {
      return false;
    }
    
    const [year, month, day] = dateString.split('-').map(Number);

    // Yılın 4 basamaklı olması ve ay ile günün uygun aralıkta olup olmadığı kontrol edilir
    if (year < 1000 || year > 9999 || month < 1 || month > 12 || day < 1 || day > 31) {
      return false;
    }

    const date = new Date(dateString);
    const today = new Date();

    // Girilen tarih bugünden daha eski olamaz (örneğin geçmiş bir tarih girilemez)
    if (date < today) {
      return false;
    }
    
    return true;
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="task_container">
      <label htmlFor="taskTitle">Görev:</label>
      <input
        id="taskTitle"
        type="text"
        placeholder="Görev başlığı"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        required
      />
      </div>
      
      <div className="duedate_container">
      <label htmlFor="dueDate" className="dueDate">Bitiş Tarihi:</label>
        <input
          id="dueDate"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
        {error && <span className="error-message">{error}</span>} {/* Hata mesajı burada yer alıyor */}
      </div>
      
      <button className="main-btn" type="submit">Görev Ekle</button>
    </form>
  );
};

export default TaskForm;
