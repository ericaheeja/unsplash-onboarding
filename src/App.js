import "./App.css";
import SearchBar from "./components/SearchBar";
import Board from "./components/Board";
import React, { useEffect, useRef, useState, useCallback } from "react";
import axios from "axios";
import ImageModel from "./models/ImageModel";
import DetailModal from "./components/DetailModal";

function App() {
  const [imageList, setImageList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const imageDetail = useRef(null);
  const config = useRef({
    page: 1,
    query: "",
  });

  const fetchData = async ({ isSearch, params }) => {
    config.current = {
      ...config,
      ...params,
    };
    const response = await axios.get(
      isSearch && config.current.query !== ""
        ? "https://api.unsplash.com/search/photos"
        : "https://api.unsplash.com/photos",
      {
        params: isSearch
          ? {
              client_id: "2YK5AHxuEKHDew9UR1kU2vcV9Nz7U9nT3BFp1k6eZfw",
              per_page: 20,
              ...params,
            }
          : {
              client_id: "2YK5AHxuEKHDew9UR1kU2vcV9Nz7U9nT3BFp1k6eZfw",
              per_page: 200,
              page: 1,
            },
      }
    );
    if (config.current.query === "") {
      return setImageList(response.data.map((e) => new ImageModel(e)));
    } else if (isSearch && config.current.page === 1) {
      return setImageList(response.data.results.map((e) => new ImageModel(e)));
    } else if (isSearch) {
      return setImageList([
        ...imageList,
        ...response.data.results.map((e) => new ImageModel(e)),
      ]);
    } else {
      return setImageList(response.data.map((e) => new ImageModel(e)));
    }
  };

  useEffect(async () => {
    await fetchData({});
  }, []);

  const observerRef = useRef();
  const scrollRef = useCallback(
    (node) => {
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchData({
            isSearch: true,
            params: {
              query: config.current.query,
              page: config.current.page + 1,
            },
          });
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [imageList]
  );

  return (
    <div className="App">
      <SearchBar fetchData={fetchData} />
      <Board
        imageList={imageList}
        fetchData={fetchData}
        scrollRef={scrollRef}
        setModalVisible={setModalVisible}
        imageDetail={imageDetail}
      />
      {modalVisible && (
        <DetailModal
          setModalVisible={setModalVisible}
          imageDetail={imageDetail}
        />
      )}
    </div>
  );
}

export default App;
