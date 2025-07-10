
const showMoreBtn = document.getElementById("showMore");
const serviceGrids = document.getElementById("serviceGrids");

showMoreBtn.addEventListener("click", () => {
    serviceGrids.classList.add('show-all');
    showMoreBtn.style.visibility = "hidden";
});


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}