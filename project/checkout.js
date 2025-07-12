import {products} from './main.js';
import {cart} from './cart.js';
export const container = document.querySelector('.container');
cart.forEach((item) => {
    const productName = item.productName;
    let matchingface;
    let create = '';
    products.forEach((product) => {
        if(productName === product.name){
            matchingface = product;
        }
        if(matchingface){
            create += `
             <div class="item">
            <div class="image">
                <img src="${matchingface.image}">
            </div>
            <div class="name">${matchingface.name}</div>
            <div class="model">${matchingface.model}</div>
            <div class="price">${matchingface.price}</div>
        </div>`
        }

    });
});

