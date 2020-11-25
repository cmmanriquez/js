const productos = getProductos();

//////////carrito/////////
var carro = [];
getProductosDeLocalStorage();
console.log(carro)

const containerShop = document.getElementById('containerShop');
containerShop.innerHTML = "";
// let contenidoContenedor = ''

//crea las tarjetas, las guarda en una variable y las devuelve en una función
productos.forEach((producto) =>{
    divDeProductos = crearTarjetas (producto);
     containerShop.appendChild (divDeProductos)

    
});


function crearTarjetas(producto) {
	let divDeProductos = document.createElement('div');
	divDeProductos.classList = 'producto col-lg-4 col-md-6 col-sm-12';
	divDeProductos.id = producto.id;

	let img = document.createElement('img');
	img.classList = 'imagen_shop';
	img.src = producto.img;
	
	let tipoDiv = document.createElement('div');
	tipoDiv.classList = 'type';
	tipoDiv.innerHTML = producto.type;

	let precioDiv = document.createElement('div');
	precioDiv.classList = 'price';
	precioDiv.innerHTML = "$" + producto.price;

    let stockDiv = document.createElement('div');
    stockDiv.classList = 'stock';
    stockDiv.innerHTML = "Pieza única"

	let boton = document.createElement('button');
	boton.classList = 'boton_shop btn btn-dark'
	boton.innerHTML = 'Comprar'

	boton.addEventListener('click', () => {
		img.style.opacity = 0.5;
		carro.push(producto);
		localStorage.setItem('carro', JSON.stringify(carro))
	});

	divDeProductos.appendChild(img);
	divDeProductos.appendChild(tipoDiv);
	divDeProductos.appendChild(precioDiv);
	divDeProductos.appendChild(stockDiv);
	divDeProductos.appendChild(boton); 
	return divDeProductos;
}

function getProductosDeLocalStorage() {
	const carroDelLocalStorage = localStorage.getItem('carro');
	if (carroDelLocalStorage){
		const objetosDeLocalStorage = JSON.parse(carroDelLocalStorage);
		objetosDeLocalStorage.forEach(objeto =>{
			let producto = new Producto(objeto.id, objeto.type, objeto.img, objeto.price, objeto.stock)
			carro.push(producto)
		})
	}else{
		"no funciona"
	}
}









// const arrayDeBotones = document.getElementsByClassName('boton_shop');
// for(button of arrayDeBotones){
//     button.addEventListener('click', (event)=>{
//         let productoId = event.target.parentNode.id
//         let producto = productos.find (producto =>{
//             return producto.id == productoId
            
//         })
//     console.log(producto)
//     })


// function crearTarjetas(producto){
//     let codigo = `
//     <div id='${producto.id}' class='producto col-lg-4 col-md-6 col-sm-12'>
//         <img class='imagen_shop'src='${producto.img}'/>
//         <div class='type'>${[producto.type]}</div>
//         <div class='price'>$ ${[producto.price]}</div>
//         <div class= 'stock'><p>Pieza única</p></div>
//         <button type="button" class="btn btn-dark boton_shop" data-toggle="modal" data-target="#exampleModal">
//             Comprar
//         </button>

//         <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div class="modal-dialog" role="document">
//                 <div class="modal-content">
//                     <div class="modal-header">
//                         <h5 class="modal-title" id="exampleModalLabel">Carro de compra</h5>
//                         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                             <span aria-hidden="true">&times;</span>
//                         </button>
//                     </div>
//                     <div class="modal-body">
//                         El objeto fue agregado al carrito.
//                     </div>
//                     <div class="modal-footer">
//                         <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
        
//     </div>
//     `
//     return codigo;
// }