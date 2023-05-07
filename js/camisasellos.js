
const productEcomerce = [
    {
        id: 1,
        cantidad: 1,
        title: "Camisa Floreada B/N",
        price: 109.25,
        description:
            "Tu mejor estilo",
        image: "/assets/camisaHawaiana.jfif",
    },
    {
        id: 2,
        cantidad: 1,
        title: "Camisa a Cuadros",
        price: 120.63,
        description:
            "Tu mejor estilo",
        image: "/assets/camisasvestir.jpg",
    },
    {
        id: 3,
        cantidad: 1,
        title: "Camisa hawaiana",
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/camisasvestir2.jpg",
    },
    {
        id: 4,
        cantidad: 1,
        title: "Camisa hawaiana",
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/camisasvestir3.jpg",
    },
    {
        id: 5,
        cantidad: 1,
        title: "Camisa hawaiana",
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/camisasvestir4.jpg",
    },
    {
        id: 6,
        cantidad: 1,
        title: "Camisa hawaiana",
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/camisahombre.webp",
    },
    {
        id: 7,
        cantidad: 1,
        title: "Camisa hawaiana",
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/camisasvestir.jpg",
    },
    {
        id: 8,
        cantidad: 1,
        title: "Camisa hawaiana",
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/camisasvestir.jpg",
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
            carrito = [...carrito,item]
            console.log(carrito)
        
            guardarStorage()

        }
     
        
     
}


function guardarStorage() {
    localStorage.setItem("carrito",JSON.stringify(carrito))
}
