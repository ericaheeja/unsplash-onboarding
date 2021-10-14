const Board = ({ imageList }) => {
  console.log(imageList);
  return (
    <div className={"board"}>
      {imageList.map((image) => (
        <img
          className={"image"}
          src={image.urls.regular}
          alt={""}
          key={image.id}
        />
      ))}
    </div>
  );
};

export default Board;
