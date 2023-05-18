
const productEcomerce = [
    {
        id: 25,
        title: "Vestidos moda 2023",
        cantidad: 1,
        price: 109.95,
        talle:"S-L",
        color:"Rojo - Negro",
        image: "/assets/vestido1.jfif",
    },
    {
        id: 26,
        title: "Vestidos moda 2023",
        cantidad: 1,
        price: 120.95,
        talle:"S-L",
        color:"Rojo - Negro",
        image: "/assets/vestido2.jfif",
    },
    {
        id: 27,
        title: "Vestidos moda 2023",
        cantidad: 1,
        price: 120.95,
        talle:"S-L",
        color:"Rojo - Negro",
        image: "/assets/vestido3.jfif",
    },
    {
        id: 28,
        title: "Vestidos moda 2023",
        cantidad: 1,
        price: 120.95,
        talle:"S-L",
        color:"Rojo - Negro",
        image: "/assets/vestido4.jfif",
    },
    {
        id: 29,
        title: "Vestidos moda 2023",
        cantidad: 1,
        price: 120.95,
        talle:"S-L",
        color:"Rojo - Negro",
        image: "/assets/fiesta1.jfif",
    },
    {
        id: 30,
        title: "Vestidos moda 2023",
        cantidad: 1,
        price: 120.95,
        talle:"S-L",
        color:"Rojo - Negro",
        image: "/assets/fiesta2.jfif",
    },
    {
        id: 31,
        title: "Vestidos moda 2023",
        cantidad: 1,
        price: 120.95,
        talle:"S-L",
        color:"Rojo - Negro",
        image: "/assets/fiesta3.jfif",
    },
    {
        id: 32,
        title: "Vestidos moda 2023",
        cantidad: 1,
        price: 120.95,
        talle:"S-L",
        color:"Rojo - Negro",
        image: "/assets/fiesta4.jfif",
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
            `  
            
            
            
            <a href="/productDetail.html" class="text-decoration-none text-dark" onclick="renderDetails(${product.id})">
            <div class="col mb-5" >

            <div class="card cardProduct h-100 border-0 shadow-lg rounded" >

                <!-- Product image-->
                <img class="card-img-top" src="${product.image}" alt="..." />
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder">${product.title}</h5>
                        <hr>
                        <!-- Product price-->
                        <button class="border border-primary rounded">$${product.price}</button>
                        
                   
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center  "><a class="btn  mt-auto button_cart border-0 bg-warning shadow-lg" onclick="agregarProducto(${product.id})" href="#">Agregar al carrito</a></div>
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


    //Contador del carrito//
const buttonCart = document.querySelectorAll(".button_cart");
// const cartView = document.getElementById("cart");
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