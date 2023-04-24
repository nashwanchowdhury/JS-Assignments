let numbers1 = [1, 2, 3, 4];
let numbers2 = [5, 6, 7, 8];

let numbers = [...numbers1, ...numbers2];

//console.log(numbers);

let square = (x) => x * x;

//console.log(square(8));

const squares = numbers.map(x => square(x))

//console.log(squares);

let isEven = (x) => {
    if (x % 2 > 0) {
        return false;
    } else {
        return true;
    }

};

//console.log(isEven(9));

const evenSquares = squares.filter(x => isEven(x) == true);

//console.log(evenSquares);

let [ firstEvenSquare, secondEvenSquare ] = evenSquares;

//console.log(firstEvenSquare);
//console.log(secondEvenSquare);

console.log(`${numbers}, ${squares}, ${evenSquares}, ${firstEvenSquare}, ${secondEvenSquare}`)