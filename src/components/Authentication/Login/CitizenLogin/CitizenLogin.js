import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../../firebase";
import sun from "../../../../Assests/AuthLogos/sun.png";
import googleLogin from "../../../../Assests/AuthLogos/google.png";
import facebookLogin from "../../../../Assests/AuthLogos/facebook.png";
import gmailLogin from "../../../../Assests/AuthLogos/gmail.png";
import backArrow from "../../../../Assests/AuthLogos/backArrow.png";
import phoneLogin from "../../../../Assests/AuthLogos/phone.png";
import styles from "./CitizenLogin.module.css";
import AuthContext from "../../../../Context/AuthContext";

const CitizenLogin = () => {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const AuthCtx = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = {
      ...formData,
      [name]: value,
    };
    setFormData(updatedData);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
    localStorage.setItem("userEmail", formData.email);
  };

  const signupHandler = () => {
    navigate("/citizenregistration");
  };

  const handlePhoneLogin = () => {
    console.log("Phone Login");
    navigate("/citizenloginbyphone");
  };

  const handleEmailSignIn = () => {
    console.log("handleEmailSignIn");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    const auth = getAuth(app);
    console.log("Form Data:", formData);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Sign In Successful..!");
      const user = userCredential.user;
      console.log("User:", user);
      navigate("/citizendashboard");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.welcomeText}>
          <h1>Welcome to HGS</h1>
          <p>Harness the Power of Sun with Har Ghar Solar</p>
          <button className={styles.loginButton} onClick={signupHandler}>
            SignUp
          </button>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <form className={styles.signupForm} onSubmit={handleSubmit}>
          <div className={styles.heading}>
            <h2>Login To</h2>
            <img src={sun} alt="Sun" className={styles.sunImage} />
          </div>
          <div className={styles.formField}>
            <label htmlFor="email">E-mail</label>
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
          <div className={styles.formField}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formField}>
            <div className={styles.rememberMeContainer}>
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
          </div>
          <button className={styles.signupButton} type="submit">
            Login
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
            src={gmailLogin}
            alt="Gmail"
            className={styles.logo}
            onClick={handleEmailSignIn}
          />
          <img
            src={facebookLogin}
            alt="Facebook"
            className={styles.logo}
            onClick={handleFacebookSignIn}
          />
          <img
            src={phoneLogin}
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

export default CitizenLogin;
