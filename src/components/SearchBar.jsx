import { useRef } from "react";

const SearchBar = ({ setImageList, fetchData, config }) => {
  const onClick = () => {
    config.current = {
      page: 1,
      query: inputRef.current.value,
    };
    fetchData({
      isSearch: true,
      params: { query: inputRef.current.value, page: 1 },
    }).then((res) => {
      setImageList(res.data.results);
    });
  };

  const inputRef = useRef();

  return (
    <div className={"search-bar"}>
      <input ref={inputRef} />
      <button onClick={onClick}>{"검색"}</button>
    </div>
  );
};

export default SearchBar;
