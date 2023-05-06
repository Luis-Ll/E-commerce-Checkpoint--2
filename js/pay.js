const productsPay = document.getElementById("productPay");
const price = document.getElementById("price");
const cartView = document.getElementById("cart");
const cartquantity = document.getElementById("Cartquantity")

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

const render = (producPay) => {
    productsPay.innerHTML = "";
    producPay.forEach(prod => {
        const productElement = document.createElement("div"); 
        productElement.innerHTML = `   
           <div class="card mt-2 mb-lg-0 shadow-lg cardPay">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div class="d-flex flex-row align-items-center">
              <div>
                <img
                  src="${prod.image}"
                  class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
              </div>
              <div class="ms-3">
                <h5>${prod.title}</h5>
                <p class="small mb-0">${prod.description}</p>
              </div>
            </div>
            <div class="d-flex flex-row align-items-center">
              <div style="width: 50px;">
                <h5 class="fw-normal mb-0">${prod.cantidad}</h5>
              </div>
              <div style="width: 80px;">
                <h5 class="mb-0">${prod.price}</h5>
              </div>
              <a href="#!" style="color: #cecece;" onclick="quitarProducto(${prod.id})"><i class="fas fa-trash-alt text-secondary"></i></a>
            </div>
          </div>
        </div>
      </div>



        `;
        cartquantity.innerText = producPay.length
        price.innerText = product.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0)
        productsPay.appendChild(productElement);
    })
}

render(producPay);

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

    render(producPay);
    deleteStorage()
};

function deleteStorage() {
    localStorage.setItem("carrito",JSON.stringify(product))
    
if (product.length === 0) {
    console.log("no tienes nada")
    productsPay.innerHTML = `
    <div class="bg-danger-subtle d-flex align-items-center justify-content-center rounded">
    <p class="text-danger fw-bold text-center fs-2 ">¡Aún no agregaste nada al carrito!</p>
  </div>`;
    
      
}
}

if (product.length === 0) {
    console.log("no tienes nada")
    productsPay.innerHTML = `
    <div class="bg-danger-subtle d-flex align-items-center justify-content-center rounded">
    <p class="text-danger fw-bold text-center fs-2 ">¡Aún no agregaste nada al carrito!</p>
  </div>`;
    
      
}