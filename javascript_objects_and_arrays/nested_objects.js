
//Create an object. Values can be strings, numbers, lists, other objects
var user = {
  username: 'Zoe',
  password: 'kittens',
  userid: 1,
  roles: ['user', 'admin'],   // roles value is an array
  contact: {                     // contact value is another object
    phone:'123-456-7890',      
    office:'T.1400'
  }
}

user.userid = 101  // Change userid 
console.log(user)

console.log('User roles are: ', user.roles)  // Print roles array
console.log('User roles are: ', user['roles'])  // Print roles array, other syntax
console.log('Users first role is ' + user.roles[0])   // First role 

// All of the user's roles
console.log('All the user roles are: ')
user.roles.forEach(function(role) {
  console.log(role)
})

user.contact.office = 'M.1234'   //Change office
console.log('New office is ' + user.contact.office)

console.log('User phone number is ' + user.contact.phone)  // Access nested values 

//Add another attribute - even though it's not defined in our object
user.email = 'zoe@minneapolis.edu'



console.log('Full user info\n' + user) // Nested objects display as [object Object]

// Print all of the data on one line
console.log('Full user info\n' + JSON.stringify(user))

// On multiple lines with 2 spaces of indentation
console.log('Full user info\n' + JSON.stringify(user, null, 2)) 


