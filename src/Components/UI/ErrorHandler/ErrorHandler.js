import React from "react";
import { Link } from "react-router-dom";
import  classes  from "./ErrorHandler.module.css";

const ErrorHandler = () => {
  return (
    <div className={classes.ErrorHandler}>
      <h2>Something Went Wrong...</h2>
      <p><Link to='/'>Home</Link></p>
    </div>
  );
};
export default ErrorHandler;
