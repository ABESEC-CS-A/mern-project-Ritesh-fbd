import React, { useState } from "react";
import "../styles/modal.css";

export default function CreateGroupModal({ onClose }) {
  const [title, setTitle] = useState("");

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Create Study Group</h2>
        <input
          placeholder="Group Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="modal-buttons">
          <button onClick={onClose} className="cancel-btn">Cancel</button>
          <button className="create-btn">Create</button>
        </div>
      </div>
    </div>
  );
}
