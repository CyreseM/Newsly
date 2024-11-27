import React from "react";
import styles from "../spinner/Spinner.module.css";
const Spinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Spinner;
