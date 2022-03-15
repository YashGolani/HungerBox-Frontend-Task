import React from "react";
import styles from "./Contact.module.css";

function ContactCard({
  name,
  mobile,
  email,
  keys,
  handleDeleteClick,
  changeContactCard,
}) {
  return (
    <div isOpen={changeContactCard} className={styles.container}>
      <div className={styles.root}>
        <div className={styles.primary}>
          <div>
            <p className={styles.preDefined}>Name</p>
            <p className={styles.defined}>{name}</p>
          </div>
          <div className={styles.section}>
            <p className={styles.preDefined}>Mobile No.</p>
            <p className={styles.defined}>{mobile}</p>
          </div>
        </div>
        <div className={styles.secondary}>
          <div>
            <p className={styles.preDefined}>Email</p>
            <p className={styles.defined}>{email}</p>
          </div>
          <div>
            <button
              className={styles.button}
              onClick={() => handleDeleteClick(keys)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
