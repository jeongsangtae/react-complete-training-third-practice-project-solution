import React, { useState } from "react";
import classes from "./Checkout.module.css";

const Chechout = (props) => {
  return (
    <form>
      <div className={classes.control}>
        <label htmlFor="username">Your Name</label>
        <input type="text" id="username" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="post-code">Postal Code</label>
        <input type="number" id="post-code" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>

      <div className={classes.actions}>
        <button onClick={props.onClose}>Cancel</button>
        <button type="submit" className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Chechout;
