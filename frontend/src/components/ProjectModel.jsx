import React from "react";
import "./ProjectModal.css";

const PRojectModal = ({ onClose, projectName, setProjectName, handleCreate}) => {

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Create Project</h2>
        <input
          type="text"
          placeholder="Enter Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <div className="modal-buttons">
          <button onClick={handleCreate}>Create</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default PRojectModal;
