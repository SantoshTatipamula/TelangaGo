import React from 'react'
import styles from "./Services.module.css"
import { servicesData } from "../../data/services"

const Services = () => {


  return (
    <section className={`${styles.container}`}>
    {servicesData.map((item) => (
      
        <div key={item.id} className={`${styles.card}`}>
          <div className={`${styles.cardImage}`} style={{ backgroundColor: item.background }} >
            <img src={item.image} alt="" />
          </div>
            <p className={`${styles.cardTitle}`}>{item.title}</p>
        </div>
    ))}
    </section>
  )
}

export default Services
