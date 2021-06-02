import React, { useState } from "react";
import QuickSearchKeys from "../QuickSearchList/QuickSearchList";
import AddKeyButton from "../AddKeyButton/AddKeyButton";
import classes from "./QuickSearch.module.css";

const QuickSearch = (props) => {
  const [sources, setSources] = useState([
    "Golumpa",
    "Erai-raws",
    "SubsPlease",
    "Judas",
    "Anime",
    "tatti",
    "poop",
  ]);
  const [sourceClicked, setSourceClicked] = useState("");

  const onSourceClickHandler = (item) => {
    if (sourceClicked === item) {
      setSourceClicked("");
      return;
    }
    setSourceClicked(item);
  };

  const onDeleteHandler = (item) => {
    if (sourceClicked === item) {
      setSourceClicked("");
      return;
    }
    setSources(sources.filter((source) => source !== item));
  };

  const onAddSourceHandler = (item) => {
    !sources.includes(item) && setSources((prev) => [...prev, item]);
    // console.log(!sources.includes(item))
  };

  return (
    <div className={classes.QuickSearch}>
      <QuickSearchKeys
        sourceList={sources}
        sourceClicked={sourceClicked}
        clicked={onSourceClickHandler}
        onDelete={onDeleteHandler}
      />
      <AddKeyButton addSource={onAddSourceHandler} />
    </div>
  );
};
export default QuickSearch;
