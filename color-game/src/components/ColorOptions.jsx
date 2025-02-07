import PropTypes from "prop-types";

const ColorOptions = ({ options, handleGuess }) => {
  return (
    <div className="options">
      {options.map((color, index) => (
        <button
          key={index}
          className="color-option"
          style={{ backgroundColor: color }}
          onClick={() => handleGuess(color)}
        >
          {color}
        </button>

      ))}
    </div>
  );
}

ColorOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleGuess: PropTypes.func.isRequired,
};

export default ColorOptions;