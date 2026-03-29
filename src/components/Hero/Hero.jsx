import React from "react";
import Location from "../../assets/Location.png";
import Mode from "../../assets/Mode.png";
import Search from "../../assets/Search.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={`container-fluid py-5 ${styles.section}`}>
      <div className="container text-center">
        <h1 className={`fw-bold ${styles.heading}`}>
          Discover The Soul of Telangana
        </h1>

        <p className={`mx-auto ${styles.subText}`}>
          Premium bookings for cars, hotels, and events across the historic
          heart of India. Everything you need for the perfect journey.
        </p>

        {/* SEARCH */}
        <div className={styles.searchBox}>
          <div className={styles.searchContainer}>
            {/* WHERE */}
            <div className={styles.field}>
              <img src={Location} alt="" />
              <div>
                <p>WHERE TO?</p>
                <input placeholder="Hyderabad, Warangal..." />
              </div>
            </div>

            {/* SERVICE */}
            <div className={`${styles.field} ${styles.border}`}>
              <img src={Mode} alt="" />
              <div>
                <p>SERVICE</p>
                <select>
                  <option>Select Service</option>
                </select>
              </div>
            </div>

            {/* DATE */}
            <div className={`${styles.field} ${styles.border}`}>
              <div>
                <p>WHEN</p>
                <input type="date" />
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <button className={styles.searchBtn}>
            <img src={Search} alt="" />
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
