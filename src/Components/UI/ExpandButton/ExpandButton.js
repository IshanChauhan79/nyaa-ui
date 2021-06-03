import React from "react";
import classes from "./ExpandButton.module.css";

const ExpandButton = (props) => {
  let button = null;
  if (props.expand) {
    button = (
      <div className={classes.Expand} onClick={props.onClickHandler}>
        <i className="fas fa-angle-double-up"></i>
      </div>
    );
  } else {
    button = (
      <div className={classes.Expand} onClick={props.onClickHandler}>
        <i className="fas fa-angle-double-down"></i>
      </div>
    );
  }

  return button;
};

export default ExpandButton;
