import React from "react";
import styles from "./Header.module.css";
import NavBar from "../navbar/NavBar";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>SKY NEWS</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search news..." />
          <button type="submit">SEARCH</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
