import "./App.css";
import DivPages from "./Pages/DivPage";

function App() {
  return (
    <div className="App">
      <DivPages />
      {/* {console.log('var env = ', process.env.REACT_APP_API_UNSPLASH_PUBLIC_KEY)} */}
      {/* https://api.unsplash.com/search/photos?query=g&client_id=8YVCL4RYIUrxaq4RXnds9DUMDxfOxhx8gImc-9tIVic&per_page=20 */}
      {/* https://api.unsplash.com/search/photos?query=t&client_id=TI96M4j8W_9hTLmsq2t883On8hdZx6cHKAoA_eBIJrE&per_page=8 */}
    </div>
  );
}

export default App;
