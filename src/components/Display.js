import PropTypes from "prop-types";
const Display = ({ description }) => {
  return (
    <div className="column display-container">
      <div id="display" className="display">
        {description}
      </div>
    </div>
  );
};

Display.propTypes = {
  description: PropTypes.string,
};

export default Display;
