import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import VerificationModal from "./VerificationModal";
import AuthContext from "../../../../../Context/AuthContext";
import googleLogin from "../../../../../Assests/AuthLogos/google.png";
import facebookLogin from "../../../../../Assests/AuthLogos/facebook.png";
import backArrow from "../../../../../Assests/AuthLogos/backArrow.png";
import sun from "../../../../../Assests/AuthLogos/sun.png";
import styles from "./CitizenRegistration.module.css";

const CitizenRegistration = () => {
  const navigate = useNavigate();
  const AuthCtx = useContext(AuthContext);
  const citizenFormData = AuthCtx.citizenFormData;
  const [showVerificationModal, setShowVerificationModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = {
      ...citizenFormData,
      [name]: value,
    };
    AuthCtx.updateCitizenFormData(updatedData);
  };

  const handleShowVerificationModal = () => {
    setShowVerificationModal(true);
    AuthCtx.login(citizenFormData);
  };

  const handleVerificationModalClose = () => {
    setShowVerificationModal(false);
  };

  //Google Sign In
  const handleGoogleSignIn = () => {
    AuthCtx.handleGoogleSignIn();
  };

  //Facebook Signin
  const handleFacebookSignIn = () => {
    AuthCtx.handleFacebookSignIn();
  };

  const loginHandler = () => {
    navigate("/citizenlogin");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleShowVerificationModal();
    console.log("Form Data:", citizenFormData);
    localStorage.setItem("user", citizenFormData.email);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.welcomeText}>
          <h1>Welcome to HGS</h1>
          <p>Harness the Power of Sun with Har Ghar Solar</p>
          <button className={styles.loginButton} onClick={loginHandler}>
            Login
          </button>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <form className={styles.signupForm} onSubmit={handleSubmit}>
          <div className={styles.heading}>
            <h2>Sign Up To</h2>
            <img src={sun} alt="Sun" className={styles.sunImage} />
          </div>
          <div className={styles.formField}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter first name"
              required
              maxLength="50"
              value={citizenFormData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter last name"
              required
              maxLength="50"
              value={citizenFormData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
              required
              value={citizenFormData.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              id="mobile"
              placeholder="Enter mobile number"
              required
              pattern="[0-9]{10}"
              value={citizenFormData.mobile}
              onChange={handleChange}
            />
          </div>
          <button
            className={styles.signupButton}
            type="button"
            onClick={handleShowVerificationModal}
          >
            Sign Up
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
        </div>
        <div>
          <img
            src={backArrow}
            alt="back"
            className={styles.arrow}
            onClick={() => navigate("/")}
          />
        </div>
      </div>
      {showVerificationModal && (
        <VerificationModal onClose={handleVerificationModalClose} />
      )}
    </div>
  );
};

export default CitizenRegistration;
