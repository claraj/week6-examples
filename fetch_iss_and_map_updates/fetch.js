var url = 'https://api.wheretheiss.at/v1/satellites/25544'

var issLat = document.querySelector('#iss-lat')
var issLong = document.querySelector('#iss-long')
var time = document.querySelector('#time')

var issMarker  // Leaflet marker 
var update = 10000  // 10 seconds 

var map = L.map('iss-map').setView([0, 0], 1)  // Center at 0, 0 and max zoom out

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map)

iss()   // initial call to function
setInterval(iss, update)  // Call the iss function every update seconds


var icon = L.icon({
    iconUrl: 'iss.png',
    iconSize: [50, 50],
    iconAnchor: [25, 25]
})

function iss() {
    fetch(url)
        .then( res => res.json())
        .then( issData => {
            console.log(issData)
            let lat = issData.latitude
            let long = issData.longitude
            issLat.innerHTML = lat
            issLong.innerHTML = long

            if (!issMarker) {
                issMarker = L.marker([lat, long], {icon: icon}).addTo(map) // Create the marker 
            } else {
                issMarker.setLatLng([lat, long]) // Already exists - move to new location
            }

            // Update the time element to the current date and time 
            let date = Date()
            time.innerHTML = date

        })
        .catch( err => {
            console.log(err)
        })
}




