import React from "react";
import classes from "./SourceImage.module.css";

const SourceIamge = (props) => {
  
  const path = "/category/" + props.categoryId + ".png";
  return (
    <div>
      <img
        src={path}
        alt="Anime"
        className={classes.Image}
        onClick={() => props.sourceClicked(props.categoryId)}
      ></img>
    </div>
  );
};

export default SourceIamge;
