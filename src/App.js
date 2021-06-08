import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import TorrentContext from "./store/torrent-context";

import Layout from "./Components/Layout/Layout";
import TorrentContainer from "./Components/TorrentContainer/TorrentContainer";
import classes from "./App.module.css";

const App = () => {
  const [urlParams, setUrlParams] = useState({
    uploaderSelected: "",
    search: "",
    sourceSelcted: "",
  });
  const [uploaders, setUploaders] = useState([
    "Golumpa",
    "Erai-raws",
    "SubsPlease",
  ]);
  // const history= useHistory();
  const location = useLocation();

  const querParams = new URLSearchParams(location.search);
  const category = querParams.get("cat");
  const searchParam = querParams.get("search");

  console.log(searchParam);
  console.log(category);

  // console.log(urlParams.sourceSelcted);
  useEffect(() => {
    if (localStorage.getItem("uploaderList")) {
      console.log(localStorage.getItem("uploaderList"));
      setUploaders((prev) =>
        prev.concat(localStorage.getItem("uploaderList").split(","))
      );
    }
  }, []);
  useEffect(() => {
    setUrlParams((prev) => ({
      ...prev,
      sourceSelcted: category === null ? "" : category,
      search: searchParam === null ? "" : searchParam,
    }));
    // }
  }, [category, searchParam]);

  useEffect(() => {
    // console.log("local storage update")
    let data = uploaders.slice(3);
    localStorage.setItem("uploaderList", data);
  }, [uploaders]);

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
    setUploaders(
      uploaders.filter((uploader) => uploader !== onUploaderClicked)
    );
  };

  const onAddUploaderHandler = (uploader) => {
    !uploaders.includes(uploader) &&
      setUploaders((prev) => [...prev, uploader]);
  };

  const onSearchSubmitHandler = (search) => {
    setUrlParams({ ...urlParams, search: search });
  };
  const onLogoClickedHandler = () => {
    setUrlParams({ uploaderSelected: "", search: "", sourceSelcted: "" });
  };
  const onsourceClickedHandler = (source) => {
    setUrlParams({ ...urlParams, sourceSelcted: source });
  };
  // console.log(urlParams);
  return (
    <TorrentContext.Provider
      value={{
        uploaders: uploaders,
        uploaderSelected: urlParams.uploaderSelected,
        search: urlParams.search,
        onUploaderClicked: onUploaderClickedHandler,
        onAddUploader: onAddUploaderHandler,
        onUploaderDelete: onUploaderDeleteHandler,
        onLogoClicked: onLogoClickedHandler,
        onSearchSubmit: onSearchSubmitHandler,
      }}
    >
      <Layout>
        <Switch>
          <Route path="/" exact>
            <div className={classes.App}>
              <TorrentContainer
                uploader={urlParams.uploaderSelected}
                search={urlParams.search}
                source={urlParams.sourceSelcted}
                onsourceClicked={onsourceClickedHandler}
              />
            </div>
          </Route>
          <Route
            path="/"
            render={() => <h1 style={{ marginTop: "200px" }}>Not found</h1>}
          ></Route>
        </Switch>
      </Layout>
    </TorrentContext.Provider>
  );
};

export default App;
