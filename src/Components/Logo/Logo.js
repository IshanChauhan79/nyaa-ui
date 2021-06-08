import React, { useContext } from "react";
import classes from "./Logo.module.css";
import TorrentContext from "../../store/torrent-context";
import { useHistory } from "react-router-dom";

const Logo = () => {
  const torrentCtx = useContext(TorrentContext);
  const history = useHistory();
  const logoClicked = () => {
    history.push("/");
    torrentCtx.onLogoClicked();
  };

  return (
    <div className={classes.Logo} onClick={logoClicked}>
      Nyaa
    </div>
  );
};

export default Logo;
