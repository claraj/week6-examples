// let factContainer = document.querySelector('#cat-facts')

// let url = 'https://catfact.ninja/fact'

// let facts = []

// // get 5 cat facts 

// fetchCatFact(url, 5)

// function fetchCatFact(url, factsRemaining) {

//     if (factsRemaining > 0)  {
//         fetch(url)
//         .then(response => response.json())
//         .then(json => {
//             fact = json.fact 
//             let factParagraph = document.createElement('p')
//             factParagraph.innerHTML = fact 
//             factContainer.appendChild(factParagraph)
//             fetchCatFact(url, factsRemaining-1)
//         })
//     }
// }


let factContainer = document.querySelector('#cat-facts')

let url = 'https://catfact.ninja/fact'

let promises = []

for (let x = 0; x < 5; x++) {
    promises.push(fetchCatFact(url))
}

Promise.all(promises).then( facts => {
    facts.forEach( fact => {
        let factParagraph = document.createElement('p')
        factParagraph.innerHTML = fact 
        factContainer.appendChild(factParagraph)
    })
})

function fetchCatFact(url) {
    
    return fetch(url).then(response => response.json()).then( data => {
        return data.fact   // this is what the promise will resolve to 
    })
}