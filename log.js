import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { logEmailInput, logPasswordInput, logButton } from "./consts.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

import {
  getDatabase,
  ref,
  set,
  get,
  update,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyA9SHAbyOkqZ6zc22UgRCjnq-WDmKbpszw",
    authDomain: "myproject-4e14b.firebaseapp.com",
    projectId: "myproject-4e14b",
    storageBucket: "myproject-4e14b.appspot.com",
    messagingSenderId: "771130468719",
    appId: "1:771130468719:web:94f26da9f7c85ccbea209a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase(app);

const logInAccount = async () => {
  const logEmail = logEmailInput.value;
  const logPassword = logPasswordInput.value;

  signInWithEmailAndPassword(auth, logEmail, logPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      document.location = "start.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

logButton.addEventListener("click", logInAccount);