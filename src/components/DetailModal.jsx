import "../styles/DetailModal.css";

const DetailModal = ({ setModalVisible, imageDetail }) => {
  console.log(imageDetail.current);
  return (
    <div className={"modal"}>
      <div className={"modal-body"}>
        <div className={"modal-content"}>contents</div>
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
