import { useState, useEffect } from "react";
import "./DivPage.css";
import DivComponent from "../Components/DivComponent";
import Search from "../Components/Search";

export default function DivPages() {
  const [divsOrders, setDivsOrders] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [photos, setPhotos] = useState(null);
  const [query, setQuery] = useState("orange");

  useEffect(() => {
    console.log("2nd in useEffect of DivPage");
    fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_API_UNSPLASH_PUBLIC_KEY}&per_page=9`
    )
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.results);
      });
  }, [query]);

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
    // console.log("photos", photos);
  };

  const handleChangeQuery = (changeQuery) => {
    setQuery(changeQuery);
    // console.log("props changeQuery in divpage ===", changeQuery);
    // alert(`in handleChangeQuery ${query}`);
  };

  return (
    <>
      <Search onChangeQuery={handleChangeQuery}></Search>
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
