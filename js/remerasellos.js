
const productEcomerce = [
    {
        id: 1,
        title: "Remera moda 2023",
        cantidad: 1,
        price: 109.95,
        description:
            "Tu mejor estilo",
        image: "/assets/remera1.jfif",
    },
    {
        id: 2,
        title: "Remera moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/remera2.jfif",
    },
    {
        id: 3,
        title: "Remera moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/remera3.jfif",
    },
    {
        id: 4,
        title: "Remera moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/remera4.jfif",
    },
    {
        id: 5,
        title: "Remera moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/remera5.jfif",
    },
    {
        id: 6,
        title: "Remera moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/remera6.jfif",
    },
    {
        id: 7,
        title: "Remera moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/remera7.jfif",
    },
    {
        id: 8,
        title: "Remera moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/remera8.jfif",
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

