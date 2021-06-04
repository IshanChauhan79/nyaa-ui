import React from "react";
import Header from "../Header/Header";

// import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div>
      <Header
        sourceSelcted={props.sourceSelcted}
        sources={props.sources}
        sourceClicked={props.onSourceClicked}
        addSource={props.onAddSource}
        sourceDelete={props.onSourceDelete}
        logoClicked={props.onLogoClicked}
        searchSubmit={props.onSearchSubmit}
      />
      {props.children}
    </div>
  );
};

export default Layout;
