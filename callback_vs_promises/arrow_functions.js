/* Function callbacks and arrow notation 
All of the forEach calls are identical */

let animals = ['Bird', 'Whale', 'Zebra']

// Using a callback function
animals.forEach( function(animal)  {
    console.log(animal)
})

// Using a callback function, written in arrow notation
// This is equivalent to the code above, but is more concise 
animals.forEach( (animal) => {
    console.log(animal)
})

// If there is only one parameter to the callback function, can omit the parenthesis
animals.forEach( (animal) => {
    console.log(animal)
})

// If there's only one statement in the callback function, can omit the { } too
animals.forEach( (animal) => 
    console.log(animal)
)

// Or can be even more concise - remember this only works 
// for a single line in the callback function
animals.forEach( (animal) =>  console.log(animal) )




