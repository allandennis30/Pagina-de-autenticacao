
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDzp3ONnMvyNbUsWgWqJLkj43om9C43NA0",
  authDomain: "autenticacao-3dc72.firebaseapp.com",
  projectId: "autenticacao-3dc72",
  storageBucket: "autenticacao-3dc72.appspot.com",
  messagingSenderId: "804398137993",
  appId: "1:804398137993:web:2864e7849d54fc13e37c58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

document.getElementById('showReg-btn').addEventListener('click', function(){
    document.getElementById('register-div').style.display="inline";
    document.getElementById('login-div').style.display="none";
    
});
document.getElementById('backlogin-btn').addEventListener('click', function(){
    document.getElementById('register-div').style.display="none";
    document.getElementById('login-div').style.display="inline";
    
});

document.getElementById('login-btn').addEventListener('click', function(){
    const loginEmail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    document.getElementById('result-box').style.display="inline";
    document.getElementById('login-div').style.display="none";
    document.getElementById('result').innerHTML="Bem-Vindo de volta!<br>"+loginEmail+"Login efetuado com sucesso";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById('result-box').style.display="inline";
    document.getElementById('login-div').style.display="none";
    document.getElementById('result').innerHTML="Email ou senha estão incorretos <br>"+errorMessage;
  });
});
  //Logica do cadastro 
  document.getElementById('reg-btn').addEventListener('click', function(){
    const registerEmail = document.getElementById("register-email").value;
    const registerPassword = document.getElementById("register-password").value;

    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    document.getElementById('result-box').style.display="inline";
    document.getElementById('register-div').style.display="none";
    document.getElementById('result').innerHTML="Cadastro Realizado com Sucesso! <br>"+registerEmail;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById('result-box').style.display="inline";
    document.getElementById('register-div').style.display="none";
    document.getElementById('result').innerHTML="Email ou senha estão incorretos<br>"+errorMessage;
  });
});
//Logout
document.getElementById('log-out-btn').addEventListener('click', function(){

  signOut(auth).then(() => {
    // Sign-out successful.
    document.getElementById('result-box').style.display="none";
    document.getElementById('register-div').style.display="inline";
    
  }).catch((error) => {
    // An error happened.
    document.getElementById('result').innerHTML="Email ou senha estão incorretos<br>"+errorMessage;
  });

});