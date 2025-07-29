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

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("bookingFullname").value;
  const bookingContact = document.getElementById("bookingContact").value;
  const bookingEmail = document.getElementById("bookingEmail").value;
  const bookingEquipment = document.getElementById("bookingEquipment").value;
  const startDate = new Date(document.getElementById("startDate").value);
  const endDate = new Date(document.getElementById("endDate").value);
  const projectLocation = document.getElementById("projectLocation").value;

  const duration = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;

  if (duration <= 0) {
    alert("End date must come after  start date");
    return;
  }

  const dailyRate = 800;
  const totalCost = dailyRate * duration;

  const summary = `
  <h3>Booking Summary</h3>
<h4>Customer:</h4>
<p>${fullName}</p>

<h4>Contact:</h4>
<p>${bookingContact}</p>
<h4>Email:</h4>
<p>${bookingEmail || "N/A"}</p>
<h4>Equipment Type:</h4>
<p>${bookingEquipment}</p>
<h4>Location:</h4>
<p>${projectLocation}</p>
<h4>From:</h4>
<p>${startDate.toDateString()} to ${endDate.toDateString()} (${duration} days)</p>
<h4>EStimated Cost:</h4>
<p>GHS ${totalCost.toLocaleString()}</p>

<p style="color: green;">Your booking has been received. Thank You for Choosing Don Terrius Machinery!</p>
  `;

  const bookingSummary = document.getElementById("bookingSummary");

  bookingSummary.style.display = "block";
  bookingSummary.innerHTML = summary;

  this.reset();
});
