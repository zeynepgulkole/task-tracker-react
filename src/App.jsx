// son sayfa
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <div className="main-container">
        <h1>Görev Takip Uygulaması</h1>
        <TaskForm />
        <FilterBar />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
