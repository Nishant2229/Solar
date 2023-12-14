import React from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { initReactI18next } from "react-i18next";
import { AuthProvider } from "./Context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import i18next from "i18next";
import App from "./App";
import "./index.css";

i18next.use(initReactI18next).init({
  resources: {
    hi: {
      translation: {
        LANGUAGE: "ENGLISH",
        LOGIN: "लॉगिन",
        LOGOUT: "लॉग आउट",
        CM: "चलिए साथ मिलकर सोलर ऊर्जा की ताकत को इंदौर के लिए जगाएं",
        MAYOR: "चलिए हम साथ मिलकर एक पर्यावरणीय भविष्य की ओर कदम बढ़ाएं।",
        CITIZEN: "ग्राहक",
        VENDOR: "विक्रेता",
        REGISTER: "पंजीकरण",
      },
    },
    en: {
      translation: {
        LANGUAGE: "हिन्दी",
        LOGIN: "Log In",
        LOGOUT: "LOGOUT",
        CM: "Let's Together Unlock the Power of Solar energy for Indore",
        MAYOR:
          "Let's Take a step towards a Sustainable future today with Har Ghar Solar",
        CITIZEN: "Citizen",
        VENDOR: "Vendor",
        REGISTER: "Register now",
      },
    },
  },
  lng: "hi",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <AuthProvider>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </AuthProvider>
  </BrowserRouter>
);

reportWebVitals();
