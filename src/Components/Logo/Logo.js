import React, { useContext } from "react";
import classes from "./Logo.module.css";
import TorrentContext from "../../store/torrent-context";
const Logo = () => {
  const torrentCtx = useContext(TorrentContext);
  return (
    <div className={classes.Logo} onClick={torrentCtx.onLogoClicked}>
      Nyaa
    </div>
  );
};

export default Logo;
