const payment = document.querySelector('#pay');
const select = document.querySelector('.sel')

payment.addEventListener('click',() => (
    alert("Paid"),
    select.innerHTML=`<a href="./tracking.html"><button class="ctn-btn">Track Your Order</button></a>`
));