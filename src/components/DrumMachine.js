import { useState, useEffect } from "react";
import Display from "./Display";
import DrumPad from "./DrumPad";
import drumPadData from "../constants/drumPadData";

const DrumMachine = () => {
  const [display, setDisplay] = useState("");

  const playSound = (id) => {
    const audio = document.getElementById(id);
    audio.play();
  };

  useEffect(() => {
    const handlekeydownEvent = (event) => {
      const { keyCode } = event;
      drumPadData.forEach(function (item) {
        if (item.keyCode === keyCode) {
          playSound(item.keyTrigger);
        }
      });
    };

    document.addEventListener("keyup", handlekeydownEvent);
    return () => {
      document.removeEventListener("keyup", handlekeydownEvent);
    };
  }, []);

  return (
    <div id="drum-machine" className="drum-machine">
      <Display description={display} />
      <DrumPad data={drumPadData} sound={playSound} display={setDisplay} />
    </div>
  );
};

export default DrumMachine;
