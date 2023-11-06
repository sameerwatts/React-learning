import React from "react";

const TabButtons = ({ children, isSelected, ...props }) => {
  return (
    <li>
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
};

export default TabButtons;
