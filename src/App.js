import React from "react";

import Layout from "./Components/Layout/Layout";
import TorrentContainer from "./Components/TorrentContainer/TorrentContainer";
import classes from "./App.module.css";

const App = () => {
  return (
    <Layout>
      <div className={classes.App}>
        <TorrentContainer />
      </div>
    </Layout>
  );
};

export default App;
