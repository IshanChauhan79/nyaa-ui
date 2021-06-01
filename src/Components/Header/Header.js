import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import QuickSearch from "./QuickSearch/QuickSearch";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.Header}>
      <div className={classes.TopHeaderBar}>
        <Logo />
        <Search />
      </div>
      <QuickSearch />
    </header>
  );
};

export default Header;
