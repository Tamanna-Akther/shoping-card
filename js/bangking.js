// handle deposite button event handler  
document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log('deposit button click');
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    // inpute tag e .value likhth hoi 
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
    // console.log(depositAmount);
    // main e amount add hosse kina tha check kora ar total amount dekhar jonno
    const depositTotal = document.getElementById('deposit-total');
    const currentDepositText = depositTotal.innerText;
    const currentDepositAmount = parseFloat(currentDepositText);
    // parse 2 babe kora jai integer ar float
    const newDepositTotal = parseFloat(currentDepositAmount) + newDepositAmount;
    // input chara onno kunu tag e innerText likhthe hoi
    depositTotal.innerText = newDepositTotal;

    // (previous ba current word ta ek oi) ei linta sudu bujar jonno lekha hoise
    // deposit er update account balance mane hosse ja rakhbe tha add hobe
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const currentBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = currentBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear the deposit input field
    depositInput.value = '';
    // ager je taka ache thar sathe noton taka add hoye total dekhabe
    
    
});



// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function(){
    // console.log('withdraw clicked');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newwithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newwithdrawAmount);
    // set withdraw total 
    const withdrawTotal = document.getElementById('Withdraw-total');
    const currentWithdrawText = withdrawTotal.innerText;
    const currentWithdrawTotal = parseFloat(currentWithdrawText);
    const newwithdrawTotal = currentWithdrawTotal + newwithdrawAmount;
    withdrawTotal.innerText = newwithdrawTotal;
    // withdraw er update account balance balance mane hosse ja nibe tha kombe maina balance theke
    const balanceTotal = document.getElementById('balance-total');
    const currentBalanceText = balanceTotal.innerText;
    const currentBalanceTotal = parseFloat(currentBalanceText);
    const newBalanceTotal = currentBalanceTotal - newwithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear withdraw input field
    withdrawInput.value = '';
});