import "./App.css";
import SearchBar from "./components/SearchBar";
import Board from "./components/Board";
import { useState } from "react";

function App() {
  const [imageList, setImageList] = useState([]);

  return (
    <div className="App">
      <SearchBar imageList={imageList} setImageList={setImageList} />
      <Board imageList={imageList} setImageList={setImageList} />
    </div>
  );
}

export default App;
