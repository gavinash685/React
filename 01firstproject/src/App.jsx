import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);  
  const increaseValue = ()=>{
    counter++;
    if(counter > 20 ) {
      counter = 20
    }
    setCounter(counter);
  };
  const decreseValue = () =>{
    counter--;
    if(counter < 0 ){
      counter = 0
    }
    setCounter(counter);
  }
  return (
    <>
      <h1>Counter value is { counter }</h1>
      <button onClick={increaseValue}>Add value</button><br />
      <button onClick={decreseValue}>Decrease value</button>
    </>
  )
}

export default App
