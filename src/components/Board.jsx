import Image from "./Image";

const Board = ({ imageList, scrollRef }) => {
  return (
    <div className={"board"}>
      {imageList.map((image, index) => {
        return (
          <Image
            key={image.id}
            image={image}
            index={index}
            scrollRef={index === imageList.length - 1 ? scrollRef : null}
          />
        );
      })}
    </div>
  );
};

export default Board;
