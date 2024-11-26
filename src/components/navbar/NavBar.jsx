import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <ul className={styles.topUl}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <p>Categories</p>
        <ul className={styles.bottomUl}>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "business" } })
            }
          >
            Business
          </li>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "general" } })
            }
          >
            General
          </li>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "health" } })
            }
          >
            Health
          </li>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "science" } })
            }
          >
            Science
          </li>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "sports" } })
            }
          >
            Sports
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default NavBar;
