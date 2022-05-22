import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {loginInput, emailInput, passwordInput, regButton} from "./consts.js";
import {
  getAuth,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
  get, 
  update
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
const db = getDatabase(app);
const auth = getAuth();



const createAccount = async () => {
  const regLogin = loginInput.value;
  const regEmail = emailInput.value;
  const regPassword = passwordInput.value;
  set(ref(db, "users/" + regEmail.replace(".", "")), {
    email: regEmail.replace(".", ""),
    password: regPassword,
    username: regLogin,
  });

 

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      regEmail,
      regPassword
    );
    document.location = "start.html";
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  }
};

regButton.addEventListener("click", createAccount);