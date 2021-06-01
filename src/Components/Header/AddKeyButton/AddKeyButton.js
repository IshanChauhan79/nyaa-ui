import React, { useState } from "react";
import ReactDOM from "react-dom";
import classes from "./AddKeyButton.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import AddKeyForm from "../AddKeyForm/AddKeyForm";

const AddKeyButton = (props) => {
  const [backdropShow, setBackdropShow] = useState(false);

  const onAddHandler = () => {
    setBackdropShow((prev) => !prev);
  };

  const backdrop = backdropShow
    ? ReactDOM.createPortal(
        <Backdrop clickHandler={onAddHandler} />,
        document.getElementById("backdrop")
      )
    : null;

  const addKeyForm = backdropShow
    ? ReactDOM.createPortal(
        <AddKeyForm
          addSource={props.addSource}
          closeBackdrop={() => setBackdropShow(false)}
        />,
        document.getElementById("addForm")
      )
    : null;
  console.log(backdropShow);
  return (
    <div className={classes.AddKeyButton}>
      {backdrop}
      {addKeyForm}
      <div className={classes.AddKeyBox} onClick={onAddHandler}>
        <i className="fas fa-plus"></i>
      </div>
    </div>
  );
};
export default AddKeyButton;
