import React from 'react'
import styles from "./TestimonialCard.module.css";
// import profile from "../../assets/profile.png"

const TestimonialCard = ({name, details, profile, rating, feedback}) => {
  return (
    <div className={`${styles.card} bg-white`}>
      <p>{rating}</p>
      <p>{feedback}</p>
      <div className='d-flex'>
        <img src={profile} className={`${styles.profile}`} alt="profile"/>
        <div className={`${styles.profileDetails}`}>
            <p className='fw-bold'>{name}</p>
            <p>{details}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
