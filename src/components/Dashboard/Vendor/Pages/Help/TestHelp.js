import React from "react";
import { useNavigate } from "react-router-dom";
import help from "../../../../../Assests/Vendor/help.png";
import profile from "../../../../../Assests/Vendor/profile.png";
import notificationIcon from "../../../../../Assests/Vendor/notificationVendor.png";
import productIcon from "../../../../../Assests/Vendor/product.png";
import userEngagementIcon from "../../../../../Assests/Vendor/userEng.png";
import styles from "./VendorHelp.module.css";
import Help from "./Help";

const VendorHelp = () => {
  const navigate = useNavigate();
  // const AuthCtx = useContext(AuthContext);
  // const vendorHelpFormData = AuthCtx.vendorHelpFormData;

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   const updatedData = {
  //     ...vendorHelpFormData,
  //     [name]: value,
  //   };
  //   AuthCtx.updateVendorHelpFormData(updatedData);
  // };

  const loginHandler = () => {
    navigate("/vendorlogin");
  };

  // useEffect(() => {
  //   if (!fileInputRef.current) return;
  //   if (dragging) {
  //     fileInputRef.current.value = "";
  //   }
  // }, [dragging]);

  // const handleDragOver = (e) => {
  //   e.preventDefault();
  //   setDragging(true);
  // };

  // const handleDragLeave = () => {
  //   setDragging(false);
  // };

  // const handleDrop = (e) => {
  //   e.preventDefault();
  //   setDragging(false);
  //   const files = e.dataTransfer.files;
  //   console.log(files);
  //   const updatedData = {
  //     ...vendorHelpFormData,
  //     document: files[0],
  //   };
  //   AuthCtx.updateVendorHelpFormData(updatedData);
  // };

  // const handleFileSelect = (e) => {
  //   const files = e.target.files;
  //   if (files.length > 0) {
  //     const file = files[0];
  //     AuthCtx.uploadDocumentToStorage(file)
  //       .then((downloadURL) => {
  //         const updatedData = {
  //           ...vendorHelpFormData,
  //           document: downloadURL,
  //         };
  //         AuthCtx.updateVendorVerificationData(updatedData);
  //       })
  //       .catch((error) => {
  //         console.error("Error uploading or getting download URL:", error);
  //       });
  //   }
  // };

  // const openFileSelect = () => {
  //   fileInputRef.current.click();
  // };

  // const handleDatabaseStorage = (formData) => {
  //   const email = formData.email.split("@")[0];
  //   const dataPath = `vendor/help/${email}`;
  //   const dataRef = ref(db, dataPath);

  //   push(dataRef, formData)
  //     .then(() => {
  //       console.log("User data stored in the database.");
  //     })
  //     .catch((error) => {
  //       console.error("Error storing user data:", error);
  //     });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Data:", vendorHelpFormData);
  //   handleDatabaseStorage(vendorHelpFormData);
  // };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.options}>
          <div className={styles.option} onClick={() => navigate("/profile")}>
            <img src={profile} alt="Profile" className={styles.optionIcon} />
            Profile
          </div>
          <div
            className={styles.option}
            onClick={() => navigate("/notifications")}
          >
            <img
              src={notificationIcon}
              alt="Notifications"
              className={styles.optionIcon}
            />
            Notifications
          </div>
          <div className={styles.option} onClick={() => navigate("/products")}>
            <img
              src={productIcon}
              alt="Products"
              className={styles.optionIcon}
            />
            Products
          </div>
          <div
            className={styles.option}
            onClick={() => navigate("/user-engagement")}
          >
            <img
              src={userEngagementIcon}
              alt="User Engagement"
              className={styles.optionIcon}
            />
            User Engagement
          </div>
        </div>
        <div className={styles.welcomeText}></div>
        <div className={styles.logoutSection}>
          <button className={styles.loginButton} onClick={loginHandler}>
            Login
          </button>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.navbar}>
          <img src={profile} alt="Profile" className={styles.profile} />
          profile Picture
          <img src={help} alt="help" className={styles.help} />
        </div>
        <Help />
      </div>
    </div>
  );
};

export default VendorHelp;
