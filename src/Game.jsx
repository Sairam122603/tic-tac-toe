import { useState } from "react";
import Board from "./components/Board";

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [step, setStep] = useState(0);
  const xIsNext = step % 2 === 0;
  const currentSquares = history[step];

  function handlePlay(nextSquares) {
    const newHistory = [...history.slice(0, step + 1), nextSquares];
    setHistory(newHistory);
    setStep(newHistory.length - 1);
  }

  function jumpTo(move) {
    setStep(move);
  }

  return (
    <div className="game-container">
      <h1 className="game-title">Tic-Tac-Toe</h1>
      <Board squares={currentSquares} onPlay={handlePlay} xIsNext={xIsNext} />
      <div className="mt-4">
        {history.map((_, move) => (
          <button
            key={move}
            onClick={() => jumpTo(move)}
            className="move-button"
          >
            {move === 0 ? "Restart" : `Move #${move}`}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Game;
