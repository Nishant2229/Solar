import { createContext, useState } from "react";
import {
  getAuth,
  RecaptchaVerifier,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithPhoneNumber,
} from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app, storage } from "../firebase";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isMobileVerified, setIsMobileVerified] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isContractor, setIsContractor] = useState(false);
  const [otp, setOtp] = useState("");
  const auth = getAuth();
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();
  const [citizenFormData, setCitizenFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });
  const [vendorFormData, setVendorFormData] = useState({
    contractorId: "",
    vendorName: "",
    address: "",
    email: "",
    mobile: "",
  });
  const [vendorVerificationData, setVendorVerificationData] = useState({
    name: "",
    email: "",
    phone: "",
    aadharNumber: "",
    gstNumber: "",
    panNumber: "",
    document: null,
    address: "",
  });
  const [vendorHelpFormData, setVendorHelpFormData] = useState({
    name: "",
    email: "",
    phone: "",
    document: null,
    subject: "",
    description: "",
    preferredContactMethod: [],
  });

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  //update CITIZEN
  const updateCitizenFormData = (data) => {
    setCitizenFormData(data);
  };

  //update VENDOR
  const updateVendorFormData = (data) => {
    setVendorFormData(data);
  };

  //update VENDOR VERIFICATION
  const updateVendorVerificationData = (data) => {
    setVendorVerificationData(data);
  };

  //update VENDOR HELP
  const updateVendorHelpFormData = (data) => {
    setVendorHelpFormData(data);
  };

  const updateMobileVerification = () => {
    setIsMobileVerified(true);
  };

  const updateEmailVerification = () => {
    setIsEmailVerified(true);
  };

  const updateUser = (newConfirmation) => {
    setUser(newConfirmation);
  };

  const updateOtp = (newOtp) => {
    setOtp(newOtp);
  };

  const setContractor = () => {
    console.log("Contractor => TRUE");
    setIsContractor(true);
  };

  const updateUserType = (type) => {
    setUserType(type);
  };

  //Phone Sign In
  const handlePhoneVerification = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {
        size: "invisible",
        callback: (response) => {
          console.log("reCAPTCHA verified:", response);
        },
      });
      const phoneNumber =
        userType === "CITIZEN"
          ? "+91" + citizenFormData.mobile
          : "+91" + vendorFormData.mobile;
      const confirmation = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        recaptcha
      );
      setUser(confirmation);
      alert("OTP Sent Successfully...");
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  // Google Sign In
  const handleGoogleSignIn = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log("Google Sign In Successful!");
      })
      .catch((error) => {
        console.error("Google sign-in error:", error);
      });
  };

  // Facebook Sign In
  const handleFacebookSignIn = () => {
    const auth = getAuth(app);
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log("Facebook Sign In Successful!");
      })
      .catch((error) => {
        console.error("Facebook sign-in error:", error);
      });
  };

  const uploadDocumentToStorage = (file) => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, "files/" + file.name);

      // Upload the selected file to Firebase Storage
      uploadBytes(storageRef, file)
        .then((snapshot) => {
          // Get the download URL of the uploaded file
          getDownloadURL(snapshot.ref)
            .then((downloadURL) => {
              resolve(downloadURL); // Resolve the URL when the upload is successful
            })
            .catch((error) => {
              reject(error); // Reject with an error if there's any issue with getting the URL
            });
        })
        .catch((error) => {
          reject(error); // Reject with an error if there's any issue with the upload
        });
    });
  };

  console.log(userType ? userType : "NO USER");

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        otp,
        updateOtp,
        user,
        updateUser,
        userType,
        updateUserType,
        citizenFormData,
        updateCitizenFormData,
        vendorFormData,
        updateVendorFormData,
        vendorVerificationData,
        updateVendorVerificationData,
        vendorHelpFormData,
        updateVendorHelpFormData,
        isContractor,
        setContractor,
        isMobileVerified,
        updateMobileVerification,
        isEmailVerified,
        updateEmailVerification,
        handleGoogleSignIn,
        handleFacebookSignIn,
        handlePhoneVerification,
        uploadDocumentToStorage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
