const Image = ({ image, scrollRef }) => {
  const { imageUrl, authorName, authorUserName, thumbnail, id } = image;
  console.log(image);
  return (
    <div className={"image-detail-container"} ref={scrollRef}>
      <div className={"image-container"}>
        <img className={"image"} src={imageUrl} alt={authorUserName} />

        <div className={"detail"}>
          <img className={"author-image"} src={thumbnail} />
          <div className={"author-name"}>{authorName}</div>
        </div>
      </div>
    </div>
  );
};

export default Image;
