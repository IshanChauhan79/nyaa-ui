import React from "react";
import classes from "./SourceImage.module.css";
import { useHistory, useLocation } from "react-router-dom";

const SourceIamge = (props) => {
  const history = useHistory();
  const location = useLocation();

  const querParams = new URLSearchParams(location.search);
  const search = querParams.get("search");

  const onClickImage = () => {
    // console.log(history);
    // history.push(`/?cat=${props.categoryId}`);
    if (search === null) {
      history.push(`/?cat=${props.categoryId}`);
    } else {
      history.push(`/?cat=${props.categoryId}&search=${search}`);
    }
  };

  const path = "/nyaa-ui/category/" + props.categoryId + ".png";
  return (
    <div className={classes.ImgContainer}>
      <img
        src={path}
        alt="Anime"
        className={classes.Image}
        onClick={onClickImage}
        // onClick={() => props.sourceClicked(props.categoryId)}
      ></img>
    </div>
  );
};

export default SourceIamge;
