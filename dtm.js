
const hiddenServices = document.querySelector(".hiddenServices");
hiddenServices.style.display = 'none';

const showServices = document.querySelector(".btn-otherServices");
showServices.addEventListener("click", () => {
    hiddenServices.style.display = "grid";
    showServices.style.visibility = "hidden";
})