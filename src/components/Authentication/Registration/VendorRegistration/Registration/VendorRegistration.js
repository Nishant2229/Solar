import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../../Context/AuthContext";
import googleLogin from "../../../../../Assests/AuthLogos/google.png";
import facebookLogin from "../../../../../Assests/AuthLogos/facebook.png";
import backArrow from "../../../../../Assests/AuthLogos/backArrow.png";
import sun from "../../../../../Assests/AuthLogos/sun.png";
import VerificationModal from "../../CitizenRegistration/Registration/VerificationModal";
import styles from "./VendorRegistration.module.css";

const VendorRegistration = () => {
  const navigate = useNavigate();
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const AuthCtx = useContext(AuthContext);
  const [formData, setFormData] = useState({
    contractorId: "",
    vendorName: "",
    mobile: "",
    address: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedData;
    if (name === "contractorId") {
      const text = value.replace(/[^A-Za-z]/g, "");
      const number = value.replace(/[^0-9]/g, "");
      const formattedValue = text + number;
      updatedData = {
        ...formData,
        [name]: formattedValue,
      };
    } else if (name === "address") {
      const formattedValue = value.replace(/[^A-Za-z0-9\s,./-]/g, "");
      updatedData = {
        ...formData,
        [name]: formattedValue,
      };
    } else {
      updatedData = {
        ...formData,
        [name]: value,
      };
    }
    setFormData(updatedData);
    AuthCtx.setContractor();
    AuthCtx.updateVendorFormData(updatedData);
  };

  const handleShowVerificationModal = () => {
    setShowVerificationModal(true);
    AuthCtx.login(formData);
  };

  const handleVerificationModalClose = () => {
    setShowVerificationModal(false);
  };

  const handleGoogleSignIn = () => {
    AuthCtx.handleGoogleSignIn();
  };

  const handleFacebookSignIn = () => {
    AuthCtx.handleFacebookSignIn();
  };

  const loginHandler = () => {
    navigate("/vendorlogin");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    localStorage.setItem("vendor", formData.email);
    handleShowVerificationModal();
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
            <label htmlFor="contractorId">Contractor ID</label>
            <input
              type="text"
              name="contractorId"
              id="contractorId"
              placeholder="Enter contractor ID"
              required
              maxLength="50"
              value={formData.contractorId}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="vendorName">Vendor Name</label>
            <input
              type="text"
              name="vendorName"
              id="vendorName"
              placeholder="Enter vendor name"
              required
              maxLength="50"
              value={formData.vendorName}
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
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Enter address"
              required
              maxLength="50"
              value={formData.address}
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
              value={formData.email}
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
            alt=""
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

export default VendorRegistration;
