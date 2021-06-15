import React from "react";
import classes from "./SLCounter.module.css";

const SLCounter = (props) => {
  const counterClass = [
    props.seeds ? classes.Seeds : props.leechers ? classes.Leechers : "",
  ];
  const info = (
    <div className={classes.Tip}>
      {props.seeds ? "seeds" : props.leechers ? "Leechers" : ""}
    </div>
  );
  return (
    <div className={counterClass.join(" ")}>
      {props.seeds ? props.seeds : props.leechers ? props.leechers : ""}
      {info}
    </div>
  );
};

export default SLCounter;
