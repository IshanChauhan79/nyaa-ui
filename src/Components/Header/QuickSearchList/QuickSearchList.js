import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { torrentActions } from "../../../store/torrent-slice";

import CardContainer from "../../UI/CardContainer/CardContainer";
import Card from "../../UI/Card/Card";
import classes from "./QuickSearchList.module.css";

const QuickSearchKeys = (props) => {
  const dispatch = useDispatch();
  const torrent = useSelector((state) => state.torrentSlice);

  const onDeleteUploaderHandler = (uploaderClicked) => {
    //delete  uploader
    dispatch(torrentActions.deleteUploader({ uploader: uploaderClicked }));
  };
  const onClickUploaderHandler = (uploaderClicked) => {
    //select uploader
    dispatch(torrentActions.uploaderClicked({ uploader: uploaderClicked }));
  };

  const Sources = torrent.uploaders.map((item, i) => (
    <Card
      key={item}
      clickedClass={torrent.uploaderSelected === item}
      clicked={onClickUploaderHandler}
      onDelete={onDeleteUploaderHandler}
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
