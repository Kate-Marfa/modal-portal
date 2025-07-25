import React, { use, useState } from "react";
import Modal from "./Modal";
import { ModalTextareaContent } from "./ModalTextareaContent";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textareaValue, setTextareaValue] = useState("");
  const [submittedTexts, setSubmittedTexts] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setTextareaValue("");
  };
  const submitModal = () => {
    if (textareaValue.trim()) {
      setSubmittedTexts([...submittedTexts, textareaValue]);
    }
    closeModal();
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={openModal}>Show Modal</button>
      <Modal
        isOpen={isModalOpen}
        closeModalWindow={closeModal}
        submitModalWindow={submitModal}
        Title="Universal Modal Window"
      >
        <ModalTextareaContent text={textareaValue} setText={setTextareaValue} />
      </Modal>

      <div style={{ marginTop: "30px" }}>
        <h3>Submitted Texts:</h3>
        {submittedTexts.map((text, index) => (
          <div
            key={index}
            style={{
              background: "#f0f0f0",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
