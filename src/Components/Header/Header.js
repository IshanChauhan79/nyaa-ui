import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import QuickSearch from "./QuickSearch/QuickSearch";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.Header}>
      <div className={classes.TopHeaderBar}>
        <Logo logoClicked={props.logoClicked} />
        <Search searchSubmit={props.searchSubmit} />
      </div>
      <QuickSearch
        uploaderSelected={props.uploaderSelected}
        uploaders={props.uploaders}
        uploaderClicked={props.uploaderClicked}
        addUploader={props.addUploader}
        uploaderDelete={props.uploaderDelete}
      />
    </header>
  );
};

export default Header;
