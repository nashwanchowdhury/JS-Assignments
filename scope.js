function outer(){

    var a = 'Hello';
    var b = [1, 2, 3];
    console.log(a);
    console.log(b);
  
    function inner(a, b) {
        console.log(a);
        console.log(b);
        var a = 'Bye';
        var b = [4, 5, 6];
        console.log(a);
        console.log(b);
        b.push(7);
    }
  
    inner(a,b);
    console.log(a);
    console.log(b);
  }
  
  outer();

