
const magnetUrl = (search, source, uploader) => {
  // axios.get("https://ishan1plus1-eval-prod.apigee.net/nyaa/"+"?f=0&c=1_2&q=golumpa+my+hero",{
  // axios.get("https://ishan1plus1-eval-prod.apigee.net/nyaa/"+"?f=0&c=1_2&q=golumpa",{
  // axios.get(url+"?c=1_2",{

  let finalParam = "";
  let searchUrl = "";
  let uploaderUrl = "";
  let sourceUrl = "";
  if(source==="" && uploader ==="" && search===""){
    return "";
  }

  if (source !== "" && search === "" && uploader === "") {
    sourceUrl = "?c=" + source;
    return sourceUrl;
  } else {
    if (uploader !== "") {
      uploaderUrl = uploader.replace(" ", "+");
    }
    if (search !== "") {
      searchUrl = search.replace(" ", "+");
    }
    if (uploaderUrl !== "" && searchUrl !== "") {
      finalParam = "q=" + uploaderUrl + "+" + searchUrl;
    } else if (uploaderUrl !== "") {
      finalParam = "q=" + uploaderUrl;
    } else if(searchUrl!=="") {
      finalParam = "q=" + searchUrl;
    }

    if (source !== "") {
      sourceUrl = "?f=0&c=" + source;
      finalParam = sourceUrl + "&" + finalParam;
      return finalParam;
    } else {
      finalParam = "?" + finalParam;
      return finalParam;
    }

  }

//   console.log(search, uploader, source);
//   console.log(finalParam);
//   return finalParam;
};
export default magnetUrl;
