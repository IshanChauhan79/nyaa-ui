import React,{useEffect,useState} from "react";
import axios from 'axios';
import { parseString } from "xml2js";

import classes from "./TorrentContainer.module.css";
import TorrentCard from "../TorrentCard/TorrentCard";
import Spinner from "../UI/Spinner/Spinner";

const TorrentContainer = (props) => {
  const [torrentData,setTorrentData]=useState(null);
  useEffect(() => {
    const url = "";
    axios
      .get(url,{ "Content-Type": "application/xml; charset=utf-8",})
      .then((response) => {
        parseString(response.data, function (err, result) {
          if (err) {
            console.log(err);
            return;
          }
          setTorrentData(result.rss.channel[0].item);
        });
      });
  }, []);
  let torrentCards=<Spinner />
  if(torrentData){
   torrentCards=torrentData.map(item=><TorrentCard key={item.title} data={item} /> )
  }  
  return (
    <div className={classes.TorrentContainer}>
      {torrentCards}
    </div>
  );
};
export default TorrentContainer;
