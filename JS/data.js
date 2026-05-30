//INDEX PAGE LOGIC
function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    //ADDING ZERO LEFT IF NUMBERS ARE LESS THAN 10
    /*String (variable) converty number into string  because padStart() 
    works on string only but padStart(2, '0') it tells browser that make sure that this string has length of 2 
    if not add string "0" left side eg: "5" will be "05"*/
    hours = String(hours).padStart(2,'0');
    minutes = String(minutes).padStart(2,'0');
    seconds = String(seconds).padStart(2,'0');

    //${hours} means put variable here (weka variable hapa)
    /* backtick(`) chin ya text inside ${} you can put variables, calculations and expression*/ 
    const time = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").innerHTML = `<h1 class="head-clock">${time}</h1>`;
}
//Run every seconds.
setInterval(updateClock,1000);
//Start immediately.
updateClock();

//Combination objecct {} and array[]
const flights = [
    {
        id: 1, from: "Dar es Salaam", 
        to: "Nairobi", time: "10:00 AM", 
        price: 250000
    }, 
    {
        id: 2, from: "Dar es Salaam", 
        to: "Dubai", time: "10:00 PM", 
        price: 1200000
    },
    {
        id: 3, from: "Mwanza", 
        to: "Arusha", time: "02:00 PM", 
        price: 150000
    }
];

//DISPLAY FLIGHTS
function displayFlights(data){
    const list = document.getElementById("flightList");
    list.innerHTML = "";

    data.forEach(flight =>{
        //+= it adds several lists of flights
        list.innerHTML += `
        <div class= "flight-card">
        <h3> ${flight.from} ➡️ ${flight.to}</h3>
        <p> Price: TZS ${flight.price}</p>
        <button onclick= "bookFlight(${flight.id})">Book Now </button>
        </div>`;
    });
}

//SEARCH FUNCTION
function searchFlights(){
    const from = document.getElementById("from").value.toLowerCase();
    const to = document.getElementById("to").value.toLowerCase();
    const filtered = flights.filter(f =>f.from.toLowerCase().includes(from) && f.to.toLowerCase().includes(to));
    displayFlights(filtered);
}

//STORE SELECTED FLIGHT TEMPORARY
function bookFlight(id){
    const selectedFlight = flights.find(f => f.id === id);

    //Save temporarily
    localStorage.setItem("selectedFlight", JSON.stringify(selectedFlight));
    //navigate to the booking page
    window.location.href = "booking.html";
}
//LOAD ALL FLIGHTS ON START
displayFlights(flights);

 //CODE FOR SLIDE SHOW OF PICTURES
 const slides = document.querySelectorAll(".slide-show img");
 let index = 0;
 function showSlide() {
     slides.forEach(slide =>{
         slide.classList.remove("active");
     });
     index++;

     if(index >= slides.length){
         index = 0;
     }
     slides[index].classList.add("active");
 }
 setInterval(showSlide, 3000);