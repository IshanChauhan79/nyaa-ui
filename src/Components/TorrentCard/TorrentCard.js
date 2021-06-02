import React from "react";

import c12 from "../../assests/images/category/1_2.png";
import c13 from "../../assests/images/category/1_3.png";
import c14 from "../../assests/images/category/1_4.png";
import c21 from "../../assests/images/category/2_1.png";
import c31 from "../../assests/images/category/3_1.png";
import c33 from "../../assests/images/category/3_3.png";

import classes from "./TorrentCard.module.css";
// magnet:?xt=urn:btih:6459bb5dc5e59eb28631eeb09d5965c17ee89822&dn=hello

const TorrentCard = (props) => {
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
  let imgSrc=null
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

  return (
    <div className={classes.TorrentCard}>
      <div className={titleRow.join(" ")}>
        <div className={classes.Image}>
          <img src={imgSrc} alt=""></img>
        </div>
        <div className={classes.Title}>{title}</div>
        <div>
          <i className="fas fa-download"></i>
        </div>
        <div>
          <i className="fas fa-magnet"></i>
        </div>
        <div className={classes.Expand}>
          <i className="fas fa-expand-alt"></i>
        </div>
      </div>
      <div className={classes.TorrentData}>
        <div className={classes.Date}>{date} </div>
        <div className={classes.downloads}>Downloads: {downloads} </div>

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
      <div className={classes.TorrentData}>
        <div className={classes.nyaaLink}>link </div>
        <div className={classes.Title}>InfoHash: {infoHash}</div>
        <div className={classes.Category}>{category}</div>
      </div>
      {/* 
            title: {title}<br/>
            download: {download}<br/>
            nyaa link: {nyaaLink}<br/>
            nyaa permanent: {isPermaLink}<br/>
             date: {date}<br/>
             seeds: {seeds}<br/>
             leechers: {leechers}<br/>
             downloads: {downloads}<br/>
             infohash: {infoHash}<br/>
             size: {size}<br/>
             category: {category}<br/> */}
    </div>
  );
};
export default TorrentCard;
