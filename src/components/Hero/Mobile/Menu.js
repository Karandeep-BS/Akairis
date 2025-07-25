import React, { useState } from "react";

// =============================[Sides Component]===========================
function Sides({ isOpen, toggleMenu }) {
  return (
    <div className="absolute left-0 z-10">
      {/* =============================[Toggle Button]=========================== */}
      <button
        onClick={toggleMenu}
        className="  m-2 text-white rounded"
      >
        {isOpen ? "" : ""}
        <svg xmlns="http://www.w3.org/2000/svg" width="5vh" height="5vh" viewBox="0 0 24 24"><path fill="#fff" d="M3 4h18v2H3zm0 7h12v2H3zm0 7h18v2H3z"/></svg>
      </button>

      {/* =============================[Sliding Menu]=========================== */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 text-lg font-semibold border-b border-black">
          Menu
        </div>
        <ul className="p-4 space-y-3">
          <li className=" cursor-pointer">Home</li>
          <li className=" cursor-pointer">About</li>
          <li className=" cursor-pointer">Services</li>
          <li className=" cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* =============================[Backdrop]=========================== */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 "
        />
      )}
    </div>
  );
}

// =============================[SlidingMenu Wrapper]===========================
export default function SlidingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return <Sides isOpen={isOpen} toggleMenu={toggleMenu} />;
}
