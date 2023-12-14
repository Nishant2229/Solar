importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyBiej1U3hR1tPNZrl2RUnYiR-f_isjnywo",
  authDomain: "solar-project-react.firebaseapp.com",
  projectId: "solar-project-react",
  storageBucket: "solar-project-react.appspot.com",
  messagingSenderId: "595400404695",
  appId: "1:595400404695:web:768323f5ef2c7e07f58a92",
}; 

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
