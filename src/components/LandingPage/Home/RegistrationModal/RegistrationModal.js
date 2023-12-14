import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import citizenLogo from "../../../../Assests/AboutSchemesLogos/citizenLogo.png";
import vendorLogo from "../../../../Assests/AboutSchemesLogos/vendorLogo.png";
import AuthContext from "../../../../Context/AuthContext";
import styles from "./RegistrationModal.module.css";

function RegistrationModal({ onClose }) {
  const { t } = useTranslation("translation");
  const navigate = useNavigate();
  const AuthCtx = useContext(AuthContext);

  const handleCitizenRegistration = () => {
    console.log("Register as Citizen");
    AuthCtx.updateUserType("CITIZEN");
    navigate("/citizenregistration");
  };

  const handleVendorRegistration = () => {
    console.log("Register as Vendor");
    AuthCtx.updateUserType("VENDOR");
    navigate("/vendorregistration");
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.options}>
          <div
            className={styles.registrationOption}
            onClick={handleCitizenRegistration}
          >
            <div className={styles.registrationContent}>
              <img src={citizenLogo} alt="Citizen Logo" />
              <span>{t("CITIZEN")}</span>
            </div>
          </div>
          <div
            className={styles.registrationOption}
            onClick={handleVendorRegistration}
          >
            <div className={styles.registrationContent}>
              <img src={vendorLogo} alt="Vendor Logo" />
              <span>{t("VENDOR")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationModal;
