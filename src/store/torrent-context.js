import React from "react";

const TorrentContext = React.createContext({
  uploaders: [],
  search: "",
  uploaderSelected: "",
  onUploaderClicked: () => {},
  onAddUploader: () => {},
  onUploaderDelete: () => {},
  onLogoClicked: () => {},
  onSearchSubmit: () => {},
});
export default TorrentContext;
