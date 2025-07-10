//load header and footer files
fetch("header.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("header").innerHTML = data));

fetch("footer.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("footer").innerHTML = data));



const showMoreBtn = document.getElementById("showMore");
const serviceGrids = document.getElementById("serviceGrids");

showMoreBtn.addEventListener("click", () => {
    serviceGrids.classList.add('show-all');
    showMoreBtn.style.visibility = "hidden";
});

document.querySelector(".hamburger-icon").style.display = "none"