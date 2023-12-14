import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import AuthContext from "../../../../../Context/AuthContext";
import styles from "./VerificationModal.module.css";

function VerificationModal({ onClose }) {
  const { t } = useTranslation("translation");
  const navigate = useNavigate();
  const AuthCtx = useContext(AuthContext);
  const citizenFormData = AuthCtx.citizenFormData;
  const vendorFormData = AuthCtx.vendorFormData;
  const contractorId =
    citizenFormData.contractorId || vendorFormData.contractorId;
  const email =
    AuthCtx.userType === "CITIZEN"
      ? citizenFormData.email
      : vendorFormData.email;
  const path = "http://localhost:4000";

  console.log(contractorId);
  console.log(email);

  //NODEMAILER
  const sendEmail = async (e) => {
    e.preventDefault();
    const res = await fetch(`${path}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    if (res.status === 201) {
      const data = await res.json();
      const otp = data.otp;
      console.log(otp);
      AuthCtx.updateOtp(otp);
      alert("Email Verification Code Sent Successfully...");
      if (contractorId) {
        console.log("vendoremailverification");
        navigate("/vendoremailverification");
      } else {
        console.log("citizenemailverification");
        navigate("/citizenemailverification");
      }
    } else {
      alert("Failed to send the OTP via email.");
    }
  };

  const handlePhoneVerification = async () => {
    AuthCtx.handlePhoneVerification()
      .then(() => {
        alert("Otp Sent Successfully...");
        if (contractorId) {
          console.log("vendoremailverification");
          navigate("/vendorphoneverification");
        } else {
          console.log("citizenemailverification");
          navigate("/citizenphoneverification");
        }
      })
      .catch((error) => {
        console.error("Error sending OTP:", error);
      });
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <h3>Verify With</h3>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.options}>
          <div
            className={styles.verificationOption}
            onClick={handlePhoneVerification}
          >
            <div className={styles.verificationContent}>
              <AiOutlinePhone size={50} className={styles.phone} />
              <span>{t("PHONE")}</span>
            </div>
          </div>
          <div className={styles.verificationOption} onClick={sendEmail}>
            <div className={styles.verificationContent}>
              <AiOutlineMail size={50} />
              <span>{t("EMAIL")}</span>
            </div>
          </div>
          <div id="recaptcha"></div>
        </div>
      </div>
    </div>
  );
}

export default VerificationModal;
