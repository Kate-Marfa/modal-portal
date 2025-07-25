import React from "react";
import ReactDOM from "react-dom";

export default function Modal({
  isOpen,
  closeModalWindow,
  submitModalWindow,
  Title,
  children,
}) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{Title}</h2>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-actions">
          <button onClick={closeModalWindow}>Close</button>
          <button onClick={submitModalWindow}>Submit</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
