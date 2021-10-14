const SearchBar = ({ setImageList, fetchData }) => {
  const onClick = () => {
    fetchData({
      url: "https://api.unsplash.com/search/photos",
      params: { query: "dog" },
    }).then((res) => {
      console.log(res.data);
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
