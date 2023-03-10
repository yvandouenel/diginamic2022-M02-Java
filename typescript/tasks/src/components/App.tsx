import React, { useEffect } from 'react';
import './App.scss';
import { TaskInterface } from '../interfaces/TaskInterface';
import { useState } from 'react';
import { getTasks } from './../services/taskService';
import Task from "./Task";

function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);
  useEffect(() => {
    (async () => {
      const mockedTasks: TaskInterface[] = await getTasks();
      setTasks(mockedTasks);
    })();
  }, [])
  return (
    <div className="App container">
      <header>
        <h1>Liste des tâches</h1>
      </header>
      <main>
        {tasks.map(task => <Task key={task.id} {...task} />)}
      </main>
    </div>
  );
}

export default App;
