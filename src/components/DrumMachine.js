import Display from "./Display";
import DrumPad from "./DrumPad";

const DrumMachine = () => {
  return (
    <div id="drum-machine" className="drum-machine">
      <Display />
      <DrumPad />
    </div>
  );
};

export default DrumMachine;
