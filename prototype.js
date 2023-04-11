class Person {
    constructor(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods, family) {
        this.firstName = firstName
        this.lastName = lastName
        this.favoriteColor = favoriteColor
        this.favoriteFoods = favoriteFoods
        this.favoriteNumber = favoriteNumber
        this.family = [];
       
    }
}
let neal = new Person('Neal', 'deGrasse Tyson', 'Green', 4, ['broccoli', 'tomato', 'fries'])
let fam = new Person;
Person.prototype.fullName = function () {
    return this.firstName + ' ' + this.lastName;
}
Person.prototype.addToFamily = function(fam) {
    return this.family.push(fam);
 }

Person.prototype.toString = function () {
    return this.fullName() + ', Favorite Color: ' + this.favoriteColor + ', Favorite Number: ' + this.favoriteNumber;
}

console.log(neal.fullName());

console.log(neal.toString());

console.log(neal.family);

console.log(neal.addToFamily('Josh'));

console.log(neal.family);

console.log(neal.addToFamily('Peter'));

console.log(neal.family);

console.log(fam instanceof Person);



