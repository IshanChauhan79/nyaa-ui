import React, { useRef } from "react";

import { useDispatch } from "react-redux";
import { torrentActions } from "../../../store/torrent-slice";
import Backdrop from "../../UI/Backdrop/Backdrop";
import classes from "./AddKeyForm.module.css";

const AddKeyForm = (props) => {
  // const [keyValue, setKeyValue] = useState(null);
  const inputRef = useRef();

  const dispatch = useDispatch();
  const onAddSubmitHandler = (event) => {
    event.preventDefault();
    if (inputRef.current.value.trim() === "") {
      inputRef.current.focus();
      return;
    }
    props.closeBackdrop();
    // add new uploader in the list
    dispatch(
      torrentActions.addUploader({ uploader: inputRef.current.value.trim() })
    );
    // setKeyValue(inputRef.current.value);
  };
  // console.log(keyValue);
  return (
    <div className={classes.AddKeyForm}>
      <Backdrop clickHandler={props.backdropClickHandler} />
      <form className={classes.Form} onSubmit={onAddSubmitHandler}>
        <input
          type="text"
          placeholder="Source Name"
          className={classes.AddInput}
          ref={inputRef}
        />
        <button type="submit" className={classes.AddSource}>
          Add Source
        </button>
      </form>
    </div>
  );
};
export default AddKeyForm;
