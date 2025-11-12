import React from "react";
import "../styles/sidebar.css";

export default function SidebarFilters() {
  return (
    <aside className="sidebar">
      <h3>Filters</h3>
      <label>Subject</label>
      <select>
        <option>All</option>
        <option>React</option>
        <option>DSA</option>
      </select>

      <label>Level</label>
      <select>
        <option>All</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
    </aside>
  );
}
