import React from "react";
import "../styles/header.css";

export default function Header({ onCreate }) {
  return (
    <header className="header">
      <div className="header-title">
        <h1>Study Group Finder</h1>
        <p>Find, create, and join study groups easily.</p>
      </div>
      <button className="btn-primary" onClick={onCreate}>
        Create Group
      </button>
    </header>
  );
}
