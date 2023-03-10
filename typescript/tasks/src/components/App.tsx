import React, { FormEvent, useEffect } from 'react';
import './App.scss';
import { TaskInterface } from '../interfaces/TaskInterface';
import { useState } from 'react';
import { getTasks } from './../services/taskService';
import Task from "./Task";
import FormTask from './FormTask';
import { v4 as uuidv4 } from 'uuid';


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
  const handleClickDelete = (index: number) => {
    console.log(`Dans handleClickDelete`, index);
    setTasks(tasks.filter((task, i) => {
      if (i !== index) return task;
    }))
  }
  const handleSubmitAddTask = (e: any) => {
    e.preventDefault();
    console.log(`Dans handleSubmitAddTask`);
    const label = e.target.task.value;
    //const label: string = e.target.task.value;
    console.log(`e.target.task.value : `, label);
    const new_task: TaskInterface = {
      label: label,
      id: uuidv4(),
      isValidate: false,
      order: 0,
      uid: 45
    }
    setTasks(tasks => [...tasks, new_task]);
  }
  return (
    <div className="App container">
      <header>
        <h1>Liste des tâches</h1>
      </header>
      <main>
        <FormTask onSubmitAddTask={handleSubmitAddTask} />
        {tasks.map((task, index) =>
          <Task
            key={task.id}
            {...task}
            index={index}
            onClickValidate={handleClickValidate}
            onClickDelete={handleClickDelete}
          />
        )}
      </main>
    </div>
  );
}

export default App;
