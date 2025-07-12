import {cart} from './cart.js';
import {container} from './checkout.js';
const products = [{
    image : 'rolls-royce-1.jpeg',
    name : 'Rolls Royce Phantom',
    model : '2020',
    price : '\u208910 cr',
},
{
    image : 'rolls-royce-2.png',
    name : 'Rolls Royce Ghost',
    model : '2023',
    price : '\u208912 cr',
},
{
    image : 'rolls-royce-3.png',
    name : 'Rolls Royce Classic',
    model : '2025',
    price : '\u208915 cr',
}
];
let generateHtml = '';
products.forEach((product) => {
    generateHtml += 
      ` <div class="item">
            <div class="image">
                <img src="${product.image}">
            </div>
            <div class="content">
                <h3>${product.name}</h3>
                <h4>Model : ${product.model}</h4>
                <h4>&#8377;${product.price}</h4>
                <button class="add-to-cart" data-product-name="${product.name}">Add-to-cart</button>
            </div>
        </div>`;
});
document.querySelector('.js-main-header').innerHTML = generateHtml;
document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const productName = button.dataset.productName;
        let matchingItem;
        cart.forEach((item) => {
            if(productName === item.productName){
                matchingItem = item;
            }
            if(matchingItem) {
                matchingItem.quantity += 1;
            }
            else {
                cart.push({
                    productName : productName,
                    quantity : 1,
                });
            }
        });

    });
});
container.innerHTML = create;