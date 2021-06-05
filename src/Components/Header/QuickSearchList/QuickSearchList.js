import React, { useContext } from "react";
import CardContainer from "../../UI/CardContainer/CardContainer";
import Card from "../../UI/Card/Card";
import classes from "./QuickSearchList.module.css";
import TorrentContext from "../../../store/torrent-context";

const QuickSearchKeys = (props) => {
  const torrentCtx = useContext(TorrentContext);

  const Sources = torrentCtx.uploaders.map((item, i) => (
    <Card
      key={item}
      clickedClass={torrentCtx.uploaderSelected === item}
      clicked={torrentCtx.onUploaderClicked}
      onDelete={torrentCtx.onUploaderDelete}
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
