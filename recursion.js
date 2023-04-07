function exponent(a, b) {
    if (b == 0) {
        return 1;
    } else {
      return a * (exponent(a, b-1));
    }
}

console.log(exponent(9, 4))
