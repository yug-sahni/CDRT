const items = [
    "Earthquake", "Volcanic Eruption", "Tsunami", "Hurricane", "Tornado",
    "Flood", "Drought", "Landslide", "Wildfire", "Extreme Heat",
    "Avalanche", "Severe Storm"
];


const itemList = document.getElementById('itemList');
const selectedItem = document.getElementById('selectedItem');

function getUserLocation() {
    // Check if Geolocation is supported
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

let latitude, longitude;

function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log(latitude, longitude);
    
    // const locationBox = document.getElementById('locationBox');
    // locationBox.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}
getUserLocation();

items.forEach(item => {
    const listItem = document.createElement('div');
    listItem.textContent = item;
    listItem.addEventListener('click', () => {
        // alert(`You selected ${item}`);
        selectedItem.textContent = item;
        // Here you can add functionality to interact with the map
        toggleDropdown();
    });
    itemList.appendChild(listItem);
});

function toggleDropdown() {
    document.getElementById("itemList").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
// hello