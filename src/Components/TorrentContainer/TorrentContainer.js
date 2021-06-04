import React, { useEffect, useState } from "react";
import axios from "axios";
import { parseString } from "xml2js";

import classes from "./TorrentContainer.module.css";
import TorrentCard from "../TorrentCard/TorrentCard";
import Spinner from "../UI/Spinner/Spinner";

const TorrentContainer = (props) => {
  const [torrentData, setTorrentData] = useState(null);
  const [loading,setLoading]=useState(true);
  
  useEffect(() => {
    setLoading(true);
    
    let finalParam="";
    let searchUrl="";
    let uploaderUrl="";
    if(props.search !== ""){
      searchUrl=props.search.replace(" ","+");
    }
    if(props.uploader !==""){
      uploaderUrl=props.uploader.replace(" ","+");
    }
    if (uploaderUrl!=="" && searchUrl !== ""){
      finalParam="?q="+searchUrl+"+"+uploaderUrl;
    }else if (uploaderUrl!==""){
      finalParam="?q="+uploaderUrl;
    }else if(searchUrl !== ""){
      finalParam="?q="+searchUrl;
    }
    console.log(finalParam)
    axios
      .get(url+finalParam, { "Content-Type": "application/xml; charset=utf-8" })
      .then((response) => {
        parseString(response.data, function (err, result) {
          if (err) {
            console.log(err);
            return;
          }
          setTorrentData(result.rss.channel[0].item);
          setLoading(false)
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.search,props.uploader]);
  let torrentCards=<Spinner />
  if (!loading && torrentData) {
    torrentCards = torrentData.map((item) => (
      <TorrentCard key={item.title} data={item} />
    ));
  }
  return <div className={classes.TorrentContainer}>{torrentCards}</div>;
};
export default TorrentContainer;
