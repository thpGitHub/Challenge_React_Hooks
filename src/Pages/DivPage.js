import { useState, useEffect } from "react";
import "./DivPage.css";
import DivComponent from "../Components/DivComponent";
import Search from "../Components/Search";

export default function DivPages() {
  const [divsOrders, setDivsOrders] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/search/photos?query=moto&client_id=TI96M4j8W_9hTLmsq2t883On8hdZx6cHKAoA_eBIJrE&per_page=8"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("datas", data);
        setPhotos(data);
        console.log(photos);
        // console.log(data.results[0].urls.thumb);
      });
  }, []);

  const handleChangeDivOrderLeft = (indexDiv) => {
    const divsOrders2 = [...divsOrders];
    const findIndexBefore = divsOrders2.indexOf(divsOrders2[indexDiv] - 1);

    divsOrders2[findIndexBefore] += 1;
    divsOrders2[indexDiv] -= 1;
    setDivsOrders(divsOrders2);
  };

  const handleChangeDivOrderRight = (indexDiv) => {
    const divsOrders2 = [...divsOrders];
    const findIndexAfter = divsOrders2.indexOf(divsOrders2[indexDiv] + 1);

    divsOrders2[findIndexAfter] -= 1;
    divsOrders2[indexDiv] += 1;
    setDivsOrders(divsOrders2);
    console.log("photos", photos);
  };

  return (
    <>
      <Search />
      <div id="container">
        {divsOrders.map((divOrder, index) => (
          <DivComponent
            order={divOrder}
            indexDiv={index}
            key={index + 1}
            onChangeDivOrderLeft={handleChangeDivOrderLeft}
            onChangeDivOrderRight={handleChangeDivOrderRight}
            photo={photos}
          >
            élément {index + 1}
          </DivComponent>
        ))}
      </div>
    </>
  );
}
