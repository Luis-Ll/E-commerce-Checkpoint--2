const productsPay = document.getElementById("productPay")
const price = document.getElementById("price")
const cartView = document.getElementById("cart");

let product = JSON.parse(localStorage.getItem('carrito'))


console.log(product)

const producPay = product.map(prod =>{
    return {
        id: prod.id,
        cantidad: prod.cantidad,
        title: prod.title,
        price: prod.price,
        description: prod.description,
        category: prod.category,
        image: prod.image 
    }
})

console.log(producPay)

const renderProducts = (producPay) => {
    productsPay.innerHTML = "";
    producPay.forEach(prod => {
        const productElement = document.createElement("div"); 
        productElement.innerHTML = `   
        <div class="card w-75 cardPay mt-2">
             <div class="card-body d-flex justify-content-around">
              <div class="">
                     <img src="${prod.image}"class="img-thumbnail imgPay" alt=""/>
              </div>
             <div>
          <h5 class="card-title d-flex flex-row-reverse bd-highlight">${prod.title}</h5>
           <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
           <span>Cantidad: ${prod.cantidad}</span>
           <div class="d-flex justify-content-end">
           <span class="pe-2 text-primary"> ${prod.price}</span>
           <a href="#" class=""  onclick="quitarProducto(${prod.id})"><i class="fa-solid fa-delete-left"></i></a> 
           </div>
         
          </div>

            </div>
        </div>

        `;

        price.innerText = product.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0)
        productsPay.appendChild(productElement);
    })
}

renderProducts(producPay);

function quitarProducto(id){

    const deleteProd = id
    console.log(deleteProd)

    product = product.filter((prenda) => prenda.id !== id )

    console.log(product)

    const producPay = product.map(prod =>{
        return {
            id: prod.id,
            title: prod.title,
            price: prod.price,
            description: prod.description,
            category: prod.category,
            image: prod.image 
        }
    })

    renderProducts(producPay);
    deleteStorage()
};

function deleteStorage() {
    localStorage.setItem("carrito",JSON.stringify(product))
    
if (product.length === 0) {
    console.log("no tienes nada")
    productsPay.innerHTML = `
    <p class="text-primary fw-bold text-center">¡Aún no agregaste nada al carrito!</p>`;
    
      
}
}

if (product.length === 0) {
    console.log("no tienes nada")
    productsPay.innerHTML = `
    <p class="text-primary fw-bold text-center">¡Aún no agregaste nada al carrito!</p>`;
    
      
}