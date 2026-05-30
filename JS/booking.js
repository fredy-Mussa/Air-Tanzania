//LOAD SELECTED FLIGHT ON BOOKING PAGE
if(window.location.pathname.includes("booking.html")){
    selectedFlight = JSON.parse(localStorage.getItem("selectedFlight"));

    const info = document.getElementById("flightInfo");
    if(selectedFlight && info){
        info.innerHTML = `
        <div class="flight-card">
        <h2> Flight-Info </h2>
        <h3>${selectedFlight.from} ➡️ ${selectedFlight.to}</h3>
        <p> Time: ${selectedFlight.time}</p>
        <p>Price: TZS ${selectedFlight.price}</p>
        </div>`;
    }
}

//CONFIRM BOOKING
let confirmButton = document.getElementById("btn");
confirmButton.addEventListener("click", function confirmBooking(){
    const name = document.getElementById("name").value;
    const pnone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    if(!name || !phone || !email){
        alert("Please fill all inputs");
        return;
    }
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const newBooking ={id: Date.now(), flight: selectedFlight,seat: selectedSeat, name, phone, email};
    bookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    alert("Booking successfully");
    window.location.href = "dashboard.html";
});

// CREATE SEAT MAP NEW
let selectedSeat = null;
function generateSeats() {
    const seatMap = document.getElementById("seatMap");
    if (!seatMap){
        return;
  } 
  seatMap.innerHTML = "";

  for (let i = 1; i <= 20; i++) {
    let seat = document.createElement("button");
    seat.innerText = i;
    seat.classList.add("seat");
    
    seat.onclick = () => {
      selectedSeat = i;
      document.getElementById("selectedSeat").innerText =
        "Selected Seat: " + i;
    };
    seatMap.appendChild(seat);
  }
}
// Running only on booking page
if (window.location.pathname.includes("booking.html")) {
  generateSeats();
}
