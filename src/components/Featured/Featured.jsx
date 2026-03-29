import React, { useState,useEffect } from "react";
import FeaturedCard from "./FeaturedCard";
import Left from "../../assets/Left.png";
import Right from "../../assets/Right.png";
import styles from "./Featured.module.css";

import { featuredData } from "../../data/featured";



const Featured = () => {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setCardsPerView(1);
      } else if (window.innerWidth < 992) {
        setCardsPerView(2);
      } else {
        setCardsPerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    if (index < featuredData.length - cardsPerView) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className={`${styles.section} container`}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center">
        <h2>Featured Premium Stays</h2>

        <div className={styles.btnContainer}>
          <button onClick={prev} className={styles.leftBtn}>
            <img src={Left} alt="left" />
          </button>
          <button onClick={next} className={styles.rightBtn}>
            <img src={Right} alt="right" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className={styles.sliderWrapper}>
        <div
          className={styles.slider}
          style={{
            transform: `translateX(-${index * (100 / cardsPerView)}%)`,
          }}
        >
          {featuredData.map((item) => (
            <div key={item.id} className={styles.cardWrapper}>
              <FeaturedCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
