
import Modal from "react-modal";
import { useState } from "react";
import { close } from "../assets";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#EF846B",
  },
};


const Modalpopup = ({text}) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);


  function openModal() {
    setIsOpen(true);
  }


  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }


  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div>
      <button
        onClick={openModal}
        class="mt-5 border p-2 shadow:md bg-gradient-to-r from-Tomato to-ChiliRed text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
      >
        Instructions
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <button onClick={closeModal}>
          <img src={close} alt="Close"></img>
        </button>
        <div>
           
          {text}
        </div>
      </Modal>
    </div>
  );
};


export default Modalpopup;




