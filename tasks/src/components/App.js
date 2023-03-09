import './App.css';
import { useRef, useState, useEffect } from "react";
import Coopernet from "../services/Coopernet";
import Task from "./Task";
import FormAddTask from './FormAddTask';
import FormLogin from './FormLogin';

function App() {
  const inputRef = useRef(null);
  const [tasks, setTasks] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    // Vérification de la connexion
    const testLocalStorageToken = async () => {
      try {
        if (await Coopernet.getStorage()) {
          console.log(
            `Je suis dans le cas où mon local storage me permet de me connecter`
          );
          setIsLogged(true);
          await fetchTask();// Récupération de la liste des tâches
        } else {
          // Je modifie le login et le mot de passe
          // Il faudra faire en sorte d'appeler ici le component de formulaire
          // de login
          setIsLogged(false);
          /*  Coopernet.setUsername("yd");
           Coopernet.setPassword("yd"); 
           await Coopernet.setOAuthToken();*/
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
    setIsLogged(false);
  }
const handleClickdelete = (id) => {
  console.log(`Dans handleClickdelete, `, id);
  if(window.confirm("Etes-vous sûr.e de vouloir supprimer cette tâche ?")) {
    setTasks(tasks.filter((task) => task.id !== id));
    Coopernet.deleteTask(id);
  }
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
    Coopernet.addTask(new_task, 1);
  }
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const login = e.target.login.value;
    const pwd = e.target.pwd.value;
    console.log(`dans handleSubmitLogin`, login, pwd);
    Coopernet.setUsername(login);
    Coopernet.setPassword(pwd);
    await Coopernet.setOAuthToken();
    console.log(`oauth`, Coopernet.oauth);
    if (Coopernet.getIdenfication()) setIsLogged(true);
    else {
      e.target.login.value = "";
      e.target.pwd.value = ""
    }

    // Si j'execute cette instruction, c'est que la promesse a été tenue
    // Il faut maintenant que j'affiche les résultats et que je cache le formulaire de login

  }

  return (
    <div className="App container">

      {isLogged ? (
        <>
          <div className='d-flex justify-content-between align-items-center'>
            <h1>Liste des tâches</h1>
            <button className='btn btn-warning '
              onClick={handleClickDisconnect}>Se déconnecter
            </button>
          </div>
          <FormAddTask inputRef={inputRef} onSubmitAddTask={handleSubmitAddTask} />
          {tasks.sort((previous, next) => {
            previous.isValidate = typeof (+previous.isValidate) == 'number' ? +previous.isValidate : 0;
            next.isValidate = typeof (+next.isValidate) == 'number' ? +next.isValidate : 0;
            return +previous.isValidate - +next.isValidate
          }).map((task) => <Task
            key={task.id} task={task}
            label={task.label}
            onClickValidate={handleClickValidate} 
            onClickdelete={handleClickdelete} 
            />)}
        </>
      ) : (<FormLogin onSubmitLogin={handleSubmitLogin} />)}
    </div>
  );
}

export default App;
