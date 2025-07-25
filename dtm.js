fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    const toggleMenuEl = document.getElementById("toggleMenu");
    const mainNav = document.getElementById("mainNav");

    toggleMenuEl.addEventListener("click", () => {
      mainNav.classList.toggle("active");
    });
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
