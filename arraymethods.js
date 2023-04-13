const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];

//Find a user named 'Jose'
const findJose = users.find(user => user.firstName == 'Jose');

console.log(findJose);

//Get an array of all the premium members
const premiumUsers = users.filter(user => user.isPremiumMember);

console.log(premiumUsers);

//Get an array of all the user last names
const lastNamelist = users.map(user => user.lastName);

console.log(lastNamelist);

//Get an array of the full names who have logged in more than 10 times
const loggedIn10Times = users.filter(user => user.logins > 10);
const UsersthatLoggedIn10Times = loggedIn10Times.map(loggedIn10Time => loggedIn10Time.firstName + ' ' + loggedIn10Time.lastName);

console.log(UsersthatLoggedIn10Times);

//Get the total number of logins for the list of users
const loginslist = users.map(user => user.logins);
const totalLogins = loginslist.reduce(function(login, total) {
    return total + login;
});

console.log(totalLogins);





  
