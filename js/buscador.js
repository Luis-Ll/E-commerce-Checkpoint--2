    const container = document.getElementById("containerProductos")

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
    const busqueda = buscador.value.toLowerCase().trim();

    if(busqueda != ""){
        console.log("valor del input");
        container.style.display = "block";
       }else{
         container.style.display = "none";
       }
       
  
    // Filtrar productos según búsqueda
    const productosFiltrados = productos.filter(producto => {
        if( producto.title.toLowerCase().includes(busqueda)){
            let productoEncontrado = producto.title.toLowerCase().includes(busqueda);
            return productoEncontrado
        }else{
            console.log("no existe")
        return ""
        }
       
      
    });

    console.log("productosfiltrados", productosFiltrados)

    if(productosFiltrados.length === 0){
        console.log("no existe 2")
        resultados.innerHTML = ` <p class="text-center">Sin Resultados.</p>`;
    }else{
  
    // Mostrar resultados en el HTML

    resultados.innerHTML = " ";
    productosFiltrados.forEach(producto => {
      const resultado = document.createElement("p");
      console.log("se espera un array", producto.length)
      resultado.innerHTML = `
      <a href="/productDetail.html" class="text-decoration-none text-dark" onclick="renderDetails(${producto.id})"><span>${producto.title}</span>  <hr>
      
      </a>`
      ;
      resultados.appendChild(resultado);
  
    });}
  }


  
  
  
  document.getElementById("buscador").addEventListener("keyup", buscarProductos);


  
  
  
  
  
