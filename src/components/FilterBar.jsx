// 6. sırada yaptıgımız sayfa
import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const FilterBar = () => {
  const { tasks, setFilteredTasks } = useContext(TaskContext);
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    if (value === "all") {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter(task => task.status === value));
    }
  };

  return (
    <select value={filter} onChange={handleFilterChange}>
      <option value="all">Tüm Görevler</option>
      <option value="pending">Yapılacak</option>
      <option value="in-progress">Devam Ediyor</option>
      <option value="completed">Tamamlandı</option>
    </select>
  );
};

export default FilterBar;
