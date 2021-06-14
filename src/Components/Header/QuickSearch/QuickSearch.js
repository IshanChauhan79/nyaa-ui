import React from "react";
import QuickSearchList from "../QuickSearchList/QuickSearchList";
import AddKeyButton from "../AddKeyButton/AddKeyButton";
import classes from "./QuickSearch.module.css";

const QuickSearch = () => {
  return (
    <div className={classes.QuickSearch}>
      <QuickSearchList />
      <AddKeyButton  />
    </div>
  );
};
export default QuickSearch;
