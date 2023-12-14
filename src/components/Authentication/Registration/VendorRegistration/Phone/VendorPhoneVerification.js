import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../../Context/AuthContext";
import googleLogin from "../../../../../Assests/AuthLogos/google.png";
import facebookLogin from "../../../../../Assests/AuthLogos/facebook.png";
import backArrow from "../../../../../Assests/AuthLogos/backArrow.png";
import styles from "../../CitizenRegistration//Email/CitizenEmailVerification.module.css";

const VendorPhoneVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const AuthCtx = useContext(AuthContext);
  const vendorFormData = AuthCtx.vendorFormData;
  const user = AuthCtx.user;

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);
      if (index < 5 && value !== "") {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    try {
      const data = await user.confirm(otpValue);
      console.log(otpValue);
      console.log(data);
      alert("OTP Verified Successfully!");
      navigate("/citizenpassword");
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("OTP Verification failed. Please try again.");
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
        <form className={styles.signupForm} onSubmit={handleSubmit}>
          <h2>Phone Verification</h2>
          <div className={styles.formField}>
            <label htmlFor="number">Phone No.</label>
            <input
              type="numeric"
              name="phone"
              id="phone"
              placeholder="123 - 4560 - 098"
              required
              value={vendorFormData.mobile}
              onChange={(e) =>
                AuthCtx.updateVendorFormData({
                  ...vendorFormData,
                  mobile: e.target.value,
                })
              }
            />
          </div>
          <div id="recaptcha-container"></div>
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
                    required
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
            Verify OTP
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

export default VendorPhoneVerification;
