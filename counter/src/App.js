import "./App.css";
import Calculate from "./hooks/Calculate";
import { createContext, useContext } from "react";
import Counter from "./components/Counter";

// Création du contexte
export const Context = createContext();

function App() {
  const { counter, onClickAdd, onClickSubtract } = Calculate();
  return (
    // fournisseur du contexte
    <Context.Provider value={[counter, onClickAdd, onClickSubtract]}>
      <div className="App">
        <header className="App-header">
          <Counter />
        </header>
        <main>
          <h1>{counter}</h1>
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;
