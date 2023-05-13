/* 
const button = document.getElementById("searchButton")


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
    }
];




console.log("esttoy en el buscador,")

function buscarProductos (){
    const buscador = document.getElementById("buscador");
    const resultados = document.getElementById("resultList");
    const busqueda = buscador.value.toLowerCase();
    console.log("hola", busqueda)
    
    const productosFiltrados = productsAll.filter(producto =>{
        return producto.title.toLowerCase().includes(busqueda)

    })
    resultados.innerHTML = "";
    productosFiltrados.forEach(product => {
        const resultado = document.createElement("div");
        resultado.textContent = product.title;
        resultados.appendChild(resultado);
    });


    };
  

    

document.getElementById("buscador").addEventListener("keyup", buscarProductos())
 */


/*     function productosFiltrado (busqueda){
        let productos = []
        for(let i = 0; i < productsAll.length; i++){
            let producto = productsAll[i]
            if(producto.title.includes(busqueda)){
                productos.push(producto)
            }
        }
        return productos
    } */


/*  function buscarProduct (input, productsAll){
    const filtrarProduct = productsAll.filter(obj => Object.values(obj).some(val => val.toLowerCase().includes(input.toLowerCase())));
    console.log(filtrarProduct);
    return filtrarProduct;
  

}

button.addEventListener("click", () => {
    const input = buscador.value;
    const filtrarProduct = buscarProduct(input,productsAll);
    resultList.innerHTML = "";
    filtrarProduct.forEach(obj =>{
        const li = document.createElement("li");
        li.textContent = obj.title;
        resultList.appendChild(li)
    })

});
 
 */




const productos = [
   

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
        id: 39,
        title: "Zapatilla",
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


    
    
  ];
  
  
  function buscarProductos() {
    const buscador = document.getElementById("buscador");
    const resultados = document.getElementById("resultados");
  
    // Obtener el valor del input
    const busqueda = buscador.value.toLowerCase();

    console.log(busqueda)
  
    // Filtrar productos según búsqueda
    const productosFiltrados = productos.filter(producto => {
        let productoEncontrado = producto.title.toLowerCase().includes(busqueda);
      return productoEncontrado
    });
  
    // Mostrar resultados en el HTML
    resultados.innerHTML = "";
    productosFiltrados.forEach(producto => {
      const resultado = document.createElement("div");
      console.log("se espera un array", producto)
      resultado.innerHTML = `
      <a href="/productDetail.html" onclick="renderDetails(${producto.id})"><span>${producto.title}</span>
      
      </a>`
      ;
      resultados.appendChild(resultado);
    });
  }
  
  
  
  
  document.getElementById("buscador").addEventListener("keyup", buscarProductos);
  
  
  
  
  
