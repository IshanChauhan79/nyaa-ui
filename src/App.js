import React, { useState } from "react";

import Layout from "./Components/Layout/Layout";
import TorrentContainer from "./Components/TorrentContainer/TorrentContainer";
import classes from "./App.module.css";

const App = () => {
  const [urlParams, setUrlParams] = useState({ sourceSelcted: "", search: "" });
  const [sources, setSources] = useState([
    "Golumpa",
    "Erai-raws",
    "SubsPlease",
    "Judas"
  ]);
  // const [sourceClicked, setSourceClicked] = useState("");

  const onSourceClickHandler = (item) => {
    if (urlParams.sourceSelcted === item) {
      setUrlParams({ ...urlParams, sourceSelcted: "" });
      return;
    }
    setUrlParams({ ...urlParams, sourceSelcted: item });
  };

  const onSourceDeleteHandler = (item) => {
    if (urlParams.sourceSelcted === item) {
      setUrlParams({ ...urlParams, sourceSelcted: "" });
    }
    setSources(sources.filter((source) => source !== item));
  };

  const onAddSourceHandler = (item) => {
    !sources.includes(item) && setSources((prev) => [...prev, item]);
    // console.log(!sources.includes(item))
  };

  const onSearchSubmitHandler = (search) => {
    setUrlParams({ ...urlParams, search: search });
  };
  const onLogoClickedHandler = () => {
    setUrlParams({ sourceSelcted: "", search: "" });
  };
  // console.log(urlParams);
  return (
    <Layout
      sourceSelcted={urlParams.sourceSelcted}
      sources={sources}
      onSourceClicked={onSourceClickHandler}
      onAddSource={onAddSourceHandler}
      onSourceDelete={onSourceDeleteHandler}
      onLogoClicked={onLogoClickedHandler}
      onSearchSubmit={onSearchSubmitHandler}
    >
      <div className={classes.App}>
        <TorrentContainer 
          uploader={urlParams.sourceSelcted}
          search={urlParams.search}
        />
      </div>
    </Layout>
  );
};

export default App;
