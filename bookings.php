<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DTM-Bookings</title>
    <link rel="stylesheet" href="dtm-v2.css" />
    <link rel="icon" href="img/icon.jpeg" type="image/x-icon" />
  </head>
  <body>
    <div class="container">
    
  <?php include 'header.php'; ?>
      <main>
        <section id="booking">
          <h3>BOOKING PAGE</h3>

          <form action="" id="bookingForm" method="post">
            <div>
              <label class="booking-label" for="booking-fullname"
                >Full Name</label
              >
              <input
                class="booking-input"
                type="text"
                name="fullname"
                id="bookingFullname"
                placeholder="Mogul Explores"
                required
              />
            </div>

            <div>
              <label class="booking-label" for="booking-contact">Contact</label>
              <input
                class="booking-input"
                type="tel"
                name="phone"
                id="bookingContact"
                placeholder="+233 55 555 5555"
                required
              />
            </div>

            <div>
              <label class="booking-label" for="booking-email"
                >Email (optional)</label
              >
              <input
                class="booking-input"
                type="email"
                name="email"
                id="bookingEmail"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label class="booking-label" for="booking-equipment"
                >Choose Equipment</label
              >
              <?php include 'connect.php'; ?>
              <select name="booking-equipment" id="bookingEquipment" required>
                <option value="">--Choose--</option>
                <?php
     $result = $conn->query("SELECT id, name, type FROM equipment WHERE status = 'available'");
    while ($row = $result->fetch_assoc()) {
      echo "<option value='{$row['id']}'>{$row['name']} ({$row['type']})</option>";
    } 
  ?>
               <!--  <option value="bulldozer">Bulldozer</option>
                <option value="forklift">Forklift</option>
                <option value="grader">Grader</option>
                <option value="excavator">Excavator</option> -->
              </select>

              <?php
// filepath: [bookings.php](http://_vscodecontentref_/0)

include 'connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $equipment_id = $_POST['booking-equipment'];
    // ...save booking details to a bookings table (not shown here)...
    // Mark equipment as rented
    $conn->query("UPDATE equipment SET status = 'rented' WHERE id = $equipment_id");
}
?> 

            </div>

            <div>
              <label class="booking-label" for="start-date">Start Date</label>
              <input
                class="booking-input"
                type="date"
                name="start-date"
                id="startDate"
                required
              />
            </div>
            <div>
              <label class="booking-label" for="end-date">End Date</label>
              <input
                class="booking-input"
                type="date"
                name="end-date"
                id="endDate"
                required
              />
            </div>

            <div>
              <label class="booking-label" for="project-location"
                >Project Location</label
              >
              <input
                class="booking-input"
                type="text"
                name="project-location"
                id="projectLocation"
                required
              />
            </div>

            <br />

            <button type="submit" id="btn-bookEquipment">Book Equipment</button>
          </form>
        </section>
      </main>

      <div
        id="bookingSummary"
        class="booking-summary"
        style="display: none"
      ></div>

   
         <?php include 'footer.php'; ?>
    </div>
    <script src="dtm-v2.js"></script>
  </body>
</html>

