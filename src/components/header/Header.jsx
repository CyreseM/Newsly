import React, { useState } from "react";
import styles from "./Header.module.css";
import NavBar from "../navbar/NavBar";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    navigate("/search", { state: search });
  };
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>SKY NEWS</h1>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.search}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search news..."
          />
          <button type="submit">SEARCH</button>
        </form>
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
