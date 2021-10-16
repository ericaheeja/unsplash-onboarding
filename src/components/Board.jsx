const Board = ({ imageList, scrollRef }) => {
  return (
    <div className={"board"}>
      {imageList.map((image, index) => {
        return (
          <img
            ref={index === imageList.length - 1 ? scrollRef : null}
            className={"image"}
            src={image.urls.regular}
            alt={""}
            key={image.id}
          />
        );
      })}
    </div>
  );
};

export default Board;
