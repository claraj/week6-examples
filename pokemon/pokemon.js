let pokemonListUrl = 'https://pokeapi.co/api/v2/pokemon/'

let nextButton = document.querySelector('#next')
let pokemonList = document.querySelector('#pokemon-list')

getPokemon()

nextButton.addEventListener('click', function() {
    getPokemon()
})

function getPokemon() {

    pokemonList.innerHTML = ''   // clear previous data 

    if (pokemonListUrl) {

        fetch(pokemonListUrl)
            .then( response => response.json() )
            .then( data => {

                // store link to next set of results 
                pokemonListUrl = data.next 

                let list = data.results 
                list.forEach(pokemon => {
                    let li = document.createElement('li')
                    li.innerHTML = pokemon.name
                    pokemonList.appendChild(li)
                })
            })
            .catch( err => {
                console.log(err)
                alert('Sorry, can\'t fetch pokemon.')
            })
    } else {
        alert('No more Pokemon!')
    }
}

