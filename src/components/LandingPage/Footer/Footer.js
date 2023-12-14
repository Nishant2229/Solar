import React from "react";
// import { useNavigate } from "react-router-dom";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import logo2 from "../../../Assests/NavLogos/logo2.png";
import logo3 from "../../../Assests/NavLogos/logo3.png";
import logo6 from "../../../Assests/NavLogos/logo6.png";
import logo7 from "../../../Assests/NavLogos/logo7.png";
import styles from "./Footer.module.css";

function Footer() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const navigate = useNavigate();
  // const auth = getAuth();

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await signInWithEmailAndPassword(auth, username, password);
  //     navigate("/admindashboard");
  //   } catch (error) {
  //     setError("Invalid username or password");
  //     console.error("Error logging in:", error);
  //   }
  // };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* <div className={styles.adminLogin}>
          <h3>Admin Login</h3>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Log In</button>
          </form>
          {error && <p className={styles.error}>{error}</p>}
        </div> */}
        <div className={styles.footerInfoAndLogos}>
          <div className={styles.info}>
            <img src={logo7} alt="logo" className={styles.logo} />
            <p>
              <strong>Last Updated</strong>:<span> September 5, 2023</span>
            </p>
            <p>
              Website Content Managed by <br />
              <span>Smart City Indore</span>
            </p>
          </div>
          <div className={styles.footerLogos}>
            <img src={logo2} alt="logo" className={styles.logo} />
            <img src={logo3} alt="logo" className={styles.logo} />
            <img src={logo6} alt="logo" className={styles.logo} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
