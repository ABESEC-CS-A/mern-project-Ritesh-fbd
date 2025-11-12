import React, { useState } from "react";
import Header from "../components/Header";
import SidebarFilters from "../components/SidebarFilters";
import GroupCard from "../components/GroupCard";
import CreateGroupModal from "../components/CreateGroupModal";
import Footer from "../components/Footer";
import { sampleGroups } from "../utils/data";
import "../index.css";

export default function StudyGroupFinder() {
  const [groups, setGroups] = useState(sampleGroups);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      <Header onCreate={() => setShowModal(true)} />
      <div className="main-layout">
        <SidebarFilters />
        <main className="group-list">
          {groups.map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </main>
      </div>
      <Footer />
      {showModal && <CreateGroupModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
