import "../styles/DetailModal.css";

const DetailModal = ({ setModalVisible }) => {
  return (
    <div
      className={"modal"}
      onClick={(e) => {
        e.preventDefault();
        setModalVisible(false);
      }}
    >
      <div
        className={"modal-body"}
        onClick={(e) => {
          e.stopPropagation();
        }}
      ></div>
    </div>
  );
};

export default DetailModal;
