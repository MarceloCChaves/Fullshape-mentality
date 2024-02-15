import Modal from "react-modal";
import { IModal } from "../../interfaces/IModal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "var(--black)",
    width: "60%",
    height: "60%",
    borderRadius: "1rem",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center'
  },
};

Modal.setAppElement("#root");

const ModalComponent = ({ modalIsOpen, closeModal, children }: IModal) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
