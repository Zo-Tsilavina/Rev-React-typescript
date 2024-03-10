import { TaskManager } from "./components/TaskManager";
import { UseTaskManager } from "./components/UseTaskManager";
import "./App.css";

function App() {
  return (
    <div className="container">
      <TaskManager/>
      <UseTaskManager/>
    </div>
  )
}

export default App;
