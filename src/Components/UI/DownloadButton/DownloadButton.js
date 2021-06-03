import React from "react";
import classes from "./DownloadButton.module.css";

const DownloadButton = (props) => (
  <div className={classes.DownloadButton}>
    <a href={props.src}>
      {props.type === "magnet" ? (
        <i className="fas fa-magnet"></i>
      ) : props.type === "torrentFile" ? (
        <i className="fas fa-download"></i>
      ) : (
        props.type
      )}
    </a>
  </div>
);
export default DownloadButton;
