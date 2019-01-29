// For multiple scripts, wait for everthing to be loaded before running. 
// window.onload = issUpdater()

var issLat, issLong  // Page elements 
var map   // Leaflet map
var issMarker  // Leaflet marker 
var update = 5000


issLat = document.querySelector('#iss-lat')
issLong = document.querySelector('#iss-long')

map = L.map('iss-map').setView([0, 0], 1)  // Center at 0, 0 and max zoom out
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 7,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2xhcmFsIiwiYSI6ImNqcmdwenViYTAwcHQ0Ym5yYmZ1Z3E2bjgifQ.QQfUvVaqPsWb_jJbP2gvHg'
}).addTo(map)

iss()
setInterval(iss, update)  // Call the iss function every update seconds

function iss() {

    var url = 'http://api.open-notify.org/iss-now.json'
    fetch(url)
        .then(res => res.json())
        .then(resJson => {
            console.log(resJson)
            let issPosition = resJson.iss_position
            let lat = issPosition.latitude
            let long = issPosition.longitude
            issLat.innerHTML = lat
            issLong.innerHTML = long

            if (!issMarker) {
                // Create the marker 
                issMarker = L.marker([lat, long]).addTo(map)
            } else {
                // Marker already exists - move the marker
                issMarker.setLatLng([lat, long])
            }
        })
}

