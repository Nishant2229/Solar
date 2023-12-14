import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import RegistrationModal from "./RegistrationModal/RegistrationModal";

import banner1 from "../../../Assests/HomeLogos/banner1.png";
import banner2 from "../../../Assests/HomeLogos/banner2.png";
import banner3 from "../../../Assests/HomeLogos/banner3.jpg";
import banner4 from "../../../Assests/HomeLogos/banner4.jpg";
import banner5 from "../../../Assests/HomeLogos/banner5.jpg";
import banner6 from "../../../Assests/HomeLogos/banner6.jpg";
import styles from "./Home.module.css";

function Home() {
  const { t } = useTranslation("translation");

  const images = useMemo(
    () => [banner1, banner2, banner3, banner4, banner5, banner6],
    []
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  const registerHandler = () => {
    setShowRegistrationModal(true);
  };

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(sliderInterval);
    };
  }, [images]);

  let content = null;
  if (currentImageIndex === 0) {
    content = (
      <div className={styles.content}>
        <h1 className={styles.overlayText}>{t("CM")}</h1>
      </div>
    );
  } else if (currentImageIndex === 1) {
    content = (
      <div className={styles.content}>
        <h1 className={styles.overlayText}>{t("MAYOR")}</h1>
      </div>
    );
  }

  const currentImage = images[currentImageIndex];

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img
          src={currentImage}
          alt="Background"
          className={styles.backgroundImage}
        />
      </div>
      <button className={styles.registrationButton} onClick={registerHandler}>
        {t("REGISTER")}
      </button>
      {content}

      {showRegistrationModal && (
        <RegistrationModal onClose={() => setShowRegistrationModal(false)} />
      )}
    </div>
  );
}

export default Home;
