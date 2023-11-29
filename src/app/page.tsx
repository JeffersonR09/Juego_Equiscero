"use client"
import { useState } from 'react';

const EquisCero = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');
  const [ganador, setGanador] = useState(null);

  const calculateWinner = (squares: any) => {
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

  const handleClick = (index: any) => {
    if (board[index] || ganador) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);

    const currentWinner = calculateWinner(newBoard);
    if (currentWinner) {
      setGanador(currentWinner);
    } else {
      setPlayer(player === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayer('X');
    setGanador(null);
  };

  const renderSquare = (index: any) => {
    return (
      <div
        className="bg-gray-200 w-16 h-16 flex text-purple-950 items-center justify-center text-4xl rounded-[14px] cursor-pointer"
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-indigo-900">
      <h1 className="text-4xl font-bold mb-4 ">Equis Cero</h1>
      <div className="grid grid-cols-3 gap-4 ">
        {Array(9)
          .fill(null)
          .map((_, index) => renderSquare(index))}
      </div>
      {ganador && <p className="mt-4 text-xl font-bold">Ganador: {ganador}</p>}
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={resetGame}
      >
        Reiniciar Juego
      </button>
    </div>
  );
};

export default EquisCero;