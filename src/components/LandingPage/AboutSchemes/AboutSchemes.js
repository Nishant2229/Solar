import React from "react";
import styles from "./AboutSchemes.module.css";

import citizen from "../../../Assests/AboutSchemesLogos/citizen.png";
import vendor from "../../../Assests/AboutSchemesLogos/vendor.png";
import notification from "../../../Assests/AboutSchemesLogos/notification.png";

const AboutSchemes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.mainTitle}>
          <h1>About Schemes</h1>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={citizen} alt="" />
            <h2>Citizen</h2>
            <p>
              Join the solar revolution with Har Ghar Solar and become an active
              participant in creating a sustainable future. Take control of your
              energy requirements, save on costs, and make a positive impact on
              the environment.
            </p>
          </div>
          <div className={styles.card}>
            <img src={vendor} alt="" />
            <h2>Vendor</h2>
            <p>
              Join the solar revolution with Har Ghar Solar and become a part of
              it as a vendor. Expand your business, connect with a larger
              customer base, and pave the path towards sustainable energy
              solutions.
            </p>
          </div>
          <div className={`${styles.card} ${styles["notification-card"]}`}>
            <div className={styles["notification-title"]}>
              <img src={notification} alt="" />
              <h2>Notifications</h2>
            </div>
            <div className={styles["notification-content"]}>
              <p>
                Updates on Solar will appear here! Updates on Solar will appear
                here! Updates on Solar will appear here! Updates on Solar will
                appear here! Updates on Solar will appear here! Updates on Solar
                will appear here! Updates on Solar will appear here! Updates on
                Solar will appear here! Updates on Solar will appear here!
                Updates on Solar will appear here! Updates on Solar will appear
                here! Updates on Solar will appear here! Updates on Solar will
                appear here! Updates on Solar will appear here! Updates on Solar
                will appear here! Updates on Solar will appear here! Updates on
                Solar will appear here! Updates on Solar will appear here!
                Updates on Solar will appear here! Updates on Solar will appear
                here! Updates on Solar will appear here! Updates on Solar will
                appear here! Updates on Solar will appear here! Updates on Solar
                will appear here! Updates on Solar will appear here! Updates on
                Solar will appear here! Updates on Solar will appear here!
                Updates on Solar will appear here! Updates on Solar will appear
                here! Updates on Solar will appear here! Updates on Solar will
                appear here! Updates on Solar will appear here! Updates on Solar
                will appear here! Updates on Solar will appear here! Updates on
                Solar will appear here! Updates on Solar will appear here!
                Updates on Solar will appear here! Updates on Solar will appear
                here! Updates on Solar will appear here! Updates on Solar will
                appear here! Updates on Solar will appear here! Updates on Solar
                will appear here! Updates on Solar will appear here! Updates on
                Solar will appear here! Updates on Solar will appear here!
                Updates on Solar will appear here! Updates on Solar will appear
                here! Updates on Solar will appear here! Updates on Solar will
                appear here! Updates on Solar will appear here! Updates on Solar
                will appear here! Updates on Solar will appear here! Updates on
                Solar will appear here! Updates on Solar will appear here!
                Updates on Solar will appear here! Updates on Solar will appear
                here! Updates on Solar will appear here! Updates on Solar will
                appear here! Updates on Solar will appear here! Updates on Solar
                will appear here! Updates on Solar will appear here! Updates on
                Solar will appear here! Updates on Solar will appear here!
                Updates on Solar will appear here! Updates on Solar will appear
                here! Updates on Solar will appear here! Updates on Solar will
                appear here! Updates on Solar will appear here! Updates on Solar
                will appear here! Updates on Solar will appear here! Updates on
                Solar will appear here! Updates on Solar will appear here!
                Updates on Solar will appear here! Updates on Solar will appear
                here! Updates on Solar will appear here! Updates on Solar will
                appear here! Updates on Solar will appear here! Updates on Solar
                will appear here! Updates on Solar will appear here! Updates on
                Solar will appear here! Updates on Solar will appear here!
                Updates on Solar will appear here! Updates on Solar will appear
                here! Updates on Solar will appear here! Updates on Solar will
                appear here! Updates on Solar will appear here! Updates on Solar
                will appear here! Updates on Solar will appear here! Updates on
                Solar will appear here! Updates on Solar will appear here!
                Updates on Solar will appear here! Updates on Solar will appear
                here! Updates on Solar will appear here! Updates on Solar will
                appear here! Updates on Solar will appear here! Updates on Solar
                will appear here! Updates on Solar will appear here! Updates on
                Solar will appear here! Updates on Solar will appear here!
                Updates on Solar will appear here! Updates on Solar will appear
                here! Updates on Solar will appear here! Updates on Solar will
                appear here! Updates on Solar will appear here! Updates on Solar
                will appear here! Updates on Solar will appear here!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSchemes;
