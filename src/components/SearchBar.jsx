import { useRef } from "react";

const SearchBar = ({ fetchData, config }) => {
  const onClick = () => {
    config.current = {
      page: 1,
      query: inputRef.current.value,
    };
    fetchData({
      isSearch: true,
      params: { query: inputRef.current.value, page: 1 },
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
