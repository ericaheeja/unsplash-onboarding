import "../styles/Image.css";

const Image = ({ image, scrollRef, setModalVisible }) => {
  const { imageUrl, authorName, authorUserName, thumbnail, id } = image;

  const fetchAuthorProfile = () => {
    window.open(`https://unsplash.com/@${authorUserName}`);
  };

  return (
    <div className={"image-detail-container"} ref={scrollRef}>
      <div className={"image-container"}>
        <div className={"image-list"} onClick={() => setModalVisible(true)}>
          <img className={"image"} src={imageUrl} alt={authorUserName} />
        </div>
        <div className={"detail"} onClick={fetchAuthorProfile}>
          <img className={"author-image"} src={thumbnail} />
          <div className={"author-name"}>{authorName}</div>
        </div>
      </div>
    </div>
  );
};

export default Image;
