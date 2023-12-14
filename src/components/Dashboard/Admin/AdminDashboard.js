import React, { useContext } from "react";
import styles from "./AdminDashboard.module.css";
import AuthContext from "../../../Context/AuthContext";
import { auth } from "../../../firebase";

const AdminDashboard = () => {
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
        <h2>Admin Dashboard</h2>
        <ul>
          <li>Dashboard</li>
          <li>Users</li>
          <li>Products</li>
          <li>Orders</li>
          <li>Settings</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>
      <div className={styles.content}>
        <h1>Welcome to the Admin Dashboard</h1>
        <p>Here, you can manage your site's content and settings.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
