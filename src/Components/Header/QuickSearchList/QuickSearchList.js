import React from "react";
import CardContainer from "../../UI/CardContainer/CardContainer";
import Card from "../../UI/Card/Card";
import classes from "./QuickSearchList.module.css";

const QuickSearchKeys = (props) => {
  const Sources = props.uploadersList.map((item, i) => (
    <Card
      key={item}
      clickedClass={props.uploaderSelected === item}
      clicked={props.clicked}
      onDelete={props.onDelete}
      delete={i > 2}
    >
      {item}
    </Card>
  ));

  return (
    <div className={classes.QuickSearchList}>
      <CardContainer>{Sources}</CardContainer>
    </div>
  );
};

export default QuickSearchKeys;
