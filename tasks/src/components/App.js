import './App.css';
import { useState, useEffect } from "react";
import Coopernet from "../services/Coopernet"
function App() {
  useEffect(()=>{
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
          Coopernet.setUsername("y");
          Coopernet.setPassword("y");
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
    //setTasks(server_tasks);
  };
  return (
    <div className="App">
      <h1>Liste des tâches</h1>
    </div>
  );
}

export default App;
