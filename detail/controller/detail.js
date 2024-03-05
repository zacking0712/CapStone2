var numberSneaker=1;
var priceSneaker=0;
var quantitySneaker=0;
var totalSize=0;
function getDataJson(){
    var promise=axios({
        url:'https://shop.cyberlearn.vn/api/Product',
        method:"GET",
    });
    promise.then(function(res){
        console.log(res);
    }).catch(function(err){
        console.log(err);
    });
}
getDataJson();
function renderDataSneakerRelate(arr){
    var content="";
    for(var i=0 ;i<arr.length;i++){
        var item=arr[i];
        console.log(item.image);
        content+=`<div class="item_sneaker">
        <div class="inforSneaker">
          <img src="${item.image}">
          <p>${item.name}</p>
          <p>${item.shortDescription}</p>
        </div>
        <div class="buySneaker">
          <button onclick="renderDetailProduct('${item.id}')">Buy now</button>
          <div class="amount">
            <span>${item.price}</span>
          </div>
        </div>
      </div>`;
    };
    document.querySelector(".content_relate").innerHTML=content;
};
function renderDetailProduct(str){
    numberSneaker=1;
    var promise =axios({
        url:`https://shop.cyberlearn.vn/api/Product/getbyid?id=${str}`,
        method:"GET",
    });
    promise.then(function(res){
        var item=res.data.content;
        priceSneaker=item.price;
        quantitySneaker=item.quantity;
        console.log(item);
        // console.log(priceSneaker);
        var content=`<div class="left_product">
        <img src=${item.image}>
      </div>
      <div class="right_product">
        <div class="infor_Product">
          <h2>${item.name}</h2>
          <p>${item.description}<p>
        </div>
        <div class="option_SizeProduct">
          <h4>Available size</h4>
          <div class="chooseSize">
          </div>
        </div>
        <div class="addToCart">
          <h2 class="priceSneaker">${item.price}</h2>
          <div class="chooseNumber">
            <button onclick="handelPlusOrMinus(1)">+</button>
            <span class="numberSneaker">1</span>
            <button onclick="handelPlusOrMinus(-1)">-</button>
          </div>
          <button class="addCart">Add to cart</button>
        </div>
      </div>`;
        document.querySelector(".content_Product").innerHTML=content;
        var contentSize="";
        for(var i=0;i<item.size.length;i++){
            totalSize=i;
            contentSize+=`<button id="${i}" onclick="changeColorButton(${i})">${item.size[i]}</button>`;
        }
        document.querySelector(".chooseSize").innerHTML=contentSize;
        renderDataSneakerRelate(item.relatedProducts);
    }).catch(function(err){
        console.log(err);
    })
};
renderDetailProduct(1);
// var strPrice=document.querySelector(".priceSneaker").innerHTML;
function handelPlusOrMinus(str){
  // console.log(priceSneaker);
  var price=0;
  var strNumberSneaker="",strPrice="";
  if(str==1){
    numberSneaker+=1;
  }
  if(str==-1){
    numberSneaker-=1;
  }
  if(numberSneaker<=0) numberSneaker=1;
  if(numberSneaker>quantitySneaker) numberSneaker=quantitySneaker;
  price=priceSneaker*numberSneaker;
  strPrice=price.toString();
  strNumberSneaker=numberSneaker.toString();
  document.querySelector(".numberSneaker").innerHTML=strNumberSneaker;
  document.querySelector(".priceSneaker").innerHTML=strPrice;
}
function changeColorButton(index){
  var str=index.toString();
  document.getElementById(str).setAttribute("style","background-color:pink");
  for(var i=0;i<=totalSize;i++){
    var strIndex=i.toString();
    if(i!=index){
      document.getElementById(strIndex).setAttribute("style","background-color:#EFEFEF");
    }
  }
}
