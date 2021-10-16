const Image = ({ image, scrollRef }) => {
  const { imageUrl, authorName, authorUserName, thumbnail, id } = image;
  console.log(image);
  return (
    <div ref={scrollRef}>
      <img className={"image"} src={imageUrl} alt={authorUserName} />
    </div>
  );
};

export default Image;
