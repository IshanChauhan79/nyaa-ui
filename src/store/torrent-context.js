import React from "react";

const TorrentContext = React.createContext({
  uploaders: [],
  uploaderSelected: "",
  onUploaderClicked: () => {},
  onAddUploader: () => {},
  onUploaderDelete: () => {},
  onLogoClicked: () => {},
  onSearchSubmit: () => {},
});
export default TorrentContext;
