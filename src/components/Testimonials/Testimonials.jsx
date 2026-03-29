import React from 'react'
import styles from "./Testimonials.module.css"
import TestimonialCard from './TestimonialCard'
import { testimonial } from '../../data/testimonials'

const Testimonials = () => {

  

  return (
    <section className={`${styles.section}`}>
      <div className="container">

        <h2 className={`${styles.heading} text-center`}>
          Traveler Reviews
        </h2>

        {/* ✅ RESPONSIVE GRID */}
        <div className="row g-4">
          {testimonial.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4">
              <TestimonialCard {...item} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials