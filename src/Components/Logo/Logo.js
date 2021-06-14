import React from "react";
import classes from "./Logo.module.css";
import { useHistory } from "react-router-dom";

const Logo = () => {

  const history = useHistory();
  const logoClicked = () => {
    history.push("/");
  };

  return (
    <div className={classes.Logo} onClick={logoClicked}>
      Nyaa
    </div>
  );
};

export default Logo;
