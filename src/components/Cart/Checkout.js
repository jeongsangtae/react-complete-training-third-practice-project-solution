import React, { useRef } from "react";
import classes from "./Checkout.module.css";

const Chechout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  // const nameIsValid = nameInput.trim() === "";
  // const streetIsValid = streetInput.trim() === "";
  // const postalIsValid = postalInput.trim().length !== 5;
  // const cityIsValid = cityInput.trim() === "";

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(nameInput, streetInput, postalInput, cityInput);

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    props.onConfirm({
      name: nameInput,
      street: streetInput,
      postalCode: postalInput,
      city: cityInput,
    });
  };

  const nameInputValid = nameIsValid ? classes.invalid : "";
  const streetInputValid = streetIsValid ? classes.invalid : "";
  const postalInputValid = postalIsValid ? classes.invalid : "";
  const cityInputValid = cityIsValid ? classes.invalid : "";

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={`${classes.control} ${nameInputValid}`}>
        <label htmlFor="username">Your Name</label>
        <input type="text" id="username" value={nameInput} ref={nameInputRef} />
        {nameInputValid && <p>Name is not empty</p>}
      </div>
      <div className={`${classes.control} ${streetInputValid}`}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={streetInput}
          ref={streetInputRef}
        />
        {streetInputValid && <p>Street is not empty</p>}
      </div>
      <div className={`${classes.control} ${postalInputValid}`}>
        <label htmlFor="post-code">Postal Code</label>
        <input
          type="text"
          id="post-code"
          value={postalInput}
          ref={postalInputRef}
        />
        {postalInputValid && <p>Postal is not empty</p>}
      </div>
      <div className={`${classes.control} ${cityInputValid}`}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" value={cityInput} ref={cityInputRef} />
        {cityInputValid && <p>City is not empty</p>}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Chechout;
