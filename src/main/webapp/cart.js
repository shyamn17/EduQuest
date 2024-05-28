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
        image: 'https://www.prakalpana.com/wp-content/uploads/2022/05/43.jpg',
        price: 3899
    },
    {
        id: 2,
        name: 'MEAN FULL STACK',
        image: 'https://www.fingent.com/wp-content/uploads/Mean-Stack-1024x439-1.jpg',
        price: 4099
    },
    {
        id: 3,
        name: 'MERN FULL STACK',
        image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/275850362/original/0e4375ec5123abce3b8a7a0a037ac3b6bd16ea50/develop-full-stack-mern-stack-web-application-using-react.jpg',
        price: 3099
    },
    {
        id: 4,
        name: 'AWS DEVOPS',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLFe3YWZ3ZmTtUd4E8Q7v4RtfEU2Tsc0_e5mYHruWT83ml76ALK3MatT3lsjAAaf07Kg&usqp=CAU',
        price: 5399
    },
    {
        id: 5,
        name: 'PYTHON FULL STACK',
        image: 'https://qicon.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-05-at-6.11.42-PM.jpeg',
        price: 4399
    },
    {
        id: 6,
        name: 'AI & MACHINE LEARNING',
        image:'https://www.indiumsoftware.com/wp-content/uploads/2022/08/14-Ai-Ml-Forecasts-and-Trends-blog-cover.jpg',
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
