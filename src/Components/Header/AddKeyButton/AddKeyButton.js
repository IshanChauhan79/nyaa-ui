import React, { useState } from "react";
import ReactDOM from "react-dom";
import classes from "./AddKeyButton.module.css";
import AddKeyForm from "../AddKeyForm/AddKeyForm";

const AddKeyButton = (props) => {
  const [backdropShow, setBackdropShow] = useState(false);

  const onAddHandler = () => {
    setBackdropShow((prev) => !prev);
  };

  const addKeyForm = backdropShow
    ? ReactDOM.createPortal(
        <AddKeyForm
          backdropClickHandler={onAddHandler}
          addUploader={props.addUploader}
          closeBackdrop={() => setBackdropShow(false)}
        />,
        document.getElementById("addForm")
      )
    : null;
  // console.log(backdropShow);
  return (
    <div className={classes.AddKeyButton}>
      {addKeyForm}
      <div className={classes.AddKeyBox} onClick={onAddHandler}>
        <i className="fas fa-plus"></i>
      </div>
    </div>
  );
};
export default AddKeyButton;
