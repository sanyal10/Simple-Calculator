import { useState } from 'react';
import "./App.css";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*', '-', '+', '.'];

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(<button onClick={() => updateCalc(i.toString())} key={i} class="btn btn-outline-secondary" >{i} </button>);   
    }

    return digits;
  }

  const updateCalc = (value) => {
    if (
      ops.includes(value) && calc === '' || 
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      
      return;
    }
    
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const deleteLast = () => {
    if (calc == '') {
      return;
    }
    const value = calc.slice(0, -1);

    
    setCalc(value);
    setResult(value);
        
  }

  return (
    <>
    <h1> Basic Calculator</h1>
    <h2><a href="https://github.com/sanyal10" target="_blank">@sanyal_10</a></h2>
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>{result ? '(' + result + ')' : ''}</span> {calc || 0}
        </div>

        <div className="operators btn btn-secondary">
          <button onClick={() => updateCalc('/')}class="btn btn-light">/</button>
          <button onClick={() => updateCalc('*')}class="btn btn-light">x</button>
          <button onClick={() => updateCalc('-')}class="btn btn-light">-</button>
          <button onClick={() => updateCalc('+')}class="btn btn-light">+</button>

          <button onClick={deleteLast}>DEL</button>
        </div>

        <div className="digits btn btn-secondary">
          {createDigits()}
          <button onClick={() => updateCalc('0')}class="btn btn-outline-secondary">0</button>
          <button onClick={() => updateCalc('.')}class="btn btn-outline-secondary">.</button>
          <button onClick={calculate}class="btn btn-outline-secondary">=</button>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default App;
