class Producto {
	constructor(id, type, img, price, stock) {
		this.id = id;
		this.type = type;
		this.img = img;
		this.price = price;
		this.stock = stock;
	}
}

 
function getProductos() {
  let productosAObjetos = JSON.parse(DATOS);
  let productos = [];

  for (element of productosAObjetos){
    let producto = new Producto(element.id, element.name, element.img, element.price, element.stock)
    productos.push(producto)
  }
  return productos
}


const DATOS = `[{
    "id": 1,
    "name": "Florero",
    "img": "../img/shop01.jpg",
    "price": 2700,
    "stock": "Pieza única"
  }, {
    "id": 2,
    "name": "Florero",
    "img": "../img/shop02.jpg",
    "price": 2200,
    "stock": "Pieza única"
  }, {
    "id": 3,
    "name": "Florero",
    "img": "../img/shop03.jpg",
    "price": 3000,
    "stock": "Pieza única"
  }, {
    "id": 4,
    "name": "Florero",
    "img": "../img/shop04.jpg",
    "price": 2200,
    "stock": "Pieza única"
  }, {
    "id": 5,
    "name": "Jarrón",
    "img": "../img/shop05.jpg",
    "price": 2500,
    "stock": "Pieza única"
  }, {
    "id": 6,
    "name": "Jarrón",
    "img": "../img/shop06.jpg",
    "price": 2200,
    "stock": "Pieza única"
  }]`