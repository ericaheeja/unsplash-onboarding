import Image from "./Image";
import "../styles/Board.css";

const Board = ({ imageList, scrollRef, setModalVisible }) => {
  return (
    <div className={"board"}>
      {imageList.map((image, index) => {
        return (
          <Image
            key={image.id}
            image={image}
            index={index}
            scrollRef={index === imageList.length - 1 ? scrollRef : null}
            setModalVisible={setModalVisible}
          />
        );
      })}
    </div>
  );
};

export default Board;
