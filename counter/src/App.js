import './App.css';
import Calculate from './hooks/Calculate';

const Counter = () => {
  const {counter, onClickAdd, onClickSubtract} = Calculate();
  return (
    <div>
      {counter}
      <div>
        <button onClick={onClickAdd}>+</button>
        <button onClick={onClickSubtract}>-</button>
      </div>
    </div>
  )
}


function App() {

  return (
    <div className="App">
      <header className="App-header">
      <Counter />
      </header>
    </div>
  );
}

export default App;
