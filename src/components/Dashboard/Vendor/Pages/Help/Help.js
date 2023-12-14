import React, { useContext, useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { db } from "../../../../../firebase";
import { push, ref } from "firebase/database";
import AuthContext from "../../../../../Context/AuthContext";
// import help from "../../../../../Assests/Vendor/help.png";
// import profile from "../../../../../Assests/Vendor/profile.png";
// import notificationIcon from "../../../../../Assests/Vendor/notificationVendor.png";
// import productIcon from "../../../../../Assests/Vendor/product.png";
import cloud from "../../../../../Assests/Vendor/cloud.png";
// import userEngagementIcon from "../../../../../Assests/Vendor/userEng.png";
import styles from "./VendorHelp.module.css";

const Help = () => {
  // const navigate = useNavigate();
  const AuthCtx = useContext(AuthContext);
  const vendorHelpFormData = AuthCtx.vendorHelpFormData;
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = {
      ...vendorHelpFormData,
      [name]: value,
    };
    AuthCtx.updateVendorHelpFormData(updatedData);
  };

  // const loginHandler = () => {
  //   navigate("/vendorlogin");
  // };

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
      ...vendorHelpFormData,
      document: files[0],
    };
    AuthCtx.updateVendorHelpFormData(updatedData);
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const file = files[0];
      AuthCtx.uploadDocumentToStorage(file)
        .then((downloadURL) => {
          const updatedData = {
            ...vendorHelpFormData,
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
    const dataPath = `vendor/help/${email}`;
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
    console.log("Form Data:", vendorHelpFormData);
    handleDatabaseStorage(vendorHelpFormData);
  };

  return (
    <div className={styles.container}>
      {/* <div className={styles.leftPanel}>
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
      </div> */}
      <div className={styles.rightPanel}>
        {/* <div className={styles.navbar}>
          <img src={profile} alt="Profile" className={styles.profile} />
          profile Picture
          <img src={help} alt="help" className={styles.help} />
        </div> */}
        <div className={styles.grayBackground}>
          <div className={styles.heading}>
            <h3>Help & Support</h3>
          </div>
          <form className={styles.signupForm} onSubmit={handleSubmit}>
            <div className={styles.userInfoColumn}>
              <div className={styles.formField}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Name"
                  required
                  maxLength="50"
                  value={vendorHelpFormData.name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formField}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter E-mail"
                  required
                  value={vendorHelpFormData.email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formField}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter Phone No."
                  required
                  pattern="[0-9]{10}"
                  value={vendorHelpFormData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formField}>
                <label htmlFor="document">Attach Document</label>
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
                <label htmlFor="subject">Subject</label>
                <textarea
                  name="subject"
                  id="subject"
                  placeholder="Enter Subject"
                  required
                  maxLength="500"
                  value={vendorHelpFormData.subject}
                  className={styles.subjectTextArea}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formField}>
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="Enter Description"
                  required
                  maxLength="500"
                  value={vendorHelpFormData.description}
                  className={styles.descriptionTextArea}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.preferredContact}>
                <label className={styles.preferredContactLabel}>
                  Preferred Contact Method
                </label>
                <div className={styles.checkboxGroup}>
                  <div className={styles.checkboxOption}>
                    <input
                      type="checkbox"
                      name="preferredContactMethod"
                      value="whatsapp"
                      id="whatsappCheckbox"
                      onChange={handleChange}
                      className={styles.customCheckbox}
                    />
                    <label htmlFor="whatsappCheckbox">WhatsApp</label>
                  </div>
                  <div className={styles.checkboxOption}>
                    <input
                      type="checkbox"
                      name="preferredContactMethod"
                      value="email"
                      id="emailCheckbox"
                      onChange={handleChange}
                      className={styles.customCheckbox}
                    />
                    <label htmlFor="emailCheckbox">Email</label>
                  </div>
                  <div className={styles.checkboxOption}>
                    <input
                      type="checkbox"
                      name="preferredContactMethod"
                      value="call"
                      id="callCheckbox"
                      onChange={handleChange}
                      className={styles.customCheckbox}
                    />
                    <label htmlFor="callCheckbox">Call</label>
                  </div>
                </div>
              </div>
              <button className={styles.signupButton} type="submit">
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Help;
