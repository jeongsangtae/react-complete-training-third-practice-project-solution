import React, { useState } from "react";
import classes from "./Checkout.module.css";

const Chechout = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [streetInput, setStreetInput] = useState("");
  const [postalInput, setPostalInput] = useState("");
  const [cityInput, setCityInput] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(nameInput, streetInput, postalInput, cityInput);

    setNameInput("");
    setStreetInput("");
    setPostalInput("");
    setCityInput("");
  };

  const nameHandler = (event) => {
    setNameInput(event.target.value);
  };

  const streetHandler = (event) => {
    setStreetInput(event.target.value);
  };

  const postalHandler = (event) => {
    setPostalInput(event.target.value);
  };

  const cityHandler = (event) => {
    setCityInput(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="username">Your Name</label>
        <input
          type="text"
          id="username"
          value={nameInput}
          onChange={nameHandler}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={streetInput}
          onChange={streetHandler}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="post-code">Postal Code</label>
        <input
          type="text"
          id="post-code"
          value={postalInput}
          onChange={postalHandler}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" value={cityInput} onChange={cityHandler} />
      </div>

      <div className={classes.actions}>
        <button onClick={props.onClose}>Cancel</button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Chechout;
