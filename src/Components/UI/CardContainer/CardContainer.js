import React from "react";
import classes from "./CardContainer.module.css";

const CardContainer = (props) => {
  return <div className={classes.CardContainer} >{props.children}</div>;
};
export  default CardContainer;
