import React, { useState } from 'react';

function Calculator() {
  const [currentInput, setCurrentInput] = useState('');
  const [operator, setOperator] = useState(null);
  const [previousInput, setPreviousInput] = useState('');

  const handleDigit = (digit) => {
    setCurrentInput(currentInput => currentInput + digit);
  };

  const handleOperation = (op) => {
    setOperator(op);
    setPreviousInput(currentInput);
    setCurrentInput('');
  };

  const calculate = () => {
    if (!operator || !previousInput || !currentInput) return;
    const numPrev = parseFloat(previousInput);
    const numCurrent = parseFloat(currentInput);
    let result = 0;
    switch (operator) {
      case '+':
        result = numPrev + numCurrent;
        break;
      case '-':
        result = numPrev - numCurrent;
        break;
      case '*':
        result = numPrev * numCurrent;
        break;
      case '/':
        result = numPrev / numCurrent;
        break;
      default:
        return;
    }
    setCurrentInput(result.toString());
    setOperator(null);
    setPreviousInput('');
  };

  const clearAll = () => {
    setCurrentInput('');
    setPreviousInput('');
    setOperator(null);
  };

  return (
    <div className="calculator">
      <div className="display">{currentInput || '0'}</div>
      <button onClick={() => handleDigit('1')}>1</button>
      <button onClick={() => handleDigit('2')}>2</button>
      <button onClick={() => handleDigit('3')}>3</button>
      <button onClick={() => handleDigit('4')}>4</button>
      <button onClick={() => handleDigit('5')}>5</button>
      <button onClick={() => handleDigit('6')}>6</button>
      <button onClick={() => handleDigit('7')}>7</button>
      <button onClick={() => handleDigit('8')}>8</button>
      <button onClick={() => handleDigit('9')}>9</button>
      <button onClick={() => handleDigit('0')}>0</button>
      <button onClick={() => handleOperation('+')}>+</button>
      <button onClick={() => handleOperation('-')}>-</button>
      <button onClick={() => handleOperation('*')}>*</button>
      <button onClick={() => handleOperation('/')}>/</button>
      <button onClick={calculate}>=</button>
      <button onClick={clearAll}>C</button>
      <style>{`
        .calculator {
          border: 1px solid #ccc;
          display: inline-block;
          padding: 20px;
        }
        .display {
          border: 1px solid #ddd;
          padding: 10px;
          min-height: 20px;
          margin-bottom: 10px;
          text-align: right;
        }
        button {
          padding: 5px;
          width: 20%;
          margin: 2px;
        }
      `}</style>
    </div>
  );
}

export default Calculator;
