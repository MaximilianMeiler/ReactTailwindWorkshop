import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"

function App() {
  const [counter, setCounter] = useState(0);
  const [passive, setPassive] = useState(0);
  const [magnitudes, setMagnitudes] = useState([10])

  useEffect(() => {
    setInterval(() => {
      setCounter(c => c + passive)
    }, 1000)
    setPassive(0)
  }, [passive])

  useEffect(() => {
    if (counter > magnitudes[magnitudes.length-1] * 100) {
      setMagnitudes(magnitudes.concat([magnitudes[magnitudes.length-1] * 10]));
    }
  }, [counter, magnitudes])

  function purchaseUpgrade(val) {
    if (counter >= val*10) {
      setCounter(counter - val*10);
      setPassive(val);
    }
  }

  return (
    <div className="App">
      <div>{counter}</div>
      <div style={{display:"flex", flexDirection:"column", width:"10%", alignSelf:"center", paddingLeft:"45%"}}>
        <button onClick={() => {setCounter(counter+10)}}>Click me</button>
        {magnitudes.map((m) => {
          return <button onClick={() => purchaseUpgrade(m)}>{m*10}</button>
        })}
      </div>
    </div>
  );
}

export default App;