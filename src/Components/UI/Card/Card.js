import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      className={[classes.Card, props.clickedClass && classes.Clicked].join(
        " "
      )}
    >
      <div
        style={{
          paddingRight: props.delete ? "15px" : 0,
        }}
        className={classes.CardText}
        onClick={() => props.clicked(props.children)}
      >
        {props.children}
      </div>

      {props.delete ? (
        <div
          className={classes.Delete}
          onClick={() => props.onDelete(props.children)}
        >
          <i className="fas fa-times"></i>
        </div>
      ) : null}
    </div>
  );
};
export default Card;
