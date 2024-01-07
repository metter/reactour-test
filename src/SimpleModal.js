import React from "react";
import "./App.css"; // Path to your CSS file

const SimpleModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        <div className="modal-body">
          <p className="modal-text">This is a simple modal.</p>
          <button className="modal-button">Click me</button>
        </div>
      </div>
    </div>
  );
};

export default SimpleModal;
