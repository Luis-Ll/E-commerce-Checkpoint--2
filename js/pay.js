const productsPay = document.getElementById("productPay");
const price = document.getElementById("price");
const cartView = document.getElementById("cart");
const cartquantity = document.getElementById("Cartquantity");



let product = JSON.parse(localStorage.getItem("carrito"));
cartquantity.innerText = `Tienes ${product.length} articulos en tu carrito.`;

cartView.innerText =  `${product.length}`;


const producPay = product.map((prod) => {
  return {
    id: prod.id,
    cantidad: prod.cantidad,
    title: prod.title,
    price: prod.price,
    description: prod.description,
    category: prod.category,
    image: prod.image,
  };
});




const renderProducts = (producPay) => {
  productsPay.innerHTML = "";
  producPay.forEach((prod) => {
    const productElement = document.createElement("div");
    productElement.innerHTML = `   
           <div class="card mt-2 mb-2 mb-lg-0 shadow-lg cardPay border-0 rounded">
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
    if (producPay.length === 1) {
      cartquantity.innerText = `Tienes 1 articulo en tu carrito.`;
    } else {
      cartquantity.innerText = `Tienes ${product.length} articulos en tu carrito.`;
    }
    let precio = product.reduce(
      (acc, prod) => acc + prod.cantidad * prod.price,
      0
    );
    price.innerText =  precio.toFixed(2)
    productsPay.appendChild(productElement);
  });
};

renderProducts(producPay);


/**Vaciarcarrito */
function vaciarCarrito(){
  const vaciar = document.getElementById("vaciar")
  product = [];
    localStorage.setItem("carrito", JSON.stringify(product));
    location.reload(true);

}

function quitarProducto(id) {
  const deleteProd = id;
  console.log(deleteProd);

  product = product.filter((prenda) => prenda.id !== id);

  console.log(product);

  const producPay = product.map((prod) => {
    return {
      id: prod.id,
      cantidad: prod.cantidad,
      title: prod.title,
      price: prod.price,
      description: prod.description,
      category: prod.category,
      image: prod.image,
    };
  });

  renderProducts(producPay);
  deleteStorage();
  cartView.innerText =  `${product.length}`;
}

function deleteStorage() {
  localStorage.setItem("carrito", JSON.stringify(product));

  if (product.length === 0) {
    cartquantity.innerText = `Tienes ${product.length} articulos en tu carrito.`;
    productsPay.innerHTML = `
    <div class="bg-danger-subtle d-flex align-items-center justify-content-center rounded">
    <p class="text-danger fw-bold text-center fs-2 p-5">¡Aún no agregaste nada al carrito!</p>
  </div>`;
  }
}

if (product.length === 0) {
  console.log("no tienes nada");
  productsPay.innerHTML = `
    <div class="bg-danger-subtle d-flex align-items-center justify-content-center rounded">
    <p class="text-danger fw-bold text-center fs-2 p-5 ">¡Aún no agregaste nada al carrito!</p>
  </div>`;
}

//**Validación del form */

function validationPay() {
  const name = document.getElementById("typeName").value;
  const numTarget = document.getElementById("typeText").value;
  const venc = document.getElementById("typeExp").value;
  const pass = document.getElementById("typePass").value;

  if (name === "") {
    swal({
      title: "Completa todos los campos",
      text: "Nombre del Titular.",
      icon: "error",
      button: "Aceptar",
    });
  } else if (numTarget === "") {
    swal({
      title: "Completa todos los campos",
      text: "Numero de tarjeta.",
      icon: "error",
      button: "Aceptar",
    });
  } else if (venc === "") {
    swal({
      title: "Completa todos los campos",
      text: "Fecha de Vencimiento de la tarjeta.",
      icon: "error",
      button: "Aceptar",
    });
  } else if (pass === "") {
    swal({
      title: "Completa todos los campos",
      text: "Codigo de la tarjeta.",
      icon: "error",
      button: "Aceptar",
    });
  } else if(product.length === 0){
    swal({
      title: "Aun no agregaste nada a tu carrito",
      text: "Ingresa a la tienda y selecciona tu producto.",
      icon: "error",
      button: "Aceptar", 
    });

  }
  else {
    swal({
      title: "Compra realizada correctamente",
      text: "¡Gracias por tu compra!",
      icon: "success",
      button: "Aceptar",
    });
    product = [];
    localStorage.setItem("carrito", JSON.stringify(product));
    location.reload(true);
  }
}
