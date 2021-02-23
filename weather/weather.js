const weatherUrl = 'https://api.weather.gov/gridpoints/MPX/116,72/forecast'

const weatherTable = document.querySelector('#weather-forecast')

fetch(weatherUrl)
    .then(response => response.json())
    .then( weatherJson => {
        displayWeatherTable(weatherJson)  // call a function to keep this code clearer 
    }).catch(error => {
        console.log(error)   // details in console for developer
        alert('Sorry, could not fetch the weather forecast')  // generic error to user
    })


function displayWeatherTable(weatherJson) {
    console.log(weatherJson)
    let forecasts = weatherJson.properties.periods
    console.log(forecasts)

    forecasts.forEach( forecast => {
        let day = forecast.name
        let temp = forecast.temperature
        let detail = forecast.detailedForecast

        // create table row 
        let tableRow = document.createElement('tr')
        
        // cell for day, add to table row
        let dayTableCell = document.createElement('td')
        dayTableCell.innerHTML = day
        // tableRow.appendChild(dayTableCell)   // could add individually...
        
        // cell for temperature, add to table row
        let tempTableCell = document.createElement('td')
        tempTableCell.innerHTML = temp
        // tableRow.appendChild(tempTableCell)
        
        // cell for detailed forecast, add to table row
        let detailTableCell = document.createElement('td')
        detailTableCell.innerHTML = detail
        // tableRow.appendChild(detail)

        // Append a list of children to an element 
        tableRow.append(dayTableCell, tempTableCell, detailTableCell)  // or add all at once

        // append row to table 
        weatherTable.appendChild(tableRow)
        
    })
}