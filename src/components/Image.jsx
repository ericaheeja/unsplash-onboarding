import "../styles/Image.css";
import axios from "axios";
import ImageDetailModel from "../models/ImageDetailModel";

const Image = ({ image, scrollRef, setModalVisible, imageDetail }) => {
  const { imageUrl, authorName, authorUserName, thumbnail, id } = image;

  const fetchAuthorProfile = (authorUserName) => {
    window.open(`https://unsplash.com/@${authorUserName}`);
  };

  const fetchPhotoDetail = async (id) => {
    const response = await axios.get(`https://api.unsplash.com/photos/${id}`, {
      params: {
        id: id,
        client_id: "2YK5AHxuEKHDew9UR1kU2vcV9Nz7U9nT3BFp1k6eZfw",
      },
    });
    return new ImageDetailModel(response.data);
  };

  const onClick = () => {
    fetchPhotoDetail(id).then((res) => {
      imageDetail.current = res;
      setModalVisible(true);
    });
  };

  return (
    <div className={"image-detail-container"} ref={scrollRef}>
      <div className={"image-container"}>
        <div className={"image-list"} onClick={onClick}>
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
