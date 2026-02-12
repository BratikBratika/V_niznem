let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount(){
    const count = document.getElementById("cart-count");
    if(count) count.innerText = cart.length;
}

function addToCart(product, button){
    if(cart.includes(product)){
        alert("Цей товар вже у кошику 🛍️");
        return;
    }

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

    if(button){
        button.innerText = "✔ В кошику";
        button.style.background = "#777";
    }
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

function checkButtons(){
    document.querySelectorAll(".btn-gold").forEach(btn=>{
        const product = btn.getAttribute("data-product");
        if(cart.includes(product)){
            btn.innerText = "✔ В кошику";
            btn.style.background = "#777";
        }
    });
}

updateCartCount();
loadCart();
checkButtons();

function openSize(){
document.getElementById("sizeModal").style.display="flex";
}

function closeSize(){
document.getElementById("sizeModal").style.display="none";
}
