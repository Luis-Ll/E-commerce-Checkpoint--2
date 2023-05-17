//Contador del carrito//

const buttonCart = document.querySelectorAll(".button_cart");
const cartView = document.getElementById("cart");
console.log(buttonCart)

let counter = 0;

buttonCart.forEach(button => {
    button.addEventListener("click", (event) => {
        counter++;
        cartView.textContent = counter;
    })

})