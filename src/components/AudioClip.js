import PropTypes from "prop-types";

const AudioClip = ({ src, id }) => {
  return (
    <audio id={id} className="clip" src={src}>
      Your browser does not support the <code>audio</code> element.
    </audio>
  );
};

AudioClip.propTypes = {
  src: PropTypes.string,
  id: PropTypes.string,
};

export default AudioClip;
