/* 
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

  // Paste your Firebase config here
  const firebaseConfig = {
    apiKey: "AIza...your-key",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:1234567890:web:abcdefg"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Save db to global window (optional but useful)
  window.db = db;
  window.addDoc = addDoc;
  window.collection = collection;


 */


fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    const toggleMenuEl = document.getElementById("toggleMenu");
    const mainNav = document.getElementById("mainNav");

    toggleMenuEl.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    })
  });

fetch("footer.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("footer").innerHTML = data));

const showMoreBtn = document.getElementById("showMore");
const serviceGrids = document.getElementById("serviceGrids");

showMoreBtn.addEventListener("click", () => {
  serviceGrids.classList.add("show-all");
  showMoreBtn.style.visibility = "hidden";
});
