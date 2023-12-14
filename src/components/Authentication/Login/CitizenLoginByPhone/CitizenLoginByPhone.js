import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../../../firebase";
import AuthContext from "../../../../Context/AuthContext";
import sun from "../../../../Assests/AuthLogos/sun.png";
import googleLogin from "../../../../Assests/AuthLogos/google.png";
import facebookLogin from "../../../../Assests/AuthLogos/facebook.png";
import gmailLogin from "../../../../Assests/AuthLogos/gmail.png";
import backArrow from "../../../../Assests/AuthLogos/backArrow.png";
import styles from "../../Registration/CitizenRegistration/Email/CitizenEmailVerification.module.css";

const CitizenLoginByPhone = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const AuthCtx = useContext(AuthContext);
  const user = AuthCtx.user;
  const [otpSent, setOtpSent] = useState(false);

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
      console.log("OTP Verified Successfully!");
      navigate("/citizendashboard");
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("OTP Verification failed. Please try again.");
    }
  };

  const handleSendOtp = async () => {
    try {
      console.log(AuthCtx.formData.mobile);
      await AuthCtx.handlePhoneVerification(AuthCtx.formData.mobile);
      setOtpSent(true);
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const handlePhoneLogin = () => {
    console.log("Phone Login");
    navigate("/citizenloginbyphone");
  };

  const handleFacebookSignIn = () => {
    console.log("Facebook Login");
    AuthCtx.handleFacebookSignIn();
  };

  const handleGoogleSignIn = () => {
    console.log("Google Login");
    AuthCtx.handleGoogleSignIn();
  };

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in", user);
        localStorage.setItem("user", user.email);
        navigate("/citizendashboard");
      } else {
        console.log("User is not logged in");
        localStorage.removeItem("user");
      }
    });

    const rememberedEmail = localStorage.getItem("user");
    if (rememberedEmail) {
      console.log(rememberedEmail);
    }

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.welcomeText}>
          <h1>Welcome to HGS</h1>
          <p>Harness the Power of Sun with Har Ghar Solar</p>
          <button className={styles.loginButton}>SignUp</button>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <form className={styles.signupForm} onSubmit={handleSubmit}>
          <div className={styles.heading}>
            <h2>Log In To</h2>
            <img src={sun} alt="Sun" className={styles.sunImage} />
          </div>
          <div className={styles.formField}>
            <label htmlFor="number">Phone No.</label>
            <input
              className={styles.phoneInput}
              type="number"
              name="phone"
              id="phone"
              placeholder="123 - 4560 - 098"
              required
              value={AuthCtx.formData.mobile}
              onChange={(e) =>
                AuthCtx.updateFormData({
                  ...AuthCtx.formData,
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
            <div className={styles.otpInput}>
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
          <div id="recaptcha"></div>
          <button
            className={styles.signupButton}
            type="submit"
            onClick={otpSent ? handleSubmit : handleSendOtp}
          >
            {otpSent ? "Verify OTP" : "Send OTP"}{" "}
          </button>
        </form>
        <p className={styles.orText}>OR</p>
        <div className={styles.socialLogin}>
          <img
            src={googleLogin}
            alt="Google"
            className={styles.logo}
            onClick={handleGoogleSignIn}
          />
          <img
            src={facebookLogin}
            alt="Facebook"
            className={styles.logo}
            onClick={handleFacebookSignIn}
          />
          <img
            src={gmailLogin}
            alt="Phone"
            className={styles.logo}
            onClick={handlePhoneLogin}
          />
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

export default CitizenLoginByPhone;
