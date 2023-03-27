import React, { useState } from 'react';
import Screen from './Screen';

const Calculator = () => {
  const [result, setResult] = useState('');
  const handleClick = (e) => {
    setResult((obj) => calculate(obj, e.target.innerText));
  };

  return (
    <div>
      <div className="calculator">
        <div className="screen">
          <Screen result={result.next || result.total || '0'} />
        </div>
        <div className="calculator-buttons">
          <button onClick={handleClick} type="button">AC</button>
          <button onClick={handleClick} type="button">+/-</button>
          <button onClick={handleClick} type="button">%</button>
          <button onClick={handleClick} type="button" className="orange-btn">÷</button>
          <button onClick={handleClick} type="button">7</button>
          <button onClick={handleClick} type="button">8</button>
          <button onClick={handleClick} type="button">9</button>
          <button onClick={handleClick} type="button" className="orange-btn">x</button>
          <button onClick={handleClick} type="button">4</button>
          <button onClick={handleClick} type="button">5</button>
          <button onClick={handleClick} type="button">6</button>
          <button onClick={handleClick} type="button" className="orange-btn">-</button>
          <button onClick={handleClick} type="button">1</button>
          <button onClick={handleClick} type="button">2</button>
          <button onClick={handleClick} type="button">3</button>
          <button onClick={handleClick} type="button" className="orange-btn">+</button>
          <button onClick={handleClick} type="button" className="span2">0</button>
          <button onClick={handleClick} type="button">.</button>
          <button onClick={handleClick} type="button" className="orange-btn">=</button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
