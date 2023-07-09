// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1ivztYskNwBTD1MAaSO9dvhXZsDLl2FU",
  authDomain: "signup-c1d77.firebaseapp.com",
  projectId: "signup-c1d77",
  storageBucket: "signup-c1d77.appspot.com",
  messagingSenderId: "1088773483742",
  appId: "1:1088773483742:web:50cd2476cd8f1a0245264f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const btn=document.getElementById("login")
btn.addEventListener("click",()=>{

 const  email =document.getElementById("email2").value;
 const  password =document.getElementById("password2").value;

 
 signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
     // Signed in 
     const user = userCredential.user;
     window.location.href="./quizz.html"
     // ...
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     alert(errorMessage)
     alert(errorCode)

   });

})
// Initialize Firebase