import PropTypes from "prop-types";

const ScoreBoard = ({ score, status }) => {
    return (
      <div className="score-board">
        <p data-testid="gameStatus" className="game-status">{status}</p>
        <p data-testid="score" className="score">Score: {score}</p>
      </div>
    );
  };

ScoreBoard.propTypes = {
    score: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired
}
  
  export default ScoreBoard;
  