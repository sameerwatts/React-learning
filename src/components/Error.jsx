import React from "react";

const Error = ({ className, title, message }) => {
  return (
    <div className={`${className} error`}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Error;
