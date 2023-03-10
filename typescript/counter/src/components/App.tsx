
import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App() {
  const [num, setNum] = useState<number>(0);
  return (
    <div className="App">
      <h1>Counter</h1>
      <button
        onClick={(e:React.MouseEvent<HTMLButtonElement>) => {
          setNum(num => num += 1);
        }}>Ajouter 1</button>
      <button
      onClick={(e:React.MouseEvent<HTMLButtonElement>) => {
          setNum(num => num -= 1);
        }}>Soustraire 1</button>
      <Counter num={num} />
    </div>
  );
}

export default App;
