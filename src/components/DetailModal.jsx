import "../styles/DetailModal.css";

const DetailModal = ({ setModalVisible, imageDetail }) => {
  let result = [];
  for (const info in imageDetail.current) {
    if (info === "url") {
      continue;
    }
    result.push(
      <>
        <p className={"content-subject"}>{info}</p>
        <p className={"content"}>{imageDetail.current[info]}</p>
      </>
    );
  }

  return (
    <div className={"modal"}>
      <div className={"modal-body"}>
        <img className={"content-image"} src={imageDetail.current.url} />
        <div className={"modal-content"}>
          {result.map((info) => {
            return info;
          })}
        </div>
        <button
          className={"modal-exit"}
          onClick={() => {
            setModalVisible(false);
          }}
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default DetailModal;
