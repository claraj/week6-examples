let weatherUrl = 'https://api.weather.gov/gridpoints/MPX/116,72/forecast'

let weatherTable = document.querySelector('#weather-forecast')

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
    let forecastArray = weatherJson.properties.periods
    console.log(forecastArray)
    forecastArray.forEach( forecastPeriodData => {
        console.log(forecastPeriodData)    

        // Create a table row for this forecast period
        let tableRow = document.createElement('tr')

        // Create a td element for the period name, 
        // get the name from the JSON, set the innerHTML, add to the table row
        let periodNameTableData = document.createElement('td')
        let periodName = forecastPeriodData.name  // for example, "Friday" or "Friday Night"
        periodNameTableData.innerHTML = periodName
        tableRow.appendChild(periodNameTableData)

        // Create td for temperature and the unit temperature is measured in
        // The API can return American/Fahrenheit or metric/Celsius units, the default is Fahrenheit
        let temperatureTableData = document.createElement('td')
        let temperature = forecastPeriodData.temperature 
        let temperatureUnit = forecastPeriodData.temperatureUnit
        temperatureTableData.innerHTML = temperature + temperatureUnit
        tableRow.appendChild(temperatureTableData)

        // Icon
        let weatherIconTableData = document.createElement('td')
        let weatherIconImage = document.createElement('img')
        let weatherIconSource = forecastPeriodData.icon
        weatherIconImage.src = weatherIconSource
        // Add the image to the td 
        weatherIconTableData.appendChild(weatherIconImage)
        // Add the td (with the image inside it) to the table row 
        tableRow.appendChild(weatherIconTableData)

        // Detailed forecast description 
        let detailForecastTableData = document.createElement('td')
        let detailedForecast = forecastPeriodData.detailedForecast
        detailForecastTableData.innerHTML = detailedForecast
        tableRow.appendChild(detailForecastTableData)

        // Add the new row to the table
        weatherTable.appendChild(tableRow)
    })
}








