import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { get, ref } from "firebase/database";
import { db, messaging } from "./firebase";
import { getToken } from "firebase/messaging";
import Home from "./components/LandingPage/Home/Home";
import Navbar from "./components/LandingPage/Navbar/Navbar";
import Usp from "./components/LandingPage/USP/Usp";
import AboutSchemes from "./components/LandingPage/AboutSchemes/AboutSchemes";
import Footer from "./components/LandingPage/Footer/Footer";
import CitizenRegistration from "./components/Authentication/Registration/CitizenRegistration/Registration/CitizenRegistration";
import CitizenEmailVerification from "./components/Authentication/Registration/CitizenRegistration/Email/CitizenEmailVerification";
import CitizenPhoneVerification from "./components/Authentication/Registration/CitizenRegistration/Phone/CitizenPhoneVerification";
import CitizenPassword from "./components/Authentication/Registration/CitizenRegistration/Password/CitizenPassword";
import AdminDashboard from "./components/Dashboard/Admin/AdminDashboard";
import CitizenDashboard from "./components/Dashboard/Citizen/CitizenDashboard";
import CitizenLogin from "./components/Authentication/Login/CitizenLogin/CitizenLogin";
import CitizenLoginByPhone from "./components/Authentication/Login/CitizenLoginByPhone/CitizenLoginByPhone";
import CitizenLoginByEmail from "./components/Authentication/Login/CitizenLoginByEmail/CitizenLoginByEmail";
import VendorRegistration from "./components/Authentication/Registration/VendorRegistration/Registration/VendorRegistration";
import VendorEmailVerification from "./components/Authentication/Registration/VendorRegistration/Email/VendorEmailVerification";
import VendorDashboard from "./components/Dashboard/Vendor/Dashboard/VendorDashboard";
import VendorPassword from "./components/Authentication/Registration/VendorRegistration/password/VendorPassword";
import VendorLogin from "./components/Authentication/Login/Vendor/VendorLogin";
import VendorPhoneVerification from "./components/Authentication/Registration/VendorRegistration/Phone/VendorPhoneVerification";
import VendorVerification from "./components/Dashboard/Vendor/Pages/Verification/VendorVerification";
import VendorHelp from "./components/Dashboard/Vendor/Pages/Help/VendorHelp";
import ContentRouter from "./components/About/Content/ContentRouter/ContentRouter";
import VendorDashboardTailwind from "./components/Dashboard/Vendor/Dashboard/VendorDashboardTailwind";
import Help from "./components/Dashboard/Vendor/Pages/Help/Help";
import TestHelp from "./components/Dashboard/Vendor/Pages/Help/TestHelp";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutSchemes />
      <Usp />
      <Footer />
    </div>
  );
}

function App() {
  const navigate = useNavigate();

  //NOTIFICATION FUNCTION
  const requestPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      //TOKEN GENERATION
      const token = await getToken(messaging, { vapidKey: "" });
      // console.log("Generated TOKEN", token);
    } else if (permission === "denied") {
      alert("Permission Denied...");
    }
  };

  //NOTIFICATION UseEffect
  useEffect(() => {
    requestPermission();
  }, []);

  useEffect(() => {
    const auth = getAuth();
    const rememberEmail = localStorage.getItem("userEmail");

    if (rememberEmail) {
      const rememberEmailId = rememberEmail.toLowerCase();

      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const email = rememberEmailId.split("@")[0];
          const vendorPath = `vendor/${email}`;
          const citizenPath = `citizen/${email}`;
          const adminPath = `admin/${email}`;

          const vendorDataRef = ref(db, vendorPath);
          const citizenDataRef = ref(db, citizenPath);
          const adminDataRef = ref(db, adminPath);
          get(vendorDataRef)
            .then((vendorSnapshot) => {
              // Check if user exists in vendor data
              if (vendorSnapshot.exists()) {
                navigate("/vendordashboard");
              } else {
                // Check if user exists in citizen data
                get(citizenDataRef)
                  .then((citizenSnapshot) => {
                    if (citizenSnapshot.exists()) {
                      navigate("/citizendashboard");
                    } else {
                      // Check if user exists in admin data
                      get(adminDataRef)
                        .then((adminSnapshot) => {
                          if (adminSnapshot.exists()) {
                            navigate("/admindashboard");
                          } else {
                            console.log("You Were LOgged Out...");
                          }
                        })
                        .catch((error) => {
                          console.error(
                            "Error checking admin database:",
                            error
                          );
                          console.log("You Were LOgged Out...");
                        });
                    }
                  })
                  .catch((error) => {
                    console.error("Error checking citizen database:", error);
                    navigate("/");
                  });
              }
            })
            .catch((error) => {
              console.error("Error checking vendor database:", error);
              navigate("/");
            });
        } else {
          console.log("You Were LOgged Out...");  
        }
      });
      return () => unsubscribe();
    } else {
      console.log("You Were LOgged Out...");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/citizenregistration" element={<CitizenRegistration />} />
      <Route
        path="/citizenemailverification"
        element={<CitizenEmailVerification />}
      />
      <Route
        path="/citizenphoneverification"
        element={<CitizenPhoneVerification />}
      />
      <Route path="/citizenpassword" element={<CitizenPassword />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/citizendashboard" element={<CitizenDashboard />} />
      <Route path="/citizenlogin" element={<CitizenLogin />} />
      <Route path="/citizenloginbyphone" element={<CitizenLoginByPhone />} />
      <Route path="/citizenloginbyemail" element={<CitizenLoginByEmail />} />
      <Route path="/vendorregistration" element={<VendorRegistration />} />
      <Route path="/vendorpassword" element={<VendorPassword />} />
      <Route path="/vendorlogin" element={<VendorLogin />} />
      <Route
        path="/vendoremailverification"
        element={<VendorEmailVerification />}
      />
      <Route
        path="/vendorphoneverification"
        element={<VendorPhoneVerification />}
      />
      <Route path="/vendordashboard" element={<VendorDashboard />} />
      <Route
        path="/vendordashboardtailwind"
        element={<VendorDashboardTailwind />}
      />
      <Route path="/vendorhelp" element={<VendorHelp />} />
      <Route path="/vendorverification" element={<VendorVerification />} />
      <Route path="/help" element={<Help />} />
      <Route path="/testhelp" element={<TestHelp />} />
      <Route path="/contentrouter" element={<ContentRouter />} />
    </Routes>
  );
}

export default App;
