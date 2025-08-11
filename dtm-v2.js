
document.addEventListener("DOMContentLoaded", function () {
  const toggleMenuEl = document.getElementById("toggleMenu");
  const mainNav = document.getElementById("mainNav");
  if (toggleMenuEl && mainNav) {
    toggleMenuEl.addEventListener("click", () => {
      mainNav.classList.toggle("active");
    });
  }

  const showMoreBtn = document.getElementById("showMore");
  const serviceGrids = document.getElementById("serviceGrids");
  if (showMoreBtn && serviceGrids) {
    showMoreBtn.addEventListener("click", () => {
      serviceGrids.classList.add("show-all");
      showMoreBtn.style.visibility = "hidden";
    });
  }

  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("Form submitted!"); // Add this line

      const customer = document.getElementById("bookingFullname").value;
      const contact = document.getElementById("bookingContact").value;
      const equipment = document.getElementById("bookingEquipment").value;
      const startDate = new Date(document.getElementById("startDate").value);
      const endDate = new Date(document.getElementById("endDate").value);
      const location = document.getElementById("projectLocation").value;

      const duration = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;

      if (duration <= 0) {
        alert("End Date must come after start Date");
        return;
      }
      const dailyRate = 300;
      const totalCost = duration * dailyRate;

      const summary = `
        <h3>Booking Summary</h3>
        <p><strong>Customer:</strong> ${customer}.</p>
        <p><strong>Contact:</strong> ${contact}.</p>
        <p><strong>Equipment Type:</strong> ${equipment}.</p>
        <p><strong>Location:</strong> ${location}.</p>
        <p><strong>Duration:</strong> From: ${startDate.toDateString()} <em>to</em> ${endDate.toDateString()}. (${duration} days).</p>
        <p><strong>TotalCost:</strong> GHS ${totalCost.toLocaleString()}.</p>
      `;

      document.getElementById("bookingSummary").style.display = "block";
      document.getElementById("bookingSummary").innerHTML = summary;

      this.reset();
    });
  }
});
