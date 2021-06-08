import React, { useEffect, useContext, useRef } from "react";
import classes from "./Search.module.css";
import TorrentContext from "../../store/torrent-context";
import { useHistory, useLocation } from "react-router-dom";

const Search = () => {
  // const [searchInput, setSearch] = useState("");
  const inputRef = useRef();
  const torrentCtx = useContext(TorrentContext);
  const history = useHistory();
  const location = useLocation();

  console.log(location);
  useEffect(() => {
    inputRef.current.value = torrentCtx.search;
  }, [torrentCtx.search]);
  const querParams = new URLSearchParams(location.search);
  const category = querParams.get("cat");

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    if (category === null) {
      history.push("/?search=" + inputRef.current.value.trim());
    } else {
      history.push(
        "/?cat=" + category + "&search=" + inputRef.current.value.trim()
      );
    }

    // torrentCtx.onSearchSubmit(inputRef.current.value.trim());
  };

  // const searchInputHandler =(event)=>{
  //   setSearch(event.target.value)
  // }
  return (
    <div>
      <form onSubmit={searchSubmitHandler}>
        <button type="submit" className={classes.SearchSubmit}>
          <i className="fas fa-search"></i>
        </button>
        <input
          className={classes.Input}
          type="text"
          placeholder="Search..."
          ref={inputRef}
        />
      </form>
    </div>
  );
};

export default Search;

//wit use state

// const Search = (props) => {

//   console.log('sdkjfb')
//   const [searchInput, setSearch] = useState("");

//   const searchSubmitHandler = (event) => {
//     event.preventDefault();
//     console.log(searchInput)
//   };

//   const searchInputHandler =(event)=>{
//     setSearch(event.target.value)
//   }
//   return (
//     <form onSubmit={searchSubmitHandler}>
//       <input type="text" placeholder="Search" onChange={searchInputHandler} value={searchInput} />
//     </form>
//   );
// };

// export default Search;
