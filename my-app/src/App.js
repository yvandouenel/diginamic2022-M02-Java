import logo from './logo.svg';
import './App.css';
import AppLink from './components/AppLink';
import { useState, useEffect } from 'react';

function Counter({ count, increment }) {
  return (
    <div>
      <p>Vous avez cliqué {count} times</p>
      <button
        style={{ margin: "20px" }}
        onClick={() => { increment(count => count + 1) }}
      >Clic</button>
    </div>
  )
}
const Result = ({ result }) => <h1>{result}</h1>;

function App() {
  const [linkColor, setLinkColor] = useState("pink");
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    setResult(count1 + count2)
  }, [count1, count2])

  useEffect(() => {
    document.title = `Liens en ${linkColor}`
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AppLink color={linkColor} />
        <button
          style={{ margin: "20px" }}
          onClick={() => { setLinkColor("blue") }}
        >blue</button>
        <button
          style={{ margin: "20px" }}
          onClick={() => { setLinkColor("orange") }}
        >orange</button>
      </header>
      <main>
        <Result result={result} />
        <Counter count={count1} increment={setCount1} />
        <Counter count={count2} increment={setCount2} />
      </main>
    </div>
  );
}

export default App;
