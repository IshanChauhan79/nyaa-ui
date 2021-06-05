import React, { useEffect, useState } from "react";
import axios from "axios";
import { parseString } from "xml2js";

import classes from "./TorrentContainer.module.css";
import TorrentCard from "../TorrentCard/TorrentCard";
import Spinner from "../UI/Spinner/Spinner";
import magnetUrl from "../../assests/js/getMagnetUrl/getMagnetUrl";

const TorrentContainer = (props) => {
  const [torrentData, setTorrentData] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [errorMessage,setError]=useState(null);

  useEffect(() => {
    setLoading(true);
    const url = "";
    let finalParam = magnetUrl(props.search, props.source, props.uploader);
    axios
      .get(url + finalParam, {
        "Content-Type": "application/xml; charset=utf-8",
      })
      .then((response) => {
        if (response.status !== 200) {
          setLoading(false);
          // setError(true);
          return;
        }
        parseString(response.data, function (err, result) {
          if (err) {
            console.log(err);
            return;
          }
          setTorrentData(result.rss.channel[0].item);
          setLoading(false);
        });
      })
      .catch((error) => {
        setLoading(false);
        // setError(error.message);
        console.log(error);
      });
  }, [props.search, props.uploader, props.source]);
  let torrentCards = <Spinner />;
  if (!loading && torrentData) {
    torrentCards = torrentData.map((item) => (
      <TorrentCard
        key={item.title}
        data={item}
        sourceClicked={props.onsourceClicked}
      />
    ));
  }
  return <div className={classes.TorrentContainer}>{torrentCards}</div>;
};
export default TorrentContainer;
