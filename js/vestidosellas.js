
const productEcomerce = [
    {
        id: 25,
        title: "Vestidos moda 2023",
        cantidad: 1,
        price: 109.95,
        description:
            "Tu mejor estilo",
        image: "/assets/vestido1.jfif",
    },
    {
        id: 26,
        title: "Vestidos moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/vestido2.jfif",
    },
    {
        id: 27,
        title: "Vestidos moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/vestido3.jfif",
    },
    {
        id: 28,
        title: "Vestidos moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/vestido4.jfif",
    },
    {
        id: 29,
        title: "Vestidos moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/fiesta1.jfif",
    },
    {
        id: 30,
        title: "Vestidos moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/fiesta2.jfif",
    },
    {
        id: 31,
        title: "Vestidos moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/fiesta3.jfif",
    },
    {
        id: 32,
        title: "Vestidos moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/fiesta4.jfif",
    }
]

let carrito = [

]

    const rootProducts = document.getElementById("root-products");

    const products = productEcomerce.map(product => {
        return {
            id: product.id,
            cantidad: product.cantidad,
            title: product.title,
            price: product.price,
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
            productElement.innerHTML = `   <a href="/productDetail.html" onclick="renderDetails(${product.id})">
            <div class="col mb-5" >
            <div class="card h-100" >
                <!-- Product image-->
                <img class="card-img-top" src="${product.image}" alt="..." />
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder">${product.title}</h5>
                        <!-- Product price-->
                        ${product.price}
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center "><a class="btn btn-outline-dark mt-auto button_cart" onclick="agregarProducto(${product.id})" href="#">Agregar al carrito</a></div>
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
const cartView = document.getElementById("cart");
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
