class Person {
    constructor(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods, family) {
        this.firstName = firstName
        this.lastName = lastName
        this.favoriteColor = favoriteColor
        this.favoriteFoods = favoriteFoods
        this.favoriteNumber = favoriteNumber
        this.family = [];
       
    }

    toString() {
        return this.fullName() + ', Favorite Color: ' + this.favoriteColor + ', Favorite Number: ' + this.favoriteNumber;
    }
}
let neal = new Person('Neal', 'deGrasse Tyson', 'Green', 4, ['broccoli', 'tomato', 'fries'])

Person.prototype.fullName = function () {
    return this.firstName + ' ' + this.lastName;
}
Person.prototype.addToFamily = function(fam) {
    return this.family.push(fam);
 }

console.log(neal.fullName());

console.log(neal.toString());

console.log(neal.family);

console.log(neal.addToFamily('Josh'));

console.log(neal.family);

console.log(neal.addToFamily('Peter'));

console.log(neal.family);





