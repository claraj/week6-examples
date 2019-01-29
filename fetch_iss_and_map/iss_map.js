
let url = 'http://api.open-notify.org/iss-now.json'

let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')

let map = L.map('iss-map').setView([0, 0], 1)  // Center at 0, 0 and max zoom out
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 7,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2xhcmFsIiwiYSI6ImNqcmdwenViYTAwcHQ0Ym5yYmZ1Z3E2bjgifQ.QQfUvVaqPsWb_jJbP2gvHg'
}).addTo(map)

fetch(url)
    .then(res => res.json())
    .then(resJson => {
        console.log(resJson)
        let issPosition = resJson.iss_position
        let lat = issPosition.latitude
        let long = issPosition.longitude
        issLat.innerHTML = lat
        issLong.innerHTML = long

        let issMarker = L.marker([lat, long]).addTo(map)
    })
