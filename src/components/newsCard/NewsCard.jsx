import React from "react";
import styles from "./NewsCard.module.css";
import defaultimg from "../../assets/defaultimg.png";
const NewsCard = ({ title, url, urlToImage, content }) => {
  return (
    <div className={styles.card}>
      <img src={urlToImage ? urlToImage : defaultimg} alt="news" />
      <div className={styles.cardDetail}>
        <h3>{title}</h3>
        <p>{content}</p>
        <div className={styles.a}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
