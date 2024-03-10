import { nanoid } from "nanoid";
import { useState } from "react";

interface Task {
     id: string;
     title: string;
   }
   
   export const UseTaskManager = () => {
     const [title, setTitle] = useState<string>("");
     const [tasks, setTasks] = useState<Task[]>([]);
     const [searchKeyword, setSearchKeyword] = useState<string>("");
   
     const completeTask = (id: string) : void => {
          setTasks(tasks.filter((task) => task.id !== id));
        };
     const addTask = () => {
       if (title.length < 1) {
         return;
       }
       const newTask: Task = {
         id: nanoid(),
         title,
       };
       setTasks((prevTasks) => [...prevTasks, newTask]);
       setTitle("");
     };
   
     const removeTask = (id: string) => {
       setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
     };
   
     const updateTask = (id: string, updatedTask: Partial<Task>) => {
       setTasks((prevTasks) =>
         prevTasks.map((task) =>
           task.id === id ? { ...task, ...updatedTask } : task
         )
       );
     };
   
     const handleSearch = (ev: React.ChangeEvent<HTMLInputElement>): void => {
          setSearchKeyword(ev.target.value);
        };
      
        const filteredTasks = tasks.filter((task) =>
          task.title.toLowerCase().includes(searchKeyword.toLowerCase()),
        );
      
   
     return (
          <div className="container">
               <h1>Use Task Manager</h1>

               <div>
               <input type="text" onChange={handleSearch} placeholder="search task" />
               </div>

               <div className="task">
                    <input 
                         type="text"
                         value={title}
                         onChange={(ev) =>{
                              setTitle(ev.target.value);
                         }}
                     />

                     <button onClick={addTask}>Add Task</button>
               </div>

               <ul className="container">
                    {filteredTasks.map((task) => (
                         <li key={task.id} className="task">
                              <div className="task">
                                   <input 
                                        type="text"
                                        placeholder="add new task"
                                        value={task.title}
                                        onChange={(e) => updateTask(task.id, {title: e.target.value})}
                                   />
                                   <button onClick={() => completeTask(task.id)}>Done</button>
                                   <button onClick={() => removeTask(task.id)}>Delete</button>
                              </div>
                         </li>
                    ))}
               </ul>
          </div>
     );
   };