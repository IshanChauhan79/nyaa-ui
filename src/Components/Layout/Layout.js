import React from "react";
import Header from "../Header/Header";

// import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div>
      <Header
        uploaderSelected={props.uploaderSelected}
        uploaders={props.uploaders}
        uploaderClicked={props.onUploaderClicked}
        addUploader={props.onAddUploader}
        uploaderDelete={props.onUploaderDelete}
        logoClicked={props.onLogoClicked}
        searchSubmit={props.onSearchSubmit}
      />
      {props.children}
    </div>
  );
};

export default Layout;
