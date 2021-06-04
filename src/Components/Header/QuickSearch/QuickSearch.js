import React, { useState } from "react";
import QuickSearchList from "../QuickSearchList/QuickSearchList";
import AddKeyButton from "../AddKeyButton/AddKeyButton";
import classes from "./QuickSearch.module.css";

const QuickSearch = (props) => {
  

  return (
    <div className={classes.QuickSearch}>
      <QuickSearchList
        sourceList={props.sources}
        sourceSelcted={props.sourceSelcted}
        clicked={props.sourceClicked}
        onDelete={props.sourceDelete}
      />
      <AddKeyButton addSource={props.addSource} />
    </div>
  );
};
export default QuickSearch;
