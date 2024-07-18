import React, { useState } from 'react';

function Calculator() {
  const [currentInput, setCurrentInput] = useState('');
  const [operator, setOperator] = useState(null);
  const [previousInput, setPreviousInput] = useState('');
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operations = ['+', '-', '*', '/'];

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
      {digits.map(digit => (
        <button key={digit} onClick={() => handleDigit(digit.toString())}>
          {digit}
        </button>
      ))}
      {operations.map(op => (
        <button key={op} onClick={() => handleOperation(op)}>
          {op}
        </button>
      ))}
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
