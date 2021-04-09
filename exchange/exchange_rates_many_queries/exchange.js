let url = 'https://api.ratesapi.io/latest?base=USD'

let dollarInput = document.querySelector('#dollars')
let targetCurrencySelect = document.querySelector('#target-currency')
let convertButton = document.querySelector('#convert')
let resultDisplay = document.querySelector('#result')

convertButton.addEventListener('click', function() {
    // how many dollars?  
    let dollars = dollarInput.value  // todo validation
    // what currency?
    let currency = targetCurrencySelect.value  // todo validation
    console.log(dollars, currency)

    fetch(url)
        .then( (response) => {
            // response is all the things from the server
            console.log(response)  // optional!
            // extract JSON
            let JSONPromise = response.json() // convert to javascript objects, array, whatever it is 
            return JSONPromise   // whatever this promise resolves into...
        })
        .then( function(data) {  //  ... ends up here
            console.log(data)
            // can you figure out the conversion?
            let allRates = data.rates  // {"CAD":1.563,"HKD":9.1412,"ISK":162.8,"PHP":57.137,"DKK":7.4408,"HUF":359.72,"CZK":27.035,"AUD":1.6472,"RON":4.876,"S...
            // currency is CAD, or HDK, ISK....
            let conversion = allRates[currency]
            let result = dollars * conversion  // math
            result = result.toFixed(3)
            resultDisplay.innerHTML = `${dollars} US Dollars is ${result} ${currency}`             // display result 
        })
        .catch( error => {
            console.log(error)
            alert('Sorry, unable to do conversion')
        })
})