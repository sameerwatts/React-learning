import React from "react";

const TabButtons = ({ children, onSelect, isSelected }) => {
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
};

export default TabButtons;
