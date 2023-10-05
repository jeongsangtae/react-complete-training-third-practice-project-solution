import React, { useState } from "react";
import classes from "./Checkout.module.css";

const Chechout = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [streetInput, setStreetInput] = useState("");
  const [postalInput, setPostalInput] = useState("");
  const [cityInput, setCityInput] = useState("");

  const nameIsValid = nameInput.trim() === "";
  const streetIsValid = streetInput.trim() === "";
  const postalIsValid = postalInput.trim().length !== 5;
  const cityIsValid = cityInput.trim() === "";

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(nameInput, streetInput, postalInput, cityInput);

    setNameInput("");
    setStreetInput("");
    setPostalInput("");
    setCityInput("");

    props.onConfirm({
      name: nameInput,
      street: streetInput,
      postalCode: postalInput,
      city: cityInput,
    });
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

  const nameInputValid = nameIsValid ? classes.invalid : "";
  const streetInputValid = streetIsValid ? classes.invalid : "";
  const postalInputValid = postalIsValid ? classes.invalid : "";
  const cityInputValid = cityIsValid ? classes.invalid : "";

  return (
    <form onSubmit={submitHandler}>
      <div className={`${classes.control} ${nameInputValid}`}>
        <label htmlFor="username">Your Name</label>
        <input
          type="text"
          id="username"
          value={nameInput}
          onChange={nameHandler}
        />
        {nameInputValid && <p>Name is not empty</p>}
      </div>
      <div className={`${classes.control} ${streetInputValid}`}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={streetInput}
          onChange={streetHandler}
        />
        {streetInputValid && <p>Street is not empty</p>}
      </div>
      <div className={`${classes.control} ${postalInputValid}`}>
        <label htmlFor="post-code">Postal Code</label>
        <input
          type="text"
          id="post-code"
          value={postalInput}
          onChange={postalHandler}
        />
        {postalInputValid && <p>Postal is not empty</p>}
      </div>
      <div className={`${classes.control} ${cityInputValid}`}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" value={cityInput} onChange={cityHandler} />
        {cityInputValid && <p>City is not empty</p>}
      </div>

      <div className={classes.actions}>
        <button onClick={props.onClose}>Cancel</button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Chechout;
