import PropTypes from "prop-types";

const NewGameButton = ({ resetGame }) => {
    return (
      <button
        data-testid="newGameButton"
        onClick={resetGame}
        className="new-game-button"
      >
        New Game
      </button>
    );
  };

  NewGameButton.propTypes = {
    resetGame: PropTypes.func.isRequired,
  };
  
  
  export default NewGameButton;
  