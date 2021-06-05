import React, { useState,useEffect } from "react";

import Layout from "./Components/Layout/Layout";
import TorrentContainer from "./Components/TorrentContainer/TorrentContainer";
import classes from "./App.module.css";

const App = () => {
  const [urlParams, setUrlParams] = useState({ uploaderSelected: "", search: "",sourceSelcted:"" });
  const [uploaders, setUploaders] = useState([
    "Golumpa",
    "Erai-raws",
    "SubsPlease"
  ]);
  console.log(urlParams.sourceSelcted)
  useEffect(()=>{
    if(localStorage.getItem("uploaderList")){
      console.log(localStorage.getItem("uploaderList"))
      setUploaders(prev=> prev.concat(localStorage.getItem("uploaderList").split(",")))
    }
    // else{
      // console.log("null uploaderList")
    // }
    // console.log(localStorage.getItem("uploaderList"))
  },[])
  useEffect(()=>{
    // console.log("local storage update")
    let data=uploaders.slice(3);
    localStorage.setItem('uploaderList',data)
  },[uploaders])
  // const [sourceClicked, setSourceClicked] = useState("");

  const onUploaderClickedHandler = (uploader) => {
    if (urlParams.uploaderSelected === uploader) {
      setUrlParams({ ...urlParams, uploaderSelected: "" });
      return;
    }
    setUrlParams({ ...urlParams, uploaderSelected: uploader });
  };

  const onUploaderDeleteHandler = (onUploaderClicked) => {
    if (urlParams.uploaderSelected === onUploaderClicked) {
      setUrlParams({ ...urlParams, uploaderSelected: "" });
    }
    setUploaders(uploaders.filter((uploader) => uploader !== onUploaderClicked));

  };

  const onAddUploaderHandler = (uploader) => {
    !uploaders.includes(uploader) && setUploaders((prev) => [...prev, uploader]);
  
  };

  const onSearchSubmitHandler = (search) => {
    setUrlParams({ ...urlParams, search: search });
  };
  const onLogoClickedHandler = () => {
    setUrlParams({ uploaderSelected: "", search: "",sourceSelcted:"" });
  };
  const onsourceClickedHandler =(source)=>{
    setUrlParams({ ...urlParams ,sourceSelcted:source });
  }
  // console.log(urlParams);
  return (
    <Layout
      uploaderSelected={urlParams.uploaderSelected}
      uploaders={uploaders}
      onUploaderClicked={onUploaderClickedHandler}
      onAddUploader={onAddUploaderHandler}
      onUploaderDelete={onUploaderDeleteHandler}
      onLogoClicked={onLogoClickedHandler}
      onSearchSubmit={onSearchSubmitHandler}
    >
      <div className={classes.App}>
        <TorrentContainer 
          uploader={urlParams.uploaderSelected}
          search={urlParams.search}
          source={urlParams.sourceSelcted}
          onsourceClicked={onsourceClickedHandler}
        />
      </div>
    </Layout>
  );
};

export default App;
