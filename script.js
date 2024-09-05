const items = [
    "Earthquake", "Volcanic Eruption", "Tsunami", "Hurricane", "Tornado",
    "Flood", "Drought", "Landslide", "Wildfire", "Extreme Heat",
    "Avalanche", "Severe Storm"
];

const severities = [
    "Low", "Moderate", "High"
];

const auth = [
    "True", "False"
];

const itemList = document.getElementById('itemList');
const selectedItem = document.getElementById('selectedItem');

const severityList = document.getElementById('severityList');
const selectedSeverity = document.getElementById('selectedSeverity');

const authList = document.getElementById('authList');
const selectedAuth = document.getElementById('selectedAuth');

function getUserLocation() {
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
}

function showError(error) {
    switch (error.code) {
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

// Populate disaster type dropdown
items.forEach(item => {
    const listItem = document.createElement('div');
    listItem.textContent = item;
    listItem.addEventListener('click', () => {
        selectedItem.textContent = item;
        toggleDropdown('itemList');
    });
    itemList.appendChild(listItem);
});

// Populate severity dropdown
severities.forEach(severity => {
    const listItem = document.createElement('div');
    listItem.textContent = severity;
    listItem.addEventListener('click', () => {
        selectedSeverity.textContent = severity;
        toggleDropdown('severityList');
    });
    severityList.appendChild(listItem);
});

// Populate authority list dropdown
auth.forEach(authority => {
    const listItem = document.createElement('div');
    listItem.textContent = authority;
    listItem.addEventListener('click', () => {
        selectedAuth.textContent = authority;
        toggleDropdown('authList');
    });
    authList.appendChild(listItem);
});

// Toggle dropdown visibility
function toggleDropdown(id) {
    document.getElementById(id).classList.toggle('show');
}

// Handle clicks outside the dropdown
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    getUserLocation();
};
