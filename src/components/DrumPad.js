import PropTypes from "prop-types";
import AudioClip from "./AudioClip";

const DrumPad = ({ data, sound, display }) => {
  return (
    <div className="column drum-pad-container">
      {data.map(({ keyTrigger, id, url }) => (
        <div
          id={id}
          className="drum-pad"
          key={keyTrigger}
          onClick={() => {
            sound(keyTrigger);
            display(id);
          }}
        >
          {keyTrigger}
          <AudioClip src={url} id={keyTrigger} />
        </div>
      ))}
    </div>
  );
};

DrumPad.propTypes = {
  data: PropTypes.array,
  sound: PropTypes.func,
  display: PropTypes.func,
};

export default DrumPad;
