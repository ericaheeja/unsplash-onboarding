import "./App.css";
import SearchBar from "./components/SearchBar";
import Board from "./components/Board";
import { useEffect, useState } from "react";
import axios from "axios";

const config = {
  client_id: "2YK5AHxuEKHDew9UR1kU2vcV9Nz7U9nT3BFp1k6eZfw",
  page: 0,
  per_page: 10,
};

function App() {
  const [imageList, setImageList] = useState([]);

  const fetchData = async ({
    params,
    url = "https://api.unsplash.com/photos",
  }) =>
    await axios.get(url, {
      params: {
        ...config,
        ...params,
      },
    });

  useEffect(() => {
    fetchData({}).then((res) => {
      setImageList(res.data);
    });
  }, []);

  return (
    <div className="App">
      <SearchBar setImageList={setImageList} fetchData={fetchData} />
      <Board imageList={imageList} fetchData={fetchData} />
    </div>
  );
}

export default App;
