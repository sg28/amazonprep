import React, { useState } from 'react';
import './tictactoe.css';

const TikTakToe = () => {
  const [board, setBoard] = useState(new Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [boardSize, setBoardSize] = useState(new Array(9).fill(null));


  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };
   
   

  return (
    <div className="game">
      {/* loop and generate board */}
        <div className="board">
            {boardSize.map((value, index) => (
                renderSquare(index)
            ))}
        </div>
      <div className="game-info">
        <div>{winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`}</div>
        <button onClick={restartGame}>Restart Game</button>
      </div>
    </div>
  );
};

export default TikTakToe;
