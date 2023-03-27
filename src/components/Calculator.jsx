import React from 'react';

const Calculator = () => (
  <div>
    <div className="calculator">
      <div className="screen">
        0
      </div>
      <div className="calculator-buttons">
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="orange-btn">÷</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="orange-btn">x</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="orange-btn">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="orange-btn">+</button>
        <button type="button" className="span2">0</button>
        <button type="button">.</button>
        <button type="button" className="orange-btn">=</button>
      </div>
    </div>
  </div>
);
export default Calculator;
