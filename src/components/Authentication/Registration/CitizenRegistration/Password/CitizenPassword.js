import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../../../../../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref, push } from "firebase/database";
import { db } from "../../../../../firebase";
import AuthContext from "../../../../../Context/AuthContext";
import backArrow from "../../../../../Assests/AuthLogos/backArrow.png";
import googleLogin from "../../../../../Assests/AuthLogos/google.png";
import facebookLogin from "../../../../../Assests/AuthLogos/facebook.png";
import sun from "../../../../../Assests/AuthLogos/sun.png";
import styles from "../Email/CitizenEmailVerification.module.css";

const CitizenPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const AuthCtx = useContext(AuthContext);
  const citizenFormData = AuthCtx.citizenFormData;
  const auth = getAuth(app);

  useEffect(() => {
    if (AuthCtx.isContractor) {
      navigate("/vendorpassword");
    }
  }, [citizenFormData.contractorId]);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    validatePassword(password, newConfirmPassword);
  };

  const validatePassword = (newPassword, newConfirmPassword) => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[@#$%^&+=])(.{8,})$/;
    if (!passwordRegex.test(newPassword)) {
      setPasswordError(
        "Password must be at least 8 characters, including one number and one special character."
      );
    } else if (newPassword !== newConfirmPassword) {
      setPasswordError("Passwords do not match.");
    } else {
      setPasswordError("");
    }
  };

  const updatePasswordInContext = (newPassword) => {
    AuthCtx.updateCitizenFormData({
      ...citizenFormData,
      password: newPassword,
    });
  };

  const handleDatabaseStorage = (formData) => {
    const email = formData.email.split("@")[0];
    const dataRef = formData.contractorId
      ? ref(db, `vendor/${email}`)
      : ref(db, `citizen/${email}`);

    push(dataRef, formData)
      .then(() => {
        console.log("User data stored in the database.");
      })
      .catch((error) => {
        console.error("Error storing user data:", error);
      });
  };
  
  const handleSignUp = async () => {
    if (passwordError) {
      alert("Wrong password...");
      return;
    }

    if (!citizenFormData.email) {
      alert("Please provide a valid email address.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        citizenFormData.email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      await AuthCtx.updateCitizenFormData({
        ...citizenFormData,
        displayName: `${citizenFormData.firstName} ${citizenFormData.lastName}`,
      });

      navigate("/citizenlogin");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  const loginHandler = () => {
    navigate("/citizenlogin");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword && !passwordError) {
      updatePasswordInContext(password);
      handleDatabaseStorage(citizenFormData);
      handleSignUp();
    } else {
      alert("Passwords do not match or do not meet the requirements.");
    }
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
          <div className={styles.passwordField}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className={styles.passwordField}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm your password"
              required
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          {passwordError && <p className={styles.errorText}>{passwordError}</p>}
          <button className={styles.setPasswordBUtton} type="submit">
            Sign Up
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

export default CitizenPassword;
