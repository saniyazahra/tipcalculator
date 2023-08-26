let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    let billAmount = document.getElementById('bill_amount').value;
    let tipparcentage = document.getElementById('tip_parcentage').value;
    let tipAmount = document.getElementById('tip_amount').value = billAmount / tipparcentage;

})

