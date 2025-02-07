import { useState } from 'react'
import ColorBox from './components/ColorBox';
import ColorOptions from './components/ColorOptions';
import GameStatus from './components/GameStatus';
import Score from './components/Score';
import './styles.css';

const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
const App = () => {
  const [targetColor, setTargetColor] = useState(getRandomColor());
  const [status, setStatus] = useState("Guess the correct color!");
  const [score, setScore] = useState(0);

  const handleGuess = (selectedColor) => {
    if (selectedColor === targetColor) {
      setStatus("Correct! Play again!");
      setScore(score + 1);
      setTargetColor(getRandomColor());
    } else {
      setStatus("Try again!");
    }
};

const resetGame = () => {
  setTargetColor(getRandomColor());
  setStatus("Guess the correct color!");
};

return (
  <div className='game'>
    <h1>Color Guessing Game</h1>
    <GameStatus status={status} />
    <ColorBox color={targetColor} />
    <ColorOptions options={colors} handleGuess={handleGuess} />
    <Score score={score} />
    <button data-testid="newGameButton" onClick={resetGame}>
      New Game
    </button>
  </div>
);
};


export default App; 
