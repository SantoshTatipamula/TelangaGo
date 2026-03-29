import React from "react";
import styles from "./Destinations.module.css";
import { data } from "../../data/destinations";




const Destinations = () => {
  return (
    <section className={`${styles.section} container`}>

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <p className={styles.smallTitle}>EXPLORE MORE</p>
          <h2 className={styles.heading}>Popular Telangana Destinations</h2>
        </div>

        <a href="#" className={styles.viewAll}>
          View All →
        </a>
      </div>

      {/* Cards */}
      <div className="row g-3">
        {data.map((item) => (
          <div key={item.id} className="col-12 col-sm-6 col-md-3">
            <div className={styles.card}>
              
              <img src={item.image} alt={item.title} />

              {/* Overlay */}
              <div className={styles.overlay}>
                <h5>{item.title}</h5>
                <p>{item.subtitle}</p>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Destinations;