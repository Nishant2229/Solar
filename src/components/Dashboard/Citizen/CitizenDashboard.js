import React, { useContext } from "react";
import { auth } from "../../../firebase";
import styles from "./CitizenDashboard.module.css";
import AuthContext from "../../../Context/AuthContext";

const CitizenDashboard = () => {
  const AuthCtx = useContext(AuthContext);
  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        AuthCtx.logout();
        console.log("User logged out");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h2>Citizen Dashboard</h2>
        <ul>
          <li>Dashboard</li>
          <li>Profile</li>
          <li>Orders</li>
          <li>Support</li>
          <li>Settings</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>
      <div className={styles.content}>
        <h1>Welcome to the Citizen Dashboard</h1>
        <p>Here, you can manage your profile, orders, and settings.</p>
      </div>
    </div>
  );
};

export default CitizenDashboard;
