const getEle = (id) => document.getElementById(id);

import { Service } from '../services/shoesservice.js';
import { CartItem } from '../model/cartItem.js';
import { Product } from '../model/product.js';

const service = new Service();
let cart = [];

function renderList() {
  let promise = axios({
    url: '../../admin/data/sneaker.json',
    method: "GET",
  });

  promise
    .then(function (res) {
      console.log(res)
      // Hiển thị giày
      // let id_shoes = document.querySelectorAll('.shoes'); //Sai vì chưa có class .shoes nao tren html 
      // Div chứa danh sách sản phẩm cần render
      let divShoesList = document.querySelector('#shoesList')
      console.log(divShoesList)
      // Danh sách các sản phẩm từ API
      let arrShoes = res.data.content
      let content = ""
      // Render danh sách giày từ API
      for (const shoes of arrShoes) {
        let shoesId = shoes.id;
        console.log(shoesId);
        // console.log(shoes);
        content += `
        <div class="col-lg-3 col-md-6">
                  <div class="card text-black h-100">
                       <div class="content-overlay"></div>
                       <img src=${shoes.image} class="card-img" alt="Shoes Image" />
                       <div class="card-body">
                           <div class="text-center">
                                 <h5 class="card-title pt-3">${shoes.name}</h5>
                               <span class="text-muted mb-2">$${shoes.shortDescription}</span>          
                           </div>   
                           <div class="hienthitien d-flex justify-content-center flex-column align-items-center">
                           <span class="my-3" > ${shoes.price} $ </span>
                            <a href='../../detail/view/detail.html?product=${shoesId}' class="btn btn-block w-50 btnPname" >Buy now</a>
                            
                           </div> 
                       </div>
                   </div>
               </div>
        
      </div>`
      }
      divShoesList.innerHTML = content


    })
    .catch(function (error) {
      console.log(error);
    });
}

renderList();

