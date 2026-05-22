let apiLink = "https://fakestoreapi.com/products/";

let loading = document.querySelector(".loading");
let error = document.querySelector(".error");
let search = document.querySelector(".search");
let card = document.querySelector(".card");

let allProducts = [];
let cart = [];
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartCount = document.querySelector(".cart-count");
let totalAmount = document.querySelector(".total");


fetch(apiLink)

  .then((jsonData) => {
    return jsonData.json();
  })

  .then((JsData) => {

    loading.style.display = "none";

    allProducts = JsData;

    showProducts(allProducts);

  })

  .catch(() => {

    loading.style.display = "none";

    error.innerText = "Error Fetching Data";

  });


// SHOW PRODUCTS
function showProducts(products){

  card.innerHTML = "";

  products.forEach((c) => {

    let inCard = document.createElement("div");

    inCard.innerHTML = `
      <h1>${c.title.slice(0,20)}...</h1>

      <img src="${c.image}"/>

      <p>${c.description.slice(0,50)}...</p>

      <h2>$ ${c.price}</h2>

      <button onclick="addToCart(${c.id})">
        Add To Cart
      </button>

      <button onclick="removeFromCart(${c.id})">
        Remove
      </button>
    `;

    card.append(inCard);

  });

}


// SEARCH
search.addEventListener("keyup", () => {

  let searchValue = search.value.toLowerCase();

  let filteredProducts = allProducts.filter((product) => {

    return product.title.toLowerCase().includes(searchValue);

  });

  showProducts(filteredProducts);
  
  if(filteredProducts.length > 0){

    setTimeout(() => {

      search.value = "";

      showProducts(allProducts);

    }, 1000);

  }


});


// CATEGORY FILTER
function filterCategory(category){

  let filteredProducts = allProducts.filter((product) => {

    return product.category === category;

  });

  showProducts(filteredProducts);

}


// ADD TO CART
function addToCart(id){

  let selectedProduct = allProducts.find((product) => {

    return product.id === id;

  });

  cart.push(selectedProduct);

  updateCart();

}


// REMOVE FROM CART
function removeFromCart(id){

  let index = cart.findIndex((product) => {

    return product.id === id;

  });

  if(index > -1){

    cart.splice(index,1);

  }

  updateCart();

}


// UPDATE CART
function updateCart(){

  cartCount.innerText = cart.length;

  let total = 0;

  cart.forEach((item) => {

    total += item.price;

  });

  totalAmount.innerText = "Total = $" + total.toFixed(2);

}