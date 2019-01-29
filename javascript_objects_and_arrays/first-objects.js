
//Create an object. Use JSON syntax to specify variables and their values
let user = {username: 'Zoe', password: 'kittens'};

//Read data 
console.log(user.username)  // prints Zoe 

//Read data - another way
console.log(user['username'])  // prints Zoe 

let username = user.username // username = 'Zoe'

//Read data from object
console.log(user.password);

let password = user['password']  // password = 'kittens'

//Change data
user.password = 'zebras'
console.log(`New password is ${user.password}`)

user['password'] = 'armadillo'
console.log(`User password is now ${user.password}`)


// Read attribute that doesn't exist, does not error 
location = user.location  // no location attribute 
console.log(`User's location is ${location}`)  // User's location is undefined 


//Add another attribute - even though it's not defined in our object
user.email = 'zoe@zoe.com'

console.log(user.email)  // zoe@zoe.com

//Display all of the data in our object, as JSON
console.log(user)


