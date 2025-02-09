import { useState, useEffect } from "react";
import GameInstructions from "./GameInstructions";
import ColorBox from "./ColorBox";
import ColorOptions from "./ColorOptions";
import ScoreBoard from "./ScoreBoard";
import NewGameButton from "./NewGameButton";

const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

const ColorGame = () => {
  const [targetColor, setTargetColor] = useState("");
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("");

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    setTargetColor(colors[Math.floor(Math.random() * colors.length)]);
    setStatus("");
  };

  const handleGuess = (color) => {
    if (color === targetColor) {
      setScore(score + 1);
      setStatus("Correct! 🎉");
      setTimeout(resetGame, 1000);
    } else {
      setStatus("Wrong! Try again. ❌");
    }
  };

  return (
    <div className="game-container">
      <GameInstructions />
      <ColorBox color={targetColor} />
      <ColorOptions colors={colors} handleGuess={handleGuess} />
      <ScoreBoard score={score} status={status} />
      <NewGameButton resetGame={resetGame} />
    </div>
  );
};

export default ColorGame;


