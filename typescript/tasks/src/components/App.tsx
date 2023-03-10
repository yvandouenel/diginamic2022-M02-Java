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
  const handleClickValidate = (index: number) => {
    console.log(`Dans handleClicValidate`, index);
    setTasks(tasks.map((task, i) => {
      if (i === index) return { ...task, isValidate: !task.isValidate }
      return task;
    }))


  }
  return (
    <div className="App container">
      <header>
        <h1>Liste des tâches</h1>
      </header>
      <main>
        {tasks.map((task, index) =>
          <Task
            key={task.id}
            {...task}
            index={index}
            onClickValidate={handleClickValidate} />)}
      </main>
    </div>
  );
}

export default App;
