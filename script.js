let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount(){
    const count = document.getElementById("cart-count");
    if(count) count.innerText = cart.length;
}

function addToCart(product){
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert("Товар додано в кошик 🛍️");
}

function loadCart(){
    const list = document.getElementById("cart-items");
    if(list){
        list.innerHTML = "";
        cart.forEach(item => {
            let li = document.createElement("li");
            li.innerText = item;
            list.appendChild(li);
        });
    }
}

updateCartCount();
loadCart();
