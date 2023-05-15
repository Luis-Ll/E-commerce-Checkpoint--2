/* $(document).ready(function(){
  $('.dropdown-submenu a.dropdown-toggle').on("click", function(e){
    $(this).next('ul').toggle();})}) */

/*Ofert Product*/





    //Contador del carrito//
    const buttonCart = document.querySelectorAll(".button_cart");
    let counter = 0;
 
    
    
    function agregarProducto (id){
      const cartView = document.getElementById("cart");
    
    const ofert = [
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
    
    ]

    console.log(ofert)
    
    let carrito = [

    ]

      console.log(id)
            counter++;
            console.log(counter, "counter")
            cartView.textContent = counter;
            
            const exist = carrito.some(producto => carrito.id === id)
            if(exist){
                const prodExist = carrito.map(product => {
                    if(product.id === id){
                        product.cantidad++;
                    }
                    })
                    console.log("ya existe", carrito)
                    guardarStorage()
            }else{
                const item = ofert.find((prenda) => prenda.id === id)
                carrito.push(item)
                console.log("carrioto", carrito)
            
                guardarStorage()
    
            }
            function guardarStorage() {
              localStorage.setItem("carrito",JSON.stringify(carrito))
          }
          
          }       


    


        
