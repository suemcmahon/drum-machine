import PropTypes from "prop-types";
import AudioClip from "./AudioClip";

const DrumPad = ({ data, sound, display }) => {
  return (
    <>
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
    </>
  );
};

DrumPad.propTypes = {
  data: PropTypes.array,
  sound: PropTypes.func,
  display: PropTypes.func,
};

export default DrumPad;
