function updateData(increasing, product, price){
    const inputButton = document.getElementById(product + '-number');
    let inputValue = inputButton.value;
    if(increasing == true){
        inputValue = parseInt(inputValue) + 1;
    }
    else if(inputValue > 0){
        inputValue = parseInt(inputValue) - 1;
    }
    inputButton.value = inputValue;
        // update case total 
    const total = document.getElementById(product + '-total');
    total.innerText = inputValue * price;
    totalTax();
};
document.getElementById('plus-button').addEventListener('click', function(){
    updateData(true, 'phone', 1219);
});
document.getElementById('minus-button').addEventListener('click', function(){
    updateData(false, 'phone', 1219);
});





document.getElementById('case-plus').addEventListener('click', function(){
    updateData(true, 'case', 59);
});
document.getElementById('case-minus').addEventListener('click', function(){
    updateData(false, 'case', 59);
});


function totalTax(){
    const phoneNumber = document.getElementById('phone-number').value;
    const phoneTotal = parseInt(phoneNumber) * 1219;
    const caseNumber = document.getElementById('case-number').value;
    const caseTotal = parseInt(caseNumber) * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 5;
    const total = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
};