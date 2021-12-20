import { useState, useEffect } from "react";
import "./DivPage.css";
import DivComponent from "../Components/DivComponent";
import Search from "../Components/Search";

export default function DivPages() {
  const [divsOrders, setDivsOrders] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [photos, setPhotos] = useState(null);
  const [query2, setQuery2] = useState("");

  useEffect(() => {
    alert(`in useEffect of DivPage and query = ${query2}`)
  });
  // useEffect(() => {
  //   fetch(
  //     `https://api.unsplash.com/search/photos?query=${query}&client_id=TI96M4j8W_9hTLmsq2t883On8hdZx6cHKAoA_eBIJrE&per_page=8`
  //     // "https://api.unsplash.com/search/photos?query=moto&client_id=TI96M4j8W_9hTLmsq2t883On8hdZx6cHKAoA_eBIJrE&per_page=8"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("datas in useEffect DivPage", data);
  //       setPhotos(data.results);
  //       console.log('photo in useEffect DivPage',photos);
  //       // console.log(data.results[0].urls.thumb);
  //       console.log('query in useEffect DivPage', query);
  //       alert(`in useEffect DivPage ${query}`);
  //     });
  // }, [query]);

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

  const handleChangeQuery = (changeQuery) => {
    const query22 = changeQuery;
    setQuery2(query22);
    // setQuery('ouaiiiiii');
    console.log("props changeQuery in divpage ===", changeQuery);
    alert(`in handleChangeQuery ${query2}`);
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
