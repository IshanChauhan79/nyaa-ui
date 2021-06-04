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
        sourceSelcted={props.sourceSelcted}
        sources={props.sources}
        sourceClicked={props.sourceClicked}
        addSource={props.addSource}
        sourceDelete={props.sourceDelete}
      />
    </header>
  );
};

export default Header;
