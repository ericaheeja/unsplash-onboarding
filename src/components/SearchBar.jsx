import { useRef } from "react";

const SearchBar = ({ fetchData }) => {
  const onClick = () => {
    fetchData({
      isSearch: true,
      params: { query: inputRef.current.value, page: 1 },
    });
  };

  const inputRef = useRef();

  return (
    <div className={"search-bar"}>
      <input className={"input-box"} ref={inputRef} />
      <button className={"search-button"} onClick={onClick}>
        {"검색"}
      </button>
    </div>
  );
};

export default SearchBar;
