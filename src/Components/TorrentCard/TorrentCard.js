import React, { useState } from "react";
import classes from "./TorrentCard.module.css";
import dateTime from "../UI/getDate/getDate";
import DownloadButton from "../UI/DownloadButton/DownloadButton";
import ExpandButton from "../UI/ExpandButton/ExpandButton";

import nyaaImg from "../../assests/images/nyaa.png";
import c12 from "../../assests/images/category/1_2.png";
import c13 from "../../assests/images/category/1_3.png";
import c14 from "../../assests/images/category/1_4.png";
import c21 from "../../assests/images/category/2_1.png";
import c31 from "../../assests/images/category/3_1.png";
import c33 from "../../assests/images/category/3_3.png";

// magnet:?xt=urn:btih:6459bb5dc5e59eb28631eeb09d5965c17ee89822&dn=hello

const TorrentCard = (props) => {
  const [expandCard, setExpandCard] = useState(false);
  const title = props.data.title;
  const trusted = props.data["nyaa:trusted"][0];
  const download = props.data.link;
  const categoryId = props.data["nyaa:categoryId"][0];

  const date = props.data.pubDate;
  const seeds = props.data["nyaa:seeders"];
  const leechers = props.data["nyaa:leechers"];
  const downloads = props.data["nyaa:downloads"];
  const size = props.data["nyaa:size"];

  const category = props.data["nyaa:category"][0];
  const infoHash = props.data["nyaa:infoHash"];
  const nyaaLink = props.data.guid[0]["_"];

  const titleRow = [
    classes.TorrentData,
    trusted === "Yes" ? classes.TitleRowTrusted : classes.TitleRow,
  ];
  const magnetLink = "magnet:?xt=urn:btih:" + infoHash;

  let imgSrc = null;
  switch (categoryId) {
    case "1_2":
      imgSrc = c12;
      break;
    case "1_3":
      imgSrc = c13;
      break;
    case "1_4":
      imgSrc = c14;
      break;
    case "2_1":
      imgSrc = c21;
      break;
    case "3_1":
      imgSrc = c31;
      break;
    case "3_3":
      imgSrc = c33;
      break;
    default:
      break;
  }

  const expandRow = expandCard ? (
    <div className={classes.TorrentData}>
      <div className={classes.nyaaLink}>
        <a href={nyaaLink} target="_blank" rel="noreferrer">
          <img src={nyaaImg} alt="Nyaa" height="40px"  />{" "}
        </a>
      </div>
      <div className={classes.Title}>InfoHash: {infoHash}</div>
      <div className={classes.Category}>{category}</div>
    </div>
  ) : null;

  const onExpandClickHandler = () => {
    setExpandCard((prev) => !prev);
  };

  return (
    <div className={classes.TorrentCard}>
      <div className={titleRow.join(" ")}>
        <div>
          <img src={imgSrc} alt="Anime" className={classes.Image}></img>
        </div>
        <div className={classes.Title}>{title}</div>
        <DownloadButton src={download} type="torrentFile" />
        <DownloadButton src={magnetLink} type="magnet" />
        <ExpandButton
          expand={expandCard}
          onClickHandler={onExpandClickHandler}
        />
      </div>
      <div className={classes.TorrentData}>
        <div className={classes.Date}>{dateTime(date)} </div>
        <div className={classes.downloads}>
          <i className="fas fa-download"></i>&nbsp; {downloads}
        </div>

        <div>
          <div className={classes.Size}>{size} </div>
          <div className={classes.Seeds}>
            {seeds}
            <div className={classes.Tip}>Seeds</div>
          </div>
          <div className={classes.Leechers}>
            {leechers}
            <div className={classes.Tip}>Leechers</div>
          </div>
        </div>
      </div>
      {expandRow}
    </div>
  );
};
export default TorrentCard;
