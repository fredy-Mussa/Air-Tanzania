function loadBookings(){
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const list = document.getElementById("bookingsList");
    list.innerHTML = "";

    if(bookings.length === 0){
        list.innerHTML = "<p> NO Bookings Yet.</p>";
        return;
    }

    bookings.forEach(b =>{
        list.innerHTML +=  `
        <div class= "flight-card">
        <h3> ${b.flight.from} ➡️ ${b.flight.to}</h3>
        <p>Name: ${b.name}</p>
        <p>Phone: ${b.phone}</p>
        <p>Email: ${b.email}</p>
        <button onclick = "deleteBooking(${b.id})"> Delete</button>
        </div>
        `;
    });
}
function deleteBooking(id){
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings = bookings.filter(b => b.id !==id);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    loadBookings();
}

loadBookings();