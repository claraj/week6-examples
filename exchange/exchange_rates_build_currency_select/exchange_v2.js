let url = 'https://exchange-rates-1150.herokuapp.com/latest?base=USD'

let dollarInput = document.querySelector('#dollars')
let targetCurrencySelect = document.querySelector('#target-currency')
let convertButton = document.querySelector('#convert')
let resultDisplay = document.querySelector('#result')

let allRates  // will initialize with API response 

convertButton.disabled = true   // no conversion until ready 

// todo - challenge - can you a setInterval to make a new request every 20 minutes? 
// make request to get all the data first 

fetch(url)
    // .then( response => response.json())
    .then( (response) => {
        // response is all the things from the server
        console.log(response)  // optional! there's a lot of other items as well as the JSON
        // extract JSON
        let jsonPromise = response.json() // convert to javascript objects, array, whatever it is 
        return jsonPromise   // whatever this resolves into...
    })
    .then( function(data) {  //  ... ends up here
        console.log(data)  // just the JSON
        allRates = data.rates  // e.g. {"CAD":1.563,"HKD":9.1412,"ISK":162.8,"PHP":57.137,"DKK":7.4408,"HUF":359.72,"CZK":27.035,"AUD":1.6472,"RON":4.876,"S...
        makeCurrencyOptions(allRates)  // build options from rates data 
        convertButton.disabled = false  // enable convert button
        convertButton.addEventListener('click', function() {  // create event listener 
            convert()
        })
    })
    .catch( error => {
        console.log(error)
        alert('Sorry, unable to do conversion')
    })


function makeCurrencyOptions(rates) {
    // Create one option element for each currency name in rates

    targetCurrencySelect.innerHTML = ''  // clear any existing options
    for (currency in rates) {
        option = document.createElement('option')
        option.value = currency 
        option.innerHTML = currency
        targetCurrencySelect.appendChild(option)
    }
}

function convert() {
    // how many dollars?  
    let dollars = dollarInput.value  // todo validation
    // what currency?
    let currency = targetCurrencySelect['value']  // todo validation
    console.log(dollars, currency)
    let conversion = allRates[currency]  // object - the key is a variable, use [] 
    let result = conversion * dollars 
    result = result.toFixed(3)  // 3 decimal places
    resultDisplay.innerHTML = `${dollars} US Dollars is ${result} ${currency}`   // display result 
}