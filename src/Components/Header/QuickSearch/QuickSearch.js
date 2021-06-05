import React from "react";
import QuickSearchList from "../QuickSearchList/QuickSearchList";
import AddKeyButton from "../AddKeyButton/AddKeyButton";
import classes from "./QuickSearch.module.css";

const QuickSearch = (props) => {
  return (
    <div className={classes.QuickSearch}>
      <QuickSearchList
        uploadersList={props.uploaders}
        uploaderSelected={props.uploaderSelected}
        clicked={props.uploaderClicked}
        onDelete={props.uploaderDelete}
      />
      <AddKeyButton addUploader={props.addUploader} />
    </div>
  );
};
export default QuickSearch;
