import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../../Context/AuthContext";
import googleLogin from "../../../../../Assests/AuthLogos/google.png";
import facebookLogin from "../../../../../Assests/AuthLogos/facebook.png";
import backArrow from "../../../../../Assests/AuthLogos/backArrow.png";
import styles from "../../CitizenRegistration/Email/CitizenEmailVerification.module.css";

const VendorEmailVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const AuthCtx = useContext(AuthContext);
  const vendorFormData = AuthCtx.vendorFormData;

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);
      if (index < 5 && value !== "") {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const verifyOtp = () => {
    const enteredOtp = otp.join("");
    const serverOtp = AuthCtx.otp;
    if (serverOtp === enteredOtp) {
      alert("OTP Verified Successfully");
      AuthCtx.updateEmailVerification();
      navigate("/vendorpassword");
    } else {
      alert("Incorrect OTP. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.welcomeText}>
          <h1>Welcome to HGS</h1>
          <p>Harness the Power of Sun with Har Ghar Solar</p>
          <button className={styles.loginButton}>Login</button>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <form className={styles.signupForm} onSubmit={verifyOtp}>
          <h2>Email Verification</h2>
          <div className={styles.formField}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              required
              value={vendorFormData.email}
              onChange={(e) =>
                AuthCtx.updateVendorFormData({
                  ...vendorFormData,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className={styles.otpContainer}>
            <div className={styles.leftSection}>
              <p>Enter OTP</p>
            </div>
            <div className={styles.otpInputContainer}>
              {otp.map(function (digit, index) {
                return (
                  <input
                    key={index}
                    type="text"
                    id={`otp-${index}`}
                    placeholder="0"
                    maxLength="1"
                    value={digit}
                    onChange={function (e) {
                      handleOtpChange(e, index);
                    }}
                  />
                );
              })}
            </div>
            <div className={styles.rightSection}>
              <p>Resend OTP</p>
            </div>
          </div>
          <button className={styles.signupButton} type="submit">
            Verify Otp
          </button>
        </form>
        <p className={styles.orText}>OR</p>
        <div className={styles.socialLogin}>
          <img src={googleLogin} alt="Google" className={styles.logo} />
          <img src={facebookLogin} alt="Facebook" className={styles.logo} />
        </div>
        <div>
          <img
            src={backArrow}
            alt=""
            className={styles.arrow}
            onClick={() => navigate("/")}
          />
        </div>
      </div>
    </div>
  );
};

export default VendorEmailVerification;
