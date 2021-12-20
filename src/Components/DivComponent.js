import { useState, useEffect } from "react";
import "./DivComponent.css";
import { IconContext } from "react-icons";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";

export default function DivComponent({
  children,
  order,
  indexDiv,
  onChangeDivOrderLeft,
  onChangeDivOrderRight,
  photo,
}) {
  const [photoDiv, setPhotoDiv] = useState();
  // const [photoDiv, setPhotoDiv] = useState(() => {
  //   photo
  // })

  useEffect(() => {
    console.log("photo in useEffect DivComponent", photo);
    setPhotoDiv(photo);
  }, [photo]);

  const handleLeft = (indexDiv) => {
    onChangeDivOrderLeft(indexDiv);
  };
  const handleRight = (indexDiv) => {
    onChangeDivOrderRight(indexDiv);
  };

  return (
    <div className="element" style={{ order: order }}>
      {/* <img src={photo ? photo[0].urls.thumb: console.log('noooon')}/> */}
      <img
        src={
          photoDiv
            ? photoDiv[indexDiv].urls.thumb
            : console.log("noooon")
        }
        alt="img"
      />
      <IconContext.Provider value={{ className: "react-icons" }}>
        {children}
        {console.log("photooooo", photo)}
        {order > 1 && (
          <button onClick={() => handleLeft(indexDiv)} className="button_left">
            <BsFillArrowLeftCircleFill
              style={{
                stroke: "rgba(233, 230, 233, 0.4)",
                strokeWidth: "0.3",
                borderRadius: "50%",
              }}
            />
          </button>
        )}
        {order < 8 && (
          <button
            onClick={() => handleRight(indexDiv)}
            className="button_right"
          >
            <BsFillArrowRightCircleFill
              style={{
                stroke: "rgba(233, 230, 233, 0.4)",
                strokeWidth: "0.3",
                borderRadius: "50%",
              }}
            />
          </button>
        )}
        <button onClick={() => handleLeft(indexDiv)} className="button_up">
          <BsFillArrowUpCircleFill
            style={{
              stroke: "rgba(233, 230, 233, 0.4)",
              strokeWidth: "0.3",
              borderRadius: "50%",
            }}
          />
        </button>
        <button onClick={() => handleLeft(indexDiv)} className="button_down">
          <BsFillArrowDownCircleFill
            style={{
              stroke: "rgba(233, 230, 233, 0.4)",
              strokeWidth: "0.3",
              borderRadius: "50%",
            }}
          />
        </button>
      </IconContext.Provider>
    </div>
  );
}
