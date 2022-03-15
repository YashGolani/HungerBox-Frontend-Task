import React, { Fragment, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactCard from "../ContactCard/ContactCard";
import styles from "./Form.module.css";

function Form() {
  let [inputs, setInputs] = useState([]);
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneNumberRef = useRef("");
  const passData = (event) => {
    event.preventDefault();

    const newContact = {
      id: uuidv4(),
      name: nameRef.current.value,
      mobile: phoneNumberRef.current.value,
      email: emailRef.current.value,
    };
    setInputs((curr) => [...curr, newContact]);
    nameRef.current.value = "";
    phoneNumberRef.current.value = "";
    emailRef.current.value = "";
  };

  const handleDeleteClick = (id) => {
    console.log("first");
    inputs = inputs.filter((item) => {
      return item.id !== id;
    });
    setInputs(inputs);
  };

  return (
    <Fragment>
      <div className={styles.main_div}>
        <form>
          <p className={styles.message}>Employee Form</p>
          <div className={styles.user_input_wrp}>
            <br />
            <input
              type="text"
              name="name"
              required="required"
              ref={nameRef}
              className={styles.inputText}
            />
            <span className={styles.floating_label}>Your Name</span>
          </div>
          <br />
          <div className={styles.user_input_wrp}>
            <br />
            <input
              type="email"
              name="email"
              required="required"
              ref={emailRef}
              className={styles.inputText}
            />
            <span className={styles.floating_label}>Your Email</span>
          </div>
          <br />
          <div className={styles.user_input_wrp}>
            <br />
            <input
              type="number"
              name="mobile"
              required="required"
              ref={phoneNumberRef}
              className={styles.inputText}
            />
            <span className={styles.floating_label}>Your Number</span>
          </div>
          <button onClick={passData} className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
      {inputs.map((item) => {
        return (
          <ContactCard
            keys={item.id}
            name={item.name}
            email={item.email}
            mobile={item.mobile}
            handleDeleteClick={handleDeleteClick}
          />
        );
      })}
    </Fragment>
  );
}

export default Form;
