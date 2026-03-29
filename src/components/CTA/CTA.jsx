import React from 'react'
import styles from "./CTA.module.css"

const CTA = () => {
  return (
    <section className={`${styles.section} container`}>
        <div className={`${styles.sectionContainer} text-white d-flex flex-column align-items-center justify-content-center`}>
          <h2 className='fw-bold'>Unlock Exclusive Deals</h2>
          <p className='text-center fw-400 mt-2'>
            Join 50,000+ travelers getting weekly updates on new 
            destinations <br></br>and member-only discounts.
          </p>
          <div className={`${styles.inputContainer} mt-4`}>
            <input type="email" placeholder="your email address"></input>
            <button className={`${styles.btn}`}>Subscribe <br></br>Now</button>
          </div>
        </div>
      </section>
  )
}

export default CTA
