let myArray = [];

function addCart() {
    let output = JSON.parse(localStorage.getItem('cart'))
    let itemName = document.getElementById('itemName').value;
    let itemPrice = document.getElementById('itemPrice').value;
    let id = document.getElementById('id').value;
    let a = {'id': id,
             'Name': itemName,
             'Price': itemPrice}
    output.push(a);
    localStorage.setItem('cart', JSON.stringify(output));   
}

function initializeCart() {
    if (localStorage.getItem('cart') === null) {
        localStorage.setItem('cart', myArray);
    } else {
        
     }
 }
initializeCart();

function removeItem(x) {
    let output = JSON.parse(localStorage.getItem("cart"));
        
    for (let i = 0; i < output.length; i++){
        if (output[i].id === x){
            localStorage.removeItem(output[i])
        }else{
    
        }
}
    localStorage.setItem('cart', JSON.stringify(output));
}

function displayCart() {
    console.log(JSON.parse(localStorage.getItem('cart')));
}

// const add = document.getElementById('addItemButton');
// add.addEventListener('click', addCart());

// const cartButton = document.getElementById('displayCartButton');
// cartButton.addEventListener('click', displayCart());