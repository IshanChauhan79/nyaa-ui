import React, { useContext } from "react";
import QuickSearchList from "../QuickSearchList/QuickSearchList";
import AddKeyButton from "../AddKeyButton/AddKeyButton";
import classes from "./QuickSearch.module.css";
import TorrentContext from "../../../store/torrent-context";

const QuickSearch = (props) => {
  const torrentCtx = useContext(TorrentContext);
  return (
    <div className={classes.QuickSearch}>
      <QuickSearchList />
      <AddKeyButton addUploader={torrentCtx.onAddUploader} />
    </div>
  );
};
export default QuickSearch;
