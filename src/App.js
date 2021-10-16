import "./App.css";
import SearchBar from "./components/SearchBar";
import Board from "./components/Board";
import { useEffect, useRef, useState, useCallback } from "react";
import axios from "axios";

function App() {
  const [imageList, setImageList] = useState([]);
  const config = useRef({
    page: 1,
    query: "",
  });

  console.log("test");

  const fetchData = async ({ isSearch, params }) => {
    config.current = {
      ...config,
      ...params,
    };
    return await axios.get(
      isSearch
        ? "https://api.unsplash.com/search/photos"
        : "https://api.unsplash.com/photos",
      {
        params: {
          client_id: "2YK5AHxuEKHDew9UR1kU2vcV9Nz7U9nT3BFp1k6eZfw",
          ...params,
        },
      }
    );
  };

  useEffect(() => {
    fetchData({}).then((res) => {
      setImageList(res.data);
    });
  }, []);

  const observerRef = useRef();
  const scrollRef = useCallback(
    (node) => {
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchData({
            isSearch: true,
            params: { query: "dog", page: config.current.page + 1 },
          }).then((res) => {
            console.log(imageList);
            setImageList([...imageList, ...res.data.results]);
          });
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [imageList]
  );

  return (
    <div className="App">
      <SearchBar
        setImageList={setImageList}
        fetchData={fetchData}
        config={config}
      />
      <Board
        imageList={imageList}
        fetchData={fetchData}
        scrollRef={scrollRef}
      />
    </div>
  );
}

export default App;
