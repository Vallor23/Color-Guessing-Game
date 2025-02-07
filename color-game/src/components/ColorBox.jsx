import PropTypes from "prop-types";

const ColorBox = ({ color }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width: '150px',
        height: '150px',
        borderRadius: '10px',
      }}
    ></div>
  );
}

ColorBox.propTypes = {
    color: PropTypes.string.isRequired,
};

export default ColorBox;