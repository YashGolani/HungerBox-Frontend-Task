import React, { Fragment, useState } from "react";
import Form from "../Form/Form";
import styles from "./Header.module.css";

function Header() {
  const [form, setForm] = useState(false);

  const addForm = () => {
    setForm(!form);
  };
  return (
    <Fragment>
      <header className={styles.container}>
        <div className={styles.main}>
          <h5 className={styles.toolbar}>Manage Employee Page</h5>
          {!form ? (
            <button className={styles.button} onClick={addForm}>
              Add Contact
            </button>
          ) : null}
        </div>
      </header>
      {form ? (
        <div className={styles.form_mid}>
          <Form />
        </div>
      ) : (
        <p className={styles.for_mid}>Create on Add to create new contact</p>
      )}
    </Fragment>
  );
}

export default Header;
