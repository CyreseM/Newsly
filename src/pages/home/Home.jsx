import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Slider from "../../components/slider/Slider.jsx";
import Spinner from "../../components/spinner/Spinner.jsx";
import NewsCard from "../../components/newsCard/NewsCard.jsx";
import axios from "axios";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import ChangeTheme from "../../components/theme/ChangeTheme.jsx";
import { useContext } from "react";
const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY;
  const theme = useContext(ThemeContext);
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  const getNews = async () => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      setNews(data.articles);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNews();
  }, []);

  const sliderNews = news?.splice(0, 3);
  return (
    <div className={styles.container}>
      <ChangeTheme />
      <div className={styles.slider}>
        <Slider sliderNews={sliderNews} />
      </div>
      <div className={styles.news}>
        {loading && <Spinner />}
        {news?.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
