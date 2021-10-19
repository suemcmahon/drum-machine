import PropTypes from "prop-types";
import AudioClip from "./AudioClip";

const DrumPad = ({ data, sound }) => {
  return (
    <>
      {data.map(({ keyTrigger, id, url }) => (
        <div
          id={id}
          className="drum-pad"
          key={keyTrigger}
          onClick={() => {
            sound(keyTrigger);
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
};

export default DrumPad;
