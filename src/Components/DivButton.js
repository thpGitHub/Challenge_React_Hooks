import React from "react";
import "./DivComponent.css";
import { IconContext } from "react-icons";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";

export default function DivButton({ handleDirection, direction }) {
  const handleIcons = (direction) => {
    switch (direction) {
      case "right":
        return <BsFillArrowRightCircleFill />;
        break;
      case "left":
        return <BsFillArrowLeftCircleFill />;
        break;
      case "up":
        return <BsFillArrowUpCircleFill />;
        break;
      case "down":
        return <BsFillArrowDownCircleFill />;
        break;
    }
  };

  return (
    <button
      onClick={() => handleDirection(direction)}
      className={`button_${direction}`}
    >
      {handleIcons(direction)}
    </button>
  );
}
