import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { useTranslation } from "react-i18next";
import { FaBars } from "react-icons/fa";
import logo1 from "../../../Assests/NavLogos/logo1.png";
import logo2 from "../../../Assests/NavLogos/logo2.png";
import logo3 from "../../../Assests/NavLogos/logo3.png";
import logo4 from "../../../Assests/NavLogos/logo4.png";
import logo5 from "../../../Assests/NavLogos/logo5.png";
import logo6 from "../../../Assests/NavLogos/logo6.png";
import logo7 from "../../../Assests/NavLogos/logo7.png";
import MobileLogo from "../../../Assests/NavLogos/MobileLogo.png";
import loginArrow1 from "../../../Assests/NavLogos/loginArrow1.png";
import loginArrow2 from "../../../Assests/NavLogos/loginArrow2.png";

function Navbar() {
  const { t, i18n } = useTranslation("translation");
  const [isHindi, setIsHindi] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = () => {
    const newLanguage = isHindi ? "en" : "hi";
    i18n.changeLanguage(newLanguage);
    setIsHindi(!isHindi);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function LoginDropdown() {
    const { t } = useTranslation("translation");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownClick = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    return (
      <div
        className={`${styles.loginDropdown} ${
          isDropdownOpen ? styles.highlighted : ""
        }`}
      >
        <div className={styles.loginContainer}>
          <img src={loginArrow1} alt="Login Arrow 1" className={styles.arrow} />
          <button className={styles.loginButton} onClick={handleDropdownClick}>
            {t("LOGIN")}
          </button>
          <img src={loginArrow2} alt="Login Arrow 2" className={styles.arrow} />
        </div>
        <div
          className={`${styles.dropdownContent} ${
            isDropdownOpen ? styles.show : ""
          }`}
        >
          <a href="/citizenlogin">{t("CITIZEN")}</a>
          <a href="/vendorlogin">{t("VENDOR")}</a>
        </div>
      </div>
    );
  }

  return (
    <nav className={styles.navbar}>
      <img src={MobileLogo} alt="logo" className={styles.MobileLogo} />
      <div className={styles.div1}>
        <img src={logo1} alt="logo" className={styles.logo} />
        <img src={logo2} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.div2}>
        <img src={logo3} alt="logo" className={styles.logo} />
        <img src={logo4} alt="logo" className={styles.logo} />
        <img src={logo5} alt="logo" className={styles.logo} />
        <img src={logo6} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.div3}>
        <img src={logo7} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.actions}>
        <button onClick={changeLanguage}>{t("LANGUAGE")}</button>
      </div>
      <LoginDropdown />
      <div className={styles.hamburgerMenu} onClick={toggleMenu}>
        <FaBars />
      </div>
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <button onClick={changeLanguage}>{t("LANGUAGE")}</button>
          <a href="/citizenlogin">{t("CITIZEN")}</a>
          <a href="/vendorlogin">{t("VENDOR")}</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
