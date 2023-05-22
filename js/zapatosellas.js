
const productEcomerce = [
    {
        id: 41,
        title: "Zapatos moda 2023",
        cantidad: 1,
        price: 109.95,
        talle:"40 -42",
        color:"Rojo - Negro",
        image: "/assets/zapatosfiesta1.jfif",
    },
    {
        id: 42,
        title: "Zapatos moda 2023",
        cantidad: 1,
        price: 120.95,
        talle:"40 -42",
        color:"Rojo - Negro",
        image: "/assets/zapatosfiesta2.jfif",
    },
    {
        id: 43,
        title: "Zapatos moda 2023",
        cantidad: 1,
        price: 120.95,
        talle:"40 -42",
        color:"Rojo - Negro",
        image: "/assets/zapatosfiesta3.jfif",
    },
    {
        id: 44,
        title: "Zapatos moda 2023",
        cantidad: 1,
        price: 120.95,
        talle:"40 -42",
        color:"Rojo - Negro",
        image: "/assets/zapatosfiesta4.jfif",
    },
    {
        id: 45,
        title: "Zapatos moda 2023",
        cantidad: 1,
        price: 120.95,
        talle:"40 -42",
        color:"Rojo - Negro",
        image: "/assets/empresa1.jfif",
    },
    {
        id: 46,
        title: "Zapatos moda 2023",
        cantidad: 1,
        price: 120.95,
        talle:"40 -42",
        color:"Rojo - Negro",
        image: "/assets/empresa2.jfif",
    },
    {
        id: 47,
        title: "Zapatos moda 2023",
        cantidad: 1,
        price: 120.95,
        talle:"40 -42",
        color:"Rojo - Negro",
        image: "/assets/empresa3.jfif",
    },
    {
        id: 48,
        title: "Zapatos moda 2023",
        cantidad: 1,
        price: 120.95,
        talle:"40 -42",
        color:"Rojo - Negro",
        image: "/assets/empresa4.jfif",
    }
]

let carrito =  JSON.parse(localStorage.getItem('carrito'))

    const rootProducts = document.getElementById("root-products");

    const products = productEcomerce.map(product => {
        return {
            id: product.id,
            cantidad: product.cantidad,
            title: product.title,
            price: product.price,
            talle:product.talle,
            color:product.color,
            description: product.description,
            category: product.category,
            image: product.image 
        }
    })

    const renderProducts = (products) => {
        rootProducts.innerHTML = "";
        products.forEach(product => {
            const productId = (product.id)
            const productElement = document.createElement("div"); 

            productElement.innerHTML = `   <a href="/productDetail.html" class="text-decoration-none text-dark" onclick="renderDetails(${product.id})">
            <div class="col mb-5" >
            <div class="col">
              <div class="card h-100 shadow-lg border-0 rounded" style="background-color: #f0edd4;">
                <img
                  src="${product.image}"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <div class="clearfix mb-3">
                    <span class="float-start badge rounded-pill bg-success"
                      >${product.price}</span
                    >
                    <span class="float-end"><a href="#"></a></span>
                  </div>
                  <h5 class="card-title">
                ${product.title}
                  </h5>
                  
                  <hr>
                  <span>${product.talle}</span>
                  <hr>

                  <div class="d-grid gap-2 my-4">
                    <a href="#" class="btn bg-warning border-0" onclick="agregarProducto(${product.id})">Agregar al carrito</a>
                  </div>
                </div>
              </div>
            </div>
        </a>
            `;
           console.log(productId)
            rootProducts.appendChild(productElement);
        })
    }
    
    renderProducts(products);




function agregarProducto (id){

        
        const exist = carrito.some(producto => producto.id === id)
        if(exist){
            const prodExist = carrito.map(product => {
                if(product.id === id){
                    product.cantidad++;
                }
                })
                console.log("ya existe", carrito)
                guardarStorage()
        }else{
            const item = products.find((prenda) => prenda.id === id)
            carrito.push(item)
        
            guardarStorage()

            cartView.innerText =  `${carrito.length}`;

        }
     
        
     
}

function guardarStorage() {
    localStorage.setItem("carrito",JSON.stringify(carrito))
}


const productsPay = document.getElementById("productPay");
const price = document.getElementById("price");
const cartView = document.getElementById("cart");
const cartquantity = document.getElementById("Cartquantity")

cartView.innerText =  `${carrito.length}`;

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