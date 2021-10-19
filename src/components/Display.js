import PropTypes from "prop-types";
const Display = ({ description }) => {
  return (
    <div id="display" className="display">
      {description}
    </div>
  );
};

Display.propTypes = {
  description: PropTypes.string,
};

export default Display;
