let billAmount;
function calculateTip (billAmount) {
    return billAmount * .20;
}

function getBillTotal (billAmount) {
    return billAmount + calculateTip(billAmount);
}

console.log(calculateTip(500));

console.log(getBillTotal(1000));