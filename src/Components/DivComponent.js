import { useState, useEffect } from "react";
import "./DivComponent.css";
import { IconContext } from "react-icons";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import DivButton from "./DivButton";

export default function DivComponent({
  children,
  order,
  indexDiv,
  onChangeDivOrderLeft,
  onChangeDivOrderRight,
  onChangeDivOrderUp,
  onChangeDivOrderDown,
  photo,
  browserWidth,
}) {
  const [photoDiv, setPhotoDiv] = useState();

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
  const handleUp = (indexDiv, order) => {
    onChangeDivOrderUp(indexDiv, order);
  };
  const handleDown = (indexDiv, order) => {
    onChangeDivOrderDown(indexDiv, order);
  };

  const handleDirection = (direction) => {
        switch(direction) {
            case "left" :
                onChangeDivOrderLeft(indexDiv);
                break;
            case "right" :
                onChangeDivOrderRight(indexDiv);
                break
            case "up" :
                onChangeDivOrderUp(indexDiv);
                break
            case "down" :
                onChangeDivOrderDown(indexDiv);
                break
        }
  }

  const BrowserWidth = ({ browserWidth, order, width }) => {
    if (browserWidth >= 680) {
      
      return (
        <>
          {order === 1 && (
            <>
            {/* <button onClick={() => handleRight(indexDiv)} className="button_right">
              <BsFillArrowRightCircleFill />
            </button>
            <button onClick={() => handleDown(indexDiv, order)} className="button_down">
            <BsFillArrowDownCircleFill />
          </button> */}
                <DivButton handleDirection={handleDirection} direction='right' indexDiv={indexDiv} order={order}/>
                <DivButton handleDirection={handleDirection} direction='down' indexDiv={indexDiv} order={order}/>
            </>
          )}
          {order > 1 && order < 4 && (
            <>
                {/* <DivButton handleRight={handleRight} handleDown={handleDown} indexDiv={indexDiv} order={order}/> */}

                <DivButton handleDirection={handleDirection} direction='left' indexDiv={indexDiv} order={order}/>
                <DivButton handleDirection={handleDirection} direction='right' indexDiv={indexDiv} order={order}/>
                <DivButton handleDirection={handleDirection} direction='down' indexDiv={indexDiv} order={order}/>
            </>
          )}
          {order > 3 && order < 7 && (
            <>
                {/* <DivButton handleRight={handleRight} handleDown={handleDown} indexDiv={indexDiv} order={order}/> */}

                <DivButton handleDirection={handleDirection} direction='left' indexDiv={indexDiv} order={order}/>
                <DivButton handleDirection={handleDirection} direction='right' indexDiv={indexDiv} order={order}/>
                <DivButton handleDirection={handleDirection} direction='down' indexDiv={indexDiv} order={order}/>
                <DivButton handleDirection={handleDirection} direction='up' indexDiv={indexDiv} order={order}/>
            </>
          )}
          {order > 6 && order < 9 && (
            <>
                {/* <DivButton handleRight={handleRight} handleDown={handleDown} indexDiv={indexDiv} order={order}/> */}

                <DivButton handleDirection={handleDirection} direction='left' indexDiv={indexDiv} order={order}/>
                <DivButton handleDirection={handleDirection} direction='right' indexDiv={indexDiv} order={order}/>
                <DivButton handleDirection={handleDirection} direction='up' indexDiv={indexDiv} order={order}/>
            </>
          )}
          {order === 9 && (
            <>
            {/* <button onClick={() => handleRight(indexDiv)} className="button_right">
              <BsFillArrowRightCircleFill />
            </button>
            <button onClick={() => handleDown(indexDiv, order)} className="button_down">
            <BsFillArrowDownCircleFill />
          </button> */}
                 <DivButton handleDirection={handleDirection} direction='left' indexDiv={indexDiv} order={order}/>
                <DivButton handleDirection={handleDirection} direction='up' indexDiv={indexDiv} order={order}/>
            </>
          )}
          
          {/* {order >= 1 && order < 4 && (
            <>
            <button onClick={() => handleRight(indexDiv)} className="button_right">
              <BsFillArrowRightCircleFill />
            </button>
            <button onClick={() => handleDown(indexDiv, order)} className="button_down">
            <BsFillArrowDownCircleFill />
          </button>
          <button onClick={() => handleLeft(indexDiv)} className="button_left">
              <BsFillArrowLeftCircleFill />
            </button>
            </>
          )}
          {order > 3 && order < 7 && (
            <>
            <button onClick={() => handleRight(indexDiv)} className="button_right">
              <BsFillArrowRightCircleFill />
            </button>
            <button onClick={() => handleDown(indexDiv, order)} className="button_down">
            <BsFillArrowDownCircleFill />
          </button>
          <button onClick={() => handleLeft(indexDiv)} className="button_left">
              <BsFillArrowLeftCircleFill />
            </button>
            <button onClick={() => handleUp(indexDiv, order)} className="button_up">
            <BsFillArrowUpCircleFill />
          </button>
            </>
          )}
          {order > 6 && order < 10 && (
            <>
            <button onClick={() => handleRight(indexDiv)} className="button_right">
              <BsFillArrowRightCircleFill />
            </button>
            
          <button onClick={() => handleLeft(indexDiv)} className="button_left">
              <BsFillArrowLeftCircleFill />
            </button>
            <button onClick={() => handleUp(indexDiv, order)} className="button_up">
            <BsFillArrowUpCircleFill />
          </button>
            </>
          )}
        </>
      );
    } 
    else if (browserWidth >= 460 && browserWidth < 680) {
      
      return (
        <>
          {order === 1 && (
            <>
            <button onClick={() => handleRight(indexDiv)} className="button_right">
              <BsFillArrowRightCircleFill />
            </button>
            <button onClick={() => handleDown(indexDiv, order)} className="button_down">
            <BsFillArrowDownCircleFill />
          </button>
            </>
          )}
          {order === 2 && (
            <>
            <button onClick={() => handleRight(indexDiv)} className="button_right">
              <BsFillArrowRightCircleFill />
            </button>
            <button onClick={() => handleDown(indexDiv, order)} className="button_down">
            <BsFillArrowDownCircleFill />
          </button>
          <button onClick={() => handleLeft(indexDiv)} className="button_left">
              <BsFillArrowLeftCircleFill />
            </button>
            </>
          )}
          {order > 2 && order < 9 && (
            <>
            <button onClick={() => handleRight(indexDiv)} className="button_right">
              <BsFillArrowRightCircleFill />
            </button>
            <button onClick={() => handleDown(indexDiv, order)} className="button_down">
            <BsFillArrowDownCircleFill />
          </button>
          <button onClick={() => handleLeft(indexDiv)} className="button_left">
              <BsFillArrowLeftCircleFill />
            </button>
            <button onClick={() => handleUp(indexDiv, order)} className="button_up">
            <BsFillArrowUpCircleFill />
          </button>
            </>
          )}
          {order === 9 && (
            <>
           
            
          <button onClick={() => handleLeft(indexDiv)} className="button_left">
              <BsFillArrowLeftCircleFill />
            </button>
            <button onClick={() => handleUp(indexDiv, order)} className="button_up">
            <BsFillArrowUpCircleFill />
          </button>
            </>
          )} */}
          {/* {order > 6 && order < 10 && (
            <>
            <button onClick={() => handleRight(indexDiv)} className="button_right">
              <BsFillArrowRightCircleFill />
            </button>
            
          <button onClick={() => handleLeft(indexDiv)} className="button_left">
              <BsFillArrowLeftCircleFill />
            </button>
            <button onClick={() => handleUp(indexDiv, order)} className="button_up">
            <BsFillArrowUpCircleFill />
          </button>
            </>
          )} */}
        </>
      );
    }
    else {return (
      <>
        {order === 1 && (
            <>
            <button onClick={() => handleRight(indexDiv)} className="button_right">
              <BsFillArrowRightCircleFill />
            </button>
            
            </>
          )}

        {order > 1 && order < 9 && (
            <>
            <button onClick={() => handleLeft(indexDiv)} className="button_left">
              <BsFillArrowLeftCircleFill />
            </button>
            <button onClick={() => handleRight(indexDiv)} className="button_right">
              <BsFillArrowRightCircleFill />
            </button>
            
            </>
          )}  

        {order === 9 && (
            <>
            <button onClick={() => handleLeft(indexDiv)} className="button_left">
              <BsFillArrowLeftCircleFill />
            </button>
            
            </>
          )}
      </>
    )}
  };

  return (
    <div className="element" style={{ order: order }}>
      {/* <img src={photo ? photo[0].urls.thumb: console.log('noooon')}/> */}
      <img
        src={
          photoDiv
            ? // ? photoDiv[indexDiv].urls.thumb
              photoDiv[indexDiv].urls.small
            : console.log("noooon")
        }
        alt="img"
      />
      <IconContext.Provider value={{ className: "react-icons" }}>
        {/* {browserWidth > 680 && ( */}
          <>
            
            <BrowserWidth browserWidth={browserWidth} order={order} width={680}/>
          </>
         
        {/* // )} */}
        {/* {children} */}
        {/* {console.log("photooooo", photo)}
        {order > 1 && (
          <button onClick={() => handleLeft(indexDiv)} className="button_left">
            <BsFillArrowLeftCircleFill />
          </button>
        )}
        {order < 9 && (
          <button
            onClick={() => handleRight(indexDiv)}
            className="button_right"
          >
            <BsFillArrowRightCircleFill />
          </button>
        )}
        <button onClick={() => handleUp(indexDiv, order)} className="button_up">
          <BsFillArrowUpCircleFill />
        </button>
        <button
          onClick={() => handleDown(indexDiv, order)}
          className="button_down"
        >
          <BsFillArrowDownCircleFill />
        </button> */}
      </IconContext.Provider>
    </div>
  );
}
