import React from "react";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    id: 1,
    title: "Pick a Service",
    desc: "Choose from car rentals, premium hotels, or trending local events.",
  },
  {
    id: 2,
    title: "Compare & Choose",
    desc: "View real-time availability and transparent pricing for all services.",
  },
  {
    id: 3,
    title: "Book Instantly",
    desc: "Secure payment and instant confirmation delivered to your mobile.",
  },
];

const HowItWorks = () => {
  return (
    <section className={`${styles.section} container`}>
      
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className={styles.heading}>How it Works</h2>
        <p className={styles.subtext}>
          Book your entire Telangana trip in three simple steps using our premium platform.
        </p>
      </div>

      {/* Steps */}
      <div className="row text-center">
        {steps.map((step) => (
          <div key={step.id} className="col-12 col-md-4 mb-4">
            
            <div className={styles.stepBox}>
              <div className={styles.icon}>{step.id}</div>

              <h5 className="mt-3 fw-semibold">{step.title}</h5>
              <p className={styles.desc}>{step.desc}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default HowItWorks;