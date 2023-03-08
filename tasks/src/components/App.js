import './App.css';
import { useRef, useState, useEffect } from "react";
import Coopernet from "../services/Coopernet";
import Task from "./Task";
import FormAddTask from './FormAddTask';

function App() {
  const inputRef = useRef(null);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    // Vérification de la connexion
    const testLocalStorageToken = async () => {
      try {
        if (await Coopernet.getStorage()) {
          console.log(
            `Je suis dans le cas où mon local storage me permet de me connecter`
          );
          await fetchTask();// Récupération de la liste des tâches
        } else {
          // Je modifie le login et le mot de passe
          // Il faudra faire en sorte d'appeler ici le component de formulaire
          // de login
          Coopernet.setUsername("yd");
          Coopernet.setPassword("yd");
          await Coopernet.setOAuthToken();
          // Si ce code est exécuté, c'est que je suis bien connecté
          console.log(
            `Je suis maintenant bien connecté au serveur de Coopernet`
          );
          // Récupération des tâches :
          await fetchTask();// Récupération de la liste des tâches pour l'utilisateur y y
        }
      } catch (error) {
        // Ici, il faudrait afficher dans l'interface qu'il y a eu une erreur
        // d'identification et donner un email de l'administrateur par exemple
        console.error("Erreur attrapée : " + error);
      }
    };
    testLocalStorageToken();
  }, []); // Si tableau de dépendances vide, on a simule le fonctionnement de componentDidMount

  const fetchTask = async () => {
    // Récupération des tâches :
    const server_tasks = await Coopernet.getTasks();
    console.log(`tasks récupérées sur le serveur : `, server_tasks);

    // Modification du state tasks
    setTasks(server_tasks);
  };
  const handleClickValidate = (id) => {
    console.log(`dans handleClickValidate - id : `, id);
    // Modification du state
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        // Modification de la tâche sur le serveur
        Coopernet.updateTask({ ...task, isValidate: task.isValidate ? "0" : "1" });
        return { ...task, isValidate: task.isValidate ? 0 : 1 };
      }
      return task
    }))

  }
  const handleClickDisconnect = (e) => {
    e.preventDefault();
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
    Coopernet.oauth = {};
  }
  const handleSubmitAddTask = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    console.log(`Dans handleSubmitAddTask`);
    // Création d'une tâche
    const new_task = {
      label: inputRef.current.value,
      isValidate: 0,
      id: Math.random() * 1000,
      uid: 85,
      order: 0,
      description: ""
    }
    // Ajout de la tâche au state tasks
    setTasks([...tasks, new_task]);
    // Reset de la value du formulaire
    inputRef.current.value = null;
  }
  return (
    <div className="App container">
      <h1>Liste des tâches</h1>
      <FormAddTask inputRef={inputRef} onSubmitAddTask={handleSubmitAddTask} />
      {tasks.map((task) => <Task key={task.id} task={task} label={task.label} onClickValidate={handleClickValidate} />)}
      <button
        onClick={handleClickDisconnect}>Se déconnecter</button>
    </div>
  );
}

export default App;
