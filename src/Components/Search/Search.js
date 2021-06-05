import React, { useContext, useRef } from "react";
import classes from "./Search.module.css";
import TorrentContext from "../../store/torrent-context";

const Search = () => {
  // const [searchInput, setSearch] = useState("");
  const inputRef = useRef();
  const torrentCtx = useContext(TorrentContext);

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    torrentCtx.onSearchSubmit(inputRef.current.value.trim());
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
