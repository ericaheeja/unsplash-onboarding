import "../styles/DetailModal.css";

const DetailModal = ({ setModalVisible }) => {
  return (
    <div
      className={"modal"}
      // onClick={(e) => {
      //   e.preventDefault();
      //   setModalVisible(false);
      // }}
    >
      <div
        className={"modal-body"}
        // onClick={(e) => {
        //   e.stopPropagation();
        // }}
      >
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
