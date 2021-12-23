import React from "react";
import "./DivComponent.css";
import { IconContext } from "react-icons";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";

export default function DivButton({
  handleRight,
  handleDown,
  indexDiv,
  order,
  handleDirection,
  direction,
}) {
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
  //   const cssDirection = direction;
  //   const handleClassName = `button_${cssDirection}`;

  // const handleIcone2 = (direction) => {
  //     if (direction === "up") {
  //        return <BsFillArrowUpCircleFill />

  //     }
  // }

  return (
    <>
      {/* <button onClick={() => handleRight(indexDiv)} className="button_right">
        <BsFillArrowRightCircleFill />
      </button>
      <button
        onClick={() => handleDown(indexDiv, order)}
        className="button_down"
      >
        <BsFillArrowDownCircleFill />
      </button> */}

      {/* <button onClick={() => handleDirection(direction)} className={handleClassName}> */}
      <button
        onClick={() => handleDirection(direction)}
        className={`button_${direction}`}
      >
        {handleIcons(direction)}
      </button>
    </>
  );
}
//              <button onClick={() => handleRight(indexDiv)} className="button_right">
//                  <BsFillArrowRightCircleFill />
//             </button>
//             <button onClick={() => handleDown(indexDiv, order)} className="button_down">
//              <BsFillArrowDownCircleFill />
//             </button>
