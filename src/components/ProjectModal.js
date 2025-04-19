
import React from 'react';
import '../Styles/ProjectModal.css'; 
const ProjectModal = ({ id, onClose, content }) => {
  return (
    <div className="project-modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {content}
      </div>
    </div>
  );
};

export default ProjectModal;
