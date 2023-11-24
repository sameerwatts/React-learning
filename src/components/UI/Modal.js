import React from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = ({onClose}) => {
  return <div className={classes.backdrop} onClick={onClose}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElements = document.querySelector("#overlays");

const Modal = ({ children, onClose }) => {
  return (
    <>
      {createPortal(<Backdrop onClose={onClose}/>, portalElements)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElements)}
    </>
  );
};

export default Modal;
