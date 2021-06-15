import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { parseString } from "xml2js";
import { torrentActions } from "../../store/torrent-slice";
import { uiActions } from "../../store/ui-slice";

import classes from "./TorrentContainer.module.css";
import TorrentCard from "../TorrentCard/TorrentCard";
import Spinner from "../UI/Spinner/Spinner";
import ErrorHandler from "../UI/ErrorHandler/ErrorHandler";
import getUrl from "../../assests/js/getMagnetUrl/getUrl";

const TorrentContainer = (props) => {
  const torrent = useSelector(state=>state.torrentSlice);
  const ui = useSelector(state=>state.uiSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uiActions.setLoading({isLoading:true}))
    const url = "https://ishan1plus1-eval-prod.apigee.net/nyaa/";
    let finalParam = getUrl(torrent.search, torrent.sourceSelected, torrent.uploaderSelected);
    // console.log(finalParam);
    axios
      .get(url + finalParam, {
        "Content-Type": "application/xml; charset=utf-8",
      })
      .then((response) => {

        parseString(response.data, function (err, result) {
          const data=result.rss.channel[0].item;
          if (err) {
            console.log(err);
            return;
          }
          setTimeout(()=>{
            if(!data){
              dispatch(uiActions.setError({isError:true}))
            }
          },5000)
          dispatch(torrentActions.updateTorrentData({torrentData:data}))
        });
        dispatch(uiActions.setLoading({isLoading:false}))
      })
      .catch(() => {
        dispatch(uiActions.setError({isError:true}))
      });
  }, [dispatch,torrent.search, torrent.sourceSelected, torrent.uploaderSelected]);






  // const [torrentData, setTorrentData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [errorMessage,setError]=useState(null);

  // useEffect(() => {
  //   setLoading(true);
  //   const url = "https://ishan1plus1-eval-prod.apigee.net/nyaa/";
  //   let finalParam = getUrl(torrent.search, torrent.sourceSelected, torrent.uploaderSelected);
  //   // console.log(finalParam);
  //   axios
  //     .get(url + finalParam, {
  //       "Content-Type": "application/xml; charset=utf-8",
  //     })
  //     .then((response) => {
  //       if(!response.ok){
  //         console.log('oh no');
  //         setLoading(false)
  //       }
  //       setLoading(true);
  //       parseString(response.data, function (err, result) {
  //         if (err) {
  //           console.log(err);
  //           return;
  //         }
  //         setTorrentData(result.rss.channel[0].item);
  //       });
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       // setError(error.message);
  //       console.log(error);
  //     });
  // }, [torrent.search, torrent.sourceSelected, torrent.uploaderSelected]);
  let torrentCards = <Spinner />;
  if(ui.loading){
    torrentCards=<Spinner />
  }
  if(ui.error){
    torrentCards=<ErrorHandler />
  }
  if (!ui.loading && torrent.torrentData && !ui.error) {
    torrentCards = torrent.torrentData.map((item) => (
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
