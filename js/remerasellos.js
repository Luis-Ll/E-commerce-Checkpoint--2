
const productEcomerce = [
    {
        id: 17,
        title: "Remera moda 2023",
        cantidad: 1,
        price: 109.95,
        description:"Temporada Invierno",
        talle:"S-L",
        color:"Rojo - Negro",
        image: "/assets/remera1.jfif",
    },
    {
        id: 18,
        title: "Remera moda 2023",
        cantidad: 1,
        price: 120.95,
        description:"Temporada Invierno",
        talle:"S-L",
        color:"Rojo - Negro",
        image: "/assets/remera2.jfif",
    },
    {
        id: 19,
        title: "Remera moda 2023",
        cantidad: 1,
        price: 120.95,
        description:"Temporada Invierno",
        talle:"S-L",
        color:"Rojo - Negro",
        image: "/assets/remera3.jfif",
    },
    {
        id: 20,
        title: "Remera moda 2023",
        cantidad: 1,
        price: 120.95,
        description:"Temporada Invierno",
        talle:"S-L",
        color:"Rojo - Negro",
        image: "/assets/remera4.jfif",
    },
    {
        id: 21,
        title: "Remera moda 2023",
        cantidad: 1,
        price: 120.95,
        description:"Temporada Invierno",
        talle:"S-L",
        color:"Rojo - Negro",
        image: "/assets/remera5.jfif",
    },
    {
        id: 22,
        title: "Remera moda 2023",
        cantidad: 1,
        price: 120.95,
        description:"Temporada Invierno",
        talle:"S-L",
        color:"Rojo - Negro",
        image: "/assets/remera6.jfif",
    },
    {
        id: 23,
        title: "Remera moda 2023",
        cantidad: 1,
        price: 120.95,
        description:"Temporada Invierno",
        talle:"S-L",
        color:"Rojo - Negro",
        image: "/assets/remera7.jfif",
    },
    {
        id: 24,
        title: "Remera moda 2023",
        cantidad: 1,
        price: 120.95,
        description:"Temporada Invierno",
        talle:"S-L",
        color:"Rojo - Negro",
        image: "/assets/remera8.jfif",
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
            productElement.innerHTML = `   
            <div class="col mb-5">
            <div class="card h-100 border-danger" >
                <!-- Product image-->
                <img class="card-img-top" src="${product.image}" alt="..." />
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder">${product.title}</h5>
                        <!-- Product price-->
                        <h6 class="fw-bolder">Talles: ${product.talle}</h6>
                        <h6 class="fw-bolder">Colores: ${product.color}</h6>
                        <h4 class="fw-bolder black"> $${product.price}</h4>
                   
                    </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center "><a class="btn btn-outline-dark mt-auto button_cart" onclick="agregarProducto(${product.id})" href="#">Agregar al carrito</a></div>
                </div>
            </div>
        </div>
            `;
           console.log(productId)
            rootProducts.appendChild(productElement);
        })
    }
    
    renderProducts(products);


    //Contador del carrito//
const buttonCart = document.querySelectorAll(".button_cart");

let counter = 0;


function agregarProducto (id){
        counter++;
        cartView.textContent = counter;
        
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

        }
     
        
     
}

function guardarStorage() {
    localStorage.setItem("carrito",JSON.stringify(carrito))
}


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