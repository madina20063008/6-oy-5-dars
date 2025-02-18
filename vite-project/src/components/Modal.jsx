import React from "react";

function Modal({ title, children, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
          <div className="modal-body">{children}</div>
          
        </div>
      </div>
    </div>
  );
}

export default Modal;

