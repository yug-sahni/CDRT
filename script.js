const items = [
    "Earthquake", "Volcanic Eruption", "Tsunami", "Hurricane", "Tornado",
    "Flood", "Drought", "Landslide", "Wildfire", "Extreme Heat",
    "Avalanche", "Severe Storm"
];


const itemList = document.getElementById('itemList');
const selectedItem = document.getElementById('selectedItem');

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