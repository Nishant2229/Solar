import React from "react";
import styles from "./Usp.module.css";
import UspImage1 from "../../../Assests/UspLogos/usp1.png";
import UspImage2 from "../../../Assests/UspLogos/usp2.png";
import UspImage3 from "../../../Assests/UspLogos/usp3.png";

const Usp = () => {
  return (
    <div className={styles.container}>
      <h1>USP's</h1>
      <div className={styles.content}>
        <div className={styles.containerWrapper}>
          <div className={styles.imageContainer}>
            <img src={UspImage1} alt="USP 1" />
          </div>
          <div className={styles.textContainer}>
            <p>
              <strong>Take Control of Your Solar Panel Budget</strong>
              <br /> Planning to switch to solar energy? Take control of your
              budget with the Solar Budget Calculator. Easily estimate the cost
              of installing solar panels and make an informed decision that fits
              your financial goals. Say goodbye to surprises and hello to
              affordable renewable energy.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.containerWrapper}>
          <div className={styles.imageContainer}>
            <img src={UspImage2} alt="USP 2" />
          </div>
          <div className={styles.textContainer}>
            <p>
              <strong>Find Trusted Partner for your Solar Journey</strong>{" "}
              <br />
              Don't waste time searching for reliable solar vendors. With Har
              Ghar solar, easily discover reputable vendors who can help you
              with your sustainable energy journey. From installation to
              maintenance, find the perfect partner for all your solar panel
              needs.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.containerWrapper}>
          <div className={styles.imageContainer}>
            <img src={UspImage3} alt="USP 3" />
          </div>
          <div className={styles.textContainer}>
            <p>
              <strong>Make a Difference with Green Certificate</strong>
              <br />
              Demonstrate your dedication to a greener future by obtaining our
              Green Certification. Showcase your commitment to sustainable
              practices and attract environmentally conscious customers. Join
              the movement towards a cleaner, more sustainable Indore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usp;
