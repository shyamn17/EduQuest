let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
total.addEventListener('click', function(event) {
    event.preventDefault();
    window.open('https://razorpay.me/@shyam7164', '_blank');
});


let products = [
    {
        id: 1,
        name: 'JAVA FULL STACK',
        image: './Images/images\ \(1\).jpg',
        price: 3899
    },
    {
        id: 2,
        name: 'MEAN FULL STACK',
        image: './Images/A.png',
        price: 4099
    },
    {
        id: 3,
        name: 'MERN FULL STACK',
        image: './Images/MERN-Stack.jpeg',
        price: 3099
    },
    {
        id: 4,
        name: 'AWS DEVOPS',
        image:'./Images/AWS-DEVOPS-COMBO.jpeg',
        price: 5399
    },
    {
        id: 5,
        name: 'PYTHON FULL STACK',
        image: './Images/download.jpg',
        price: 4399
    },
    {
        id: 6,
        name: 'AI & MACHINE LEARNING',
        image:'./Images/AI-WITH-ADVANCED-DEEP-LEARNING.jpeg',
        price: 5899
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">₹${value.price+100}</div>
            <div class="price1">₹${value.price}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>₹ ${value.price}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText ="Pay Now ₹ " + `${totalPrice}`;
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}   

var div=document.querySelector('#sp');
let count = 86400;
        function Countdown() {
            const hours = Math.floor(count / 3600);
            const minutes = Math.floor((count % 3600) / 60);
            const seconds = count % 60;
            div.innerHTML = `${hours}h ${minutes}m ${seconds}s`;

            if (count > 0) {
                count--;
                setTimeout(Countdown, 1000);
            } else {
                div.innerHTML = "Offer has ended!";
            }
        }
        Countdown();
