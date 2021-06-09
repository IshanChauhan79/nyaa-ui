import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const TorrentContext = React.createContext({
  urlParams: {},
  onsourceClickedHandler: () => {},
  uploaders: [],
  search: "",
  uploaderSelected: "",
  onUploaderClicked: () => {},
  onAddUploader: () => {},
  onUploaderDelete: () => {},
  onLogoClicked: () => {},
  onSearchSubmit: () => {},
});
export const TorrentContextProvider = (props) => {
  const [urlParams, setUrlParams] = useState({
    uploaderSelected: "",
    search: "",
    sourceSelcted: "",
  });
  const [uploaders, setUploaders] = useState([
    "Golumpa",
    "Erai-raws",
    "SubsPlease",
  ]);
  // const history= useHistory();
  const location = useLocation();

  const querParams = new URLSearchParams(location.search);
  const category = querParams.get("cat");
  const searchParam = querParams.get("search");

  console.log(searchParam);
  console.log(category);

  // console.log(urlParams.sourceSelcted);
  useEffect(() => {
    if (localStorage.getItem("uploaderList")) {
      console.log(localStorage.getItem("uploaderList"));
      setUploaders((prev) =>
        prev.concat(localStorage.getItem("uploaderList").split(","))
      );
    }
  }, []);
  useEffect(() => {
    setUrlParams((prev) => ({
      ...prev,
      sourceSelcted: category === null ? "" : category,
      search: searchParam === null ? "" : searchParam,
    }));
    // }
  }, [category, searchParam]);

  useEffect(() => {
    // console.log("local storage update")
    let data = uploaders.slice(3);
    localStorage.setItem("uploaderList", data);
  }, [uploaders]);

  const onUploaderClickedHandler = (uploader) => {
    if (urlParams.uploaderSelected === uploader) {
      setUrlParams({ ...urlParams, uploaderSelected: "" });
      return;
    }
    setUrlParams({ ...urlParams, uploaderSelected: uploader });
  };

  const onUploaderDeleteHandler = (onUploaderClicked) => {
    if (urlParams.uploaderSelected === onUploaderClicked) {
      setUrlParams({ ...urlParams, uploaderSelected: "" });
    }
    setUploaders(
      uploaders.filter((uploader) => uploader !== onUploaderClicked)
    );
  };

  const onAddUploaderHandler = (uploader) => {
    !uploaders.includes(uploader) &&
      setUploaders((prev) => [...prev, uploader]);
  };

  const onSearchSubmitHandler = (search) => {
    setUrlParams({ ...urlParams, search: search });
  };
  const onLogoClickedHandler = () => {
    setUrlParams({ uploaderSelected: "", search: "", sourceSelcted: "" });
  };
  const onsourceClickedHandler = (source) => {
    setUrlParams({ ...urlParams, sourceSelcted: source });
  };

  return (
    <TorrentContext.Provider
      value={{
        urlParams: urlParams,
        onsourceClickedHandler: onsourceClickedHandler,
        uploaders: uploaders,
        uploaderSelected: urlParams.uploaderSelected,
        search: urlParams.search,
        onUploaderClicked: onUploaderClickedHandler,
        onAddUploader: onAddUploaderHandler,
        onUploaderDelete: onUploaderDeleteHandler,
        onLogoClicked: onLogoClickedHandler,
        onSearchSubmit: onSearchSubmitHandler,
      }}
    >
      {props.children}
    </TorrentContext.Provider>
  );
};
export default TorrentContext;
