const productDetail = document.getElementById("detalle")



const productsAll = [
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
    },
    {
        id: 9,
        title: "Jeans",
        cantidad: 1,
        price: 109.95,
        description:
            "Tu mejor estilo",
        image: "/assets/jean1.jfif",
    },
    {
        id: 10,
        title: "Jeans",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/jean2.jfif",
    },
    {
        id: 11,
        title: "Jeans",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/jean3.jfif",
    },
    {
        id: 12,
        title: "Jeans",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/jean4.jfif",
    },
    {
        id: 13,
        title: "Jeans",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/jean5.jfif",
    },
    {
        id: 14,
        title: "Jeans",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/jean6.jfif",
    },
    {
        id: 15,
        title: "Jeans",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/jean7.jfif",
    },
    {
        id: 16,
        title: "Jeans",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/jean8.jfif",
    },
    {
        id: 17,
        title: "Remera moda 2023",
        cantidad: 1,
        price: 109.95,
        description:
            "Tu mejor estilo",
        image: "/assets/remera1.jfif",
    },
    {
        id: 18,
        title: "Remera moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/remera2.jfif",
    },
    {
        id: 19,
        title: "Remera moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/remera3.jfif",
    },
    {
        id: 20,
        title: "Remera moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/remera4.jfif",
    },
    {
        id: 21,
        title: "Remera moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/remera5.jfif",
    },
    {
        id: 22,
        title: "Remera moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/remera6.jfif",
    },
    {
        id: 23,
        title: "Remera moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/remera7.jfif",
    },
    {
        id: 24,
        title: "Remera moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/remera8.jfif",
    },
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
    },
    {
        id: 33,
        title: "Zapatillas moda 2023",
        cantidad: 1,
        price: 109.95,
        description:
            "Tu mejor estilo",
        image: "/assets/zapatillas1.jfif",
    },  
    {
        id: 34,
        title: "Zapatillas moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/zapatillas2.jfif",
    },
    {
        id: 35,
        title: "Zapatillas moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/zapatillas3.jfif",
    },
    {
        id: 36,
        title: "Zapatillas moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/zapatillas4.jfif",
    },
    {
        id: 37,
        title: "Zapatillas moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/zapatillas5.jfif",
    },
    {
        id: 38,
        title: "Zapatillas moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/zapatillas6.jfif",
    },
    {
        id: 39,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/zapatillas7.jfif",
    },
    {
        id: 40,
        title: "Zapatillas moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/zapatillas8.jfif",
    },
    {
        id: 41,
        title: "Zapatos moda 2023",
        cantidad: 1,
        price: 109.95,
        description:
            "Tu mejor estilo",
        image: "/assets/zapatosfiesta1.jfif",
    },
    {
        id: 42,
        title: "Zapatos moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/zapatosfiesta2.jfif",
    },
    {
        id: 43,
        title: "Zapatos moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/zapatosfiesta3.jfif",
    },
    {
        id: 44,
        title: "Zapatos moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/zapatosfiesta4.jfif",
    },
    {
        id: 45,
        title: "Zapatos moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/empresa1.jfif",
    },
    {
        id: 46,
        title: "Zapatos moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/empresa2.jfif",
    },
    {
        id: 47,
        title: "Zapatos moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/empresa3.jfif",
    },
    {
        id: 48,
        title: "Zapatos moda 2023",
        cantidad: 1,
        price: 120.95,
        description:
            "Tu mejor estilo",
        image: "/assets/empresa4.jfif",
    },
    {
        id: 49,
        cantidad: 1,
        title: "Cinto Cuero negro",
        price: 61.99,
        description:
            "Eco-cuero negro",
        image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp",
    },
    {
        id: 50,
        cantidad: 1,
        title: "Combo Clasico",
        price: 61.99,
        description:
            "Camisa, Vaquero clasico, Zapatos cuero marrón",
        image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp",
    },
    {
        id: 51,
        cantidad: 1,
        title: "Zapatilla teen Rosa",
        price: 50.99,
        description:
            "Zapatilla moda joven rosa",
        image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).webp",
    },
    
    {
        id: 52,
        title: "Zapatilla Urbana",
        cantidad: 1,
        price: 50.99,
        description:
            "Zapatilla Urbana Black and wite",
        image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(23).webp",
    },
    {
        id: 53,
        title: "Reloj Clasico Silver",
        cantidad: 1,
        price: 61.99,
        description:
            "Reloj Dama clasico silver",
        image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(17).webp",
    },
    {
        id: 54,
        title: "Anteojo de sol",
        cantidad: 1,
        price: 50.99,
        description:
            "Anteojo de sol",
        image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(30).webp",
    },
];
let cart =  JSON.parse(localStorage.getItem('carrito'))



function agregarProducto (id){

        
    const exist = cart.some(producto => producto.id === id)
    if(exist){
        const prodExist = cart.map(product => {
            if(product.id === id){
                product.cantidad++;
            }
            })
            console.log("ya existe")
            guardarStorage()
    }else{
        const item = productsAll.find((prenda) => prenda.id === id)
        cart.push(item)
    
        
        guardarStorage()

        cartView.innerText =  `${cart.length}`;
    }
 
    
 
}

function guardarStorage() {
    localStorage.setItem("carrito",JSON.stringify(cart))
}


function renderDetails(id){
    
   
   const detalleProduct = productsAll.filter((prenda) => prenda.id === id)


localStorage.setItem("Products",JSON.stringify(detalleProduct))


}

let productdetalle = JSON.parse(localStorage.getItem("Products"));
console.log("esty en el producto", productdetalle)
const productdet = productdetalle.map(product => {
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
console.log("aqui", productdet)
function renderProduct (){

    productdet.forEach(product => {
        const productElement = document.createElement("div"); 
    productElement.innerHTML = `         
    <section class="py-5">
    <div class="container">
      <div class="row gx-5">
        <aside class="col-lg-6">
          <div class="border rounded-4 mb-3 d-flex justify-content-center">
            <a data-fslightbox="mygalley" class="rounded-4" target="_blank" data-type="image" href="${product.image}">
              <img style="max-width: 100%; max-height: 100vh; margin: auto;" class="rounded-4 fit" src="${product.image}" />
            </a>
          </div>
          <div class="d-flex justify-content-center mb-3">
      
            <a data-fslightbox="mygalley" class="border mx-1 rounded-2" target="_blank" data-type="image" href=${product.image}" class="item-thumb">
              <img width="60" height="60" class="rounded-2" src="${product.image}" />
            </a>
          </div>
          <!-- thumbs-wrap.// -->
          <!-- gallery-wrap .end// -->
        </aside>
        <main class="col-lg-6">
          <div class="ps-lg-3">
            <h4 class="title text-dark">
              ${product.title} <br />
              Casual Hoodie
            </h4>
            <div class="d-flex flex-row my-3">
              <div class="text-warning mb-1 me-2">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <span class="ms-1">
                  4.5
                </span>
              </div>
              <span class="text-muted"><i class="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
              <span class="text-success ms-2">In stock</span>
            </div>
  
            <div class="mb-3">
              <span class="h5">$75.00</span>
              <span class="text-muted">/per box</span>
            </div>
  
            <p>
            ${product.description}
            </p>
  
            <div class="row">
              <dt class="col-3">Type:</dt>
              <dd class="col-9">Regular</dd>
  
              <dt class="col-3">Color</dt>
              <dd class="col-9">Brown</dd>
  
              <dt class="col-3">Material</dt>
              <dd class="col-9">Cotton, Jeans</dd>
  
              <dt class="col-3">Brand</dt>
              <dd class="col-9">Reebook</dd>
            </div>
  
            <hr />
  
            <div class="row mb-4">
              <div class="col-md-4 col-6">
                <label class="mb-2">Size</label>
                <select class="form-select border border-secondary" style="height: 35px;">
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>

            </div>
            <a href="#" class="btn bg-success border-0 shadow-0">Comprar </a>
            <a href="#" class="btn bg-warning border-0 shadow-0" onclick="agregarProducto(${product.id})"> <i class="me-1 fa fa-shopping-basket"></i>Agregar al carrito </a>
            <a href="#" class="btn bg-danger border-0 border-secondary py-2 icon-hover px-3"> <i class="me-1 fa fa-heart fa-lg"></i> Guardar </a>
          </div>
        </main>
      </div>
    </div>
  </section>
      <section class=" container-fluid py-5 " style="background-color: #eccdb4">
        <div class="container px-4 px-lg-5 mt-5">
            <h2 class="fw-bolder mb-4">Productos destacados</h2>
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <div class="col mb-5">
                    <div class="card border-0 rounded shadow-lg h-100" style="background-color: #f0edd4;">
                        <!-- Product image-->
                        <img class="card-img-top" src="/assets/cinto marron.jfif" alt="..." />
                        <!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                                <!-- Product name-->
                                <h5 class="fw-bolder">Cinto cuero Marròn</h5>
                                <!-- Product price-->
                                $80.00
                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><a class="btn bg-warning border-0 mt-auto" href="#">Agregar al carrito</a></div>
                        </div>
                    </div>
                </div>
                <div class="col mb-5">
                    <div class="card h-100 border-0 rounded shadow-lg" style="background-color: #f0edd4;">
                        <!-- Sale badge-->
                        <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                        <!-- Product image-->
                        <img class="card-img-top" src="/assets/relojproducts.webp" alt="..." />
                        <!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                                <!-- Product name-->
                                <h5 class="fw-bolder">Relo Clasic Men</h5>
                                <!-- Product reviews-->
                                <div class="d-flex justify-content-center small text-warning mb-2">
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                </div>
                                <!-- Product price-->
                                <span class="text-muted text-decoration-line-through">$250.00</span>
                                $200.00
                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><a class="btn bg-warning border-0 mt-auto" href="#">Agregar al carrito</a></div>
                        </div>
                    </div>
                </div>
                <div class="col mb-5">
                    <div class="card border-0 rounded shadow-lg h-100" style="background-color: #f0edd4;">
                        <!-- Sale badge-->
                        <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                        <!-- Product image-->
                        <img class="card-img-top" src="/assets/camisahombre.webp" alt="..." />
                        <!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                                <!-- Product name-->
                                <h5 class="fw-bolder">Camisa hombre Hawaiana</h5>
                                <!-- Product price-->
                                <span class="text-muted text-decoration-line-through">$50.00</span>
                                $25.00
                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><a class="btn bg-warning border-0 mt-auto" href="#">Agregar al carrito</a></div>
                        </div>
                    </div>
                </div>
                <div class="col mb-5">
                    <div class="card h-100 border-0 rounded shadow-lg" style="background-color: #f0edd4;">
                        <!-- Product image-->
                        <img class="card-img-top" src="/assets/sombrero.webp" alt="..." />
                        <!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                                <!-- Product name-->
                                <h5 class="fw-bolder">Sombrero Fedora Tipo Lana Elegante </h5>
                                <!-- Product reviews-->
                                <div class="d-flex justify-content-center small text-warning mb-2">
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                </div>
                                <!-- Product price-->
                                $40.00
                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><a class="btn bg-warning border-0 mt-auto" href="#">Agregar al carrito</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
    productDetail.appendChild(productElement)
  
        
    });

    
    
 

};

renderProduct()
