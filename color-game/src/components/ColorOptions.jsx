import PropTypes from "prop-types";

const ColorOptions = ({ colors, handleGuess }) => {
  return (
    <div className="color-options">
      {colors.map((color) => (
        <button
            key={color}
            data-testid="colorOption"
            onClick={() => handleGuess(color)}
            className="color-button"
            style={{ backgroundColor: color }}
        >
            {color}
        </button>
      ))}
    </div>
  );
}

ColorOptions.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleGuess: PropTypes.func.isRequired,
};

export default ColorOptions;