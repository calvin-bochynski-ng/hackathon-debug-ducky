import { useState } from "react";
import frontDuck from "../../assets/images/rubber-duck-forward.svg";
import sideDuck from "../../assets/images/rubber-duck-side-closed.svg";
import sideDuckOpen from "../../assets/images/rubber-duck-side-open.svg";
import "./duck.scss";

const Duck = ({ isDuckForward, setIsDuckForward, setMethodInfo }) => {
  // const [isDuckForward, setIsDuckForward] = useState(true);
  const [isDuckOpen, setIsDuckOpen] = useState(false);
  const handleChangeDuck = () => {
    setIsDuckForward(true);
    setMethodInfo(null);
  };

  const talkingDuck = () => {
    if (!isDuckForward) {
      setInterval(() => {
        setIsDuckOpen(!isDuckOpen);
      }, 400);
    }
  };

  talkingDuck();

  return (
    <>
      <img
        src={isDuckForward ? frontDuck : isDuckOpen ? sideDuckOpen : sideDuck}
        alt="rubber duck"
        className="duck"
        onClick={handleChangeDuck}
      />
    </>
  );
};

export default Duck;
