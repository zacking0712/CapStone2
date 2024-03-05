const getEle = (id) => document.getElementById(id);

import { Service } from '../services/shoesservice.js';
import { CartItem } from '../model/cartItem.js';
import { Product } from '../model/product.js';

const service = new Service();
let cart = [];

function renderList(){
  let content = '';
  shoesList.forEach((ele) => {
    content += ` 
    <div class="col-lg-3 col-md-6">
        <div class="card text-black h-100">
            <div class="content-overlay"></div>
            <img src=${ele.img} class="card-img" alt="Shoes Image" />
            <div class="card-body">
                <div class="text-center">
                    <h5 class="card-title pt-3">${ele.name}</h5>
                    <span class="text-muted mb-2">$${ele.shortDescription}</span>          
                </div>    
                <button type="button" class="btn btn-block w-50" onclick ="btnAddToCart('${ele.id}')">Buy now</button>
            </div>
        </div>
    </div>`;
  });
  getEle('shoesList').innerHTML = content;
  console.log(content);
};

