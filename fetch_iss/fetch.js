
let url = 'http://api.open-notify.org/iss-now.json'

let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')

fetch(url)
    .then(res => res.json())
    .then(resJson => { 
        console.log(resJson) 
        let issPosition = resJson.iss_position
        let lat = issPosition.latitude
        let long = issPosition.longitude
        issLat.innerHTML = lat 
        issLong.innerHTML = long
    })
