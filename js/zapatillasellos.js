
const productEcomerce = [
    {
        id: 1,
        price: 109.95,
        description:
            "Tu mejor estilo",
        image: "/assets/zapatillas1.jfif",
    },  
    {
        id: 2,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/zapatillas2.jfif",
    },
    {
        id: 2,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/zapatillas3.jfif",
    },
    {
        id: 2,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/zapatillas4.jfif",
    },
    {
        id: 2,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/zapatillas5.jfif",
    },
    {
        id: 2,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/zapatillas6.jfif",
    },
    {
        id: 2,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/zapatillas7.jfif",
    },
    {
        id: 2,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/zapatillas8.jfif",
    }
]

    const rootProducts = document.getElementById("root-products");

    const products = productEcomerce.map(product => {
        return {
            id: product.id,
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
            const productElement = document.createElement("div"); 
            productElement.innerHTML = `   
            <div class="col mb-5">
            <div class="card h-100">
                <!-- Product image-->
                <img class="card-img-top" src="${product.image}" alt="..." />
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder">${product.description}</h5>
                        <!-- Product price-->
                        ${product.price}
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a class="btn btn-outline-dark mt-auto button_cart" href="#">Agregar al carrito</a></div>
                </div>
            </div>
        </div>
            `;

    
            rootProducts.appendChild(productElement);
        })
    }
    
    renderProducts(products);