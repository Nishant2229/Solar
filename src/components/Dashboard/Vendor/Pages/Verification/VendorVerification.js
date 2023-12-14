import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../../../firebase";
import { push, ref } from "firebase/database";
import AuthContext from "../../../../../Context/AuthContext";
import help from "../../../../../Assests/Vendor/help.png";
import profile from "../../../../../Assests/Vendor/profile.png";
import notificationIcon from "../../../../../Assests/Vendor/notificationVendor.png";
import productIcon from "../../../../../Assests/Vendor/product.png";
import cloud from "../../../../../Assests/Vendor/cloud.png";
import logout from "../../../../../Assests/Vendor/logout.png";
import userEngagementIcon from "../../../../../Assests/Vendor/userEng.png";
import styles from "./VendorVerification.module.css";

const VendorVerification = () => {
  const navigate = useNavigate();
  const AuthCtx = useContext(AuthContext);
  const vendorVerificationData = AuthCtx.vendorVerificationData;
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = {
      ...vendorVerificationData,
      [name]: value,
    };
    AuthCtx.updateVendorVerificationData(updatedData);
  };

  const logoutHandler = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log("Menu Tooggle...");
  };

  useEffect(() => {
    if (!fileInputRef.current) return;
    if (dragging) {
      fileInputRef.current.value = "";
    }
  }, [dragging]);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer.files;
    console.log(files);
    const updatedData = {
      ...vendorVerificationData,
      document: files[0],
    };
    AuthCtx.updateVendorVerificationData(updatedData);
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const file = files[0];
      AuthCtx.uploadDocumentToStorage(file)
        .then((downloadURL) => {
          const updatedData = {
            ...vendorVerificationData,
            document: downloadURL,
          };
          AuthCtx.updateVendorVerificationData(updatedData);
        })
        .catch((error) => {
          console.error("Error uploading or getting download URL:", error);
        });
    }
  };

  const openFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleDatabaseStorage = (formData) => {
    const email = formData.email.split("@")[0];
    const dataPath = `vendor/verification/${email}`;
    const dataRef = ref(db, dataPath);

    push(dataRef, formData)
      .then(() => {
        console.log("User data stored in the database.");
      })
      .catch((error) => {
        console.error("Error storing user data:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", vendorVerificationData);
    handleDatabaseStorage(vendorVerificationData);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.leftPanel} ${isMenuOpen ? styles.openMenu : ""}`}
      >
        <div className={styles.options}>
          <div className={styles.option} onClick={() => navigate("/profile")}>
            <div className={styles.optionContent}>
              <img src={profile} alt="Profile" className={styles.optionIcon} />
              <span>Profile</span>
            </div>
          </div>
          <div
            className={styles.option}
            onClick={() => navigate("/notifications")}
          >
            <div className={styles.optionContent}>
              <img
                src={notificationIcon}
                alt="Notifications"
                className={styles.optionIcon}
              />
              <span>Notifications</span>
            </div>
          </div>
          <div className={styles.option} onClick={() => navigate("/products")}>
            <div className={styles.optionContent}>
              <img
                src={productIcon}
                alt="Products"
                className={styles.optionIcon}
              />
              <span>Products</span>
            </div>
          </div>
          <div
            className={styles.option}
            onClick={() => navigate("/user-engagement")}
          >
            <div className={styles.optionContent}>
              <img
                src={userEngagementIcon}
                alt="User Engagement"
                className={styles.optionIcon}
              />
              <span>User Engagement</span>
            </div>
            <div className={styles.optionContentLogout}>
              <img src={logout} alt="LogOut" className={styles.optionIcon} />
              <span onClick={logoutHandler}>Log Out</span>
            </div>
          </div>
        </div>
        <div className={styles.welcomeText}></div>
        <div className={styles.logoutSection}>
          <img src={logout} alt="logout" />
          <button className={styles.loginButton} onClick={logoutHandler}>
            Log Out
          </button>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.navbar}>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          <img src={profile} alt="Profile" className={styles.profilePhoto} />
          <p className={styles.profileName}>profile Picture</p>
          <img src={help} alt="help" className={styles.help} />
        </div>
        <div className={styles.grayBackground}>
          <div className={styles.heading}>
            <h3>Verification</h3>
          </div>
          <form className={styles.signupForm} onSubmit={handleSubmit}>
            <div className={styles.userInfoColumn}>
              <div className={styles.formField}>
                <label htmlFor="name">Vendor Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Name"
                  required
                  maxLength="50"
                  value={vendorVerificationData.name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formField}>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter E-mail"
                  required
                  value={vendorVerificationData.email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formField}>
                <label htmlFor="phone">Phone No.</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter Phone No."
                  required
                  pattern="[0-9]{10}"
                  value={vendorVerificationData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formField}>
                <label htmlFor="document">Gumasta Certificate</label>
                <div
                  className={`${styles.dropArea} ${
                    dragging ? styles.dragging : ""
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={openFileSelect}
                >
                  <img src={cloud} alt="cloud" />
                  {dragging ? (
                    <p>Drop the file here</p>
                  ) : (
                    <p>Click or drag and drop here</p>
                  )}
                </div>
                <p className={styles.docTypes}>
                  Accept File Types: doc, pdf, png, jpg
                </p>
                <button onClick={openFileSelect}></button>
                <input
                  type="file"
                  ref={fileInputRef}
                  name="document"
                  id="document"
                  accept=".doc, .pdf, .png, .jpg"
                  onChange={handleFileSelect}
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <div className={styles.userInfoColumn}>
              <div className={styles.formField}>
                <label htmlFor="pan">Pan Card Number</label>
                <input
                  type="text"
                  name="pan"
                  id="pan"
                  placeholder="Enter PAN card Number"
                  required
                  pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                  value={vendorVerificationData.PanCardNumber}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formField}>
                <label htmlFor="phone">Aadhar Card Number</label>
                <input
                  type="text"
                  name="aadhar"
                  id="aadhar"
                  placeholder="Enter Aadhar Card Number"
                  required
                  pattern="[0-9]{12}"
                  value={vendorVerificationData.AadharCardNumber}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formField}>
                <label htmlFor="GST">GST Number</label>
                <input
                  type="integer"
                  name="GST"
                  id="GST"
                  placeholder="Enter GST Number"
                  required
                  pattern="[0-9]{15}"
                  value={vendorVerificationData.GstNumber}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formField}>
                <label htmlFor="address">Address</label>
                <textarea
                  name="address"
                  id="address"
                  placeholder="Enter Address"
                  required
                  maxLength="500"
                  value={vendorVerificationData.address}
                  onChange={handleChange}
                  className={styles.addressTextArea}
                />
              </div>
              <button
                className={styles.signupButton}
                id="signupBtn"
                type="submit"
              >
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VendorVerification;
