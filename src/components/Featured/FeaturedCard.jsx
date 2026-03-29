import React from "react";
import { useState } from "react";
import styles from "./FeaturedCard.module.css";
import Location from "../../assets/Location.png";
import Favourite from "../../assets/Favourite.png";

const FeaturedCard = ({ image, title, location, price, rating }) => {

  const [liked, setLiked] = useState(false);

  return (
    <div className={`card ${styles.card} border-0 shadow-sm w-100`}>
      
      {/* Image Section */}
      <div className={`position-relative ${styles.imgContainer}`}>
        <img
          src={image}
          alt={title}
          className="w-100 rounded-4"
        />

        <button  onClick={() => setLiked(!liked)}
          className={`position-absolute d-flex align-items-center justify-content-center border-0 rounded-circle ${styles.favBtn}`}
        >
          <img src={Favourite} alt="fav" />
        </button>
      </div>

      {/* Content */}
      <div className={`${styles.content} p-2 p-md-3`}>
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="mb-0 fw-semibold text-dark text-truncate">
            {title}
          </h6>
          <span className={`badge ${styles.rating}`}>
            {rating}
          </span>
        </div>

        <div className={`d-flex align-items-center gap-1 mt-1 text-secondary small ${styles.locationContainer}`}>
          <img src={Location} alt="location" />
          <span>{location}</span>
        </div>

        <p className={`mt-2 fw-semibold mb-0 text-dark ${styles.price}`}>
          ₹{price} <span className={styles.night}>/ night</span>
        </p>
      </div>

    </div>
  );
};

export default FeaturedCard;