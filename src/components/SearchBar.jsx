const SearchBar = ({ setImageList, fetchData, config }) => {
  const onClick = () => {
    config.current = {
      page: 1,
      query: "dog",
    };
    fetchData({
      isSearch: true,
      params: { query: "dog", page: 1 },
    }).then((res) => {
      setImageList(res.data.results);
    });
  };

  return (
    <div className={"search-bar"}>
      <input />
      <button onClick={onClick}>{"검색"}</button>
    </div>
  );
};

export default SearchBar;
