import React from "react";
import "../styles/groupcard.css";

export default function GroupCard({ group }) {
  return (
    <div className="group-card">
      <h3>{group.title}</h3>
      <p className="meta">
        {group.subject} • {group.level}
      </p>
      <p className="desc">{group.description}</p>
      <div className="info">
        <span>{group.date}</span>
        <span>{group.location}</span>
      </div>
      <button className="join-btn">Join Group</button>
    </div>
  );
}
