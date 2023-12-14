// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import AuthContext from "../../../../Context/AuthContext";
// import googleLogin from "../../../../Assests/AuthLogos/google.png";
// import facebookLogin from "../../../../Assests/AuthLogos/facebook.png";
// import backArrow from "../../../../Assests/AuthLogos/backArrow.png";
// import phoneLogin from "../../../../Assests/AuthLogos/phone.png";
// import styles from "../../../Authentication/Registration/CitizenRegistration/Email/CitizenEmailVerification.module.css";

// const VendorEmailVerification = () => {
//   const navigate = useNavigate();
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const AuthCtx = useContext(AuthContext);
//   const email = AuthCtx.formData.email;

//   const handleOtpChange = (e, index) => {
//     const value = e.target.value;
//     if (/^\d*$/.test(value) && value.length <= 1) {
//       const updatedOtp = [...otp];
//       updatedOtp[index] = value;
//       setOtp(updatedOtp);
//       if (index < 5 && value !== "") {
//         document.getElementById(`otp-${index + 1}`).focus();
//       }
//     }
//   };

//   const verifyOtp = () => {
//     const enteredOtp = otp.join("");
//     const serverOtp = AuthCtx.otp;

//     if (serverOtp === enteredOtp) {
//       alert("OTP Verified Successfully");
//       AuthCtx.updateEmailVerification();
//       navigate("/vendorpassword");
//     } else {
//       alert("Incorrect OTP. Please try again.");
//     }
//   };

//   const handleSignup = () => {
//     navigate("/vendorregistration");
//   };

//   const handlePhoneLogin = () => {
//     console.log("Phone Login");
//     navigate("/vendorloginbyphone");
//   };

//   const handleFacebookSignIn = () => {
//     console.log("Facebook Login");
//     AuthCtx.handleFacebookSignIn();
//   };

//   const handleGoogleSignIn = () => {
//     console.log("Google Login");
//     AuthCtx.handleGoogleSignIn();
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.leftPanel}>
//         <div className={styles.welcomeText}>
//           <h1>Welcome to HGS</h1>
//           <p>Harness the Power of Sun with Har Ghar Solar</p>
//           <button className={styles.loginButton} onClick={handleSignup}>
//             Sign up
//           </button>
//         </div>
//       </div>
//       <div className={styles.rightPanel}>
//         <form className={styles.signupForm}>
//           <h2>Email Verification</h2>
//           <div className={styles.formField}>
//             <label htmlFor="email">E-mail</label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Enter email"
//               required
//               value={email}
//               onChange={(e) =>
//                 AuthCtx.updateFormData({
//                   ...AuthCtx.formData,
//                   email: e.target.value,
//                 })
//               }
//             />
//           </div>
//           <div className={styles.otpContainer}>
//             <div className={styles.leftSection}>
//               <p>Enter OTP</p>
//             </div>
//             <div className={styles.otpInputContainer}>
//               {otp.map(function (digit, index) {
//                 return (
//                   <input
//                     key={index}
//                     type="text"
//                     id={`otp-${index}`}
//                     placeholder="0"
//                     maxLength="1"
//                     value={digit}
//                     onChange={function (e) {
//                       handleOtpChange(e, index);
//                     }}
//                   />
//                 );
//               })}
//             </div>
//             <div className={styles.rightSection}>
//               <p>Resend OTP</p>
//             </div>
//           </div>
//           <div className={styles.buttonContainer}>
//             <button
//               className={styles.signupButton}
//               type="button"
//               onClick={verifyOtp}
//             >
//               Verify OTP
//             </button>
//           </div>
//         </form>
//         <p className={styles.orText}>OR</p>
//         <div className={styles.socialLogin}>
//           <img
//             src={googleLogin}
//             alt="Google"
//             className={styles.logo}
//             onClick={handleGoogleSignIn}
//           />
//           <img
//             src={facebookLogin}
//             alt="Facebook"
//             className={styles.logo}
//             onClick={handleFacebookSignIn}
//           />
//           <img
//             src={phoneLogin}
//             alt="Phone"
//             className={styles.logo}
//             onClick={handlePhoneLogin}
//           />
//         </div>
//         <div>
//           <img
//             src={backArrow}
//             alt=""
//             className={styles.arrow}
//             onClick={() => navigate("/")}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VendorEmailVerification;
