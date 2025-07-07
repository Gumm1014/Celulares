//barra de busqueda
document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('busquedaInput');
    const sugerencias = document.getElementById('sugerencias');
    const overlay = document.getElementById('overlay');

    const opciones = [
        "Galaxy S25 Ultra",
        "Galaxy Z Fold5",
        "Galaxy A56 5G",
        "Moto G85 5G",
        "Motorola Edge 50 Ultra",
        "Xiaomi 14T",
        "Redmi Note 13 Pro 5G"
    ];

    input.addEventListener('input', function () {
        const valor = input.value.toLowerCase();
        sugerencias.innerHTML = '';
        if (valor) {
            const filtradas = opciones.filter(op => op.toLowerCase().includes(valor));
            filtradas.forEach(opcion => {
                const li = document.createElement('li');
                li.textContent = opcion;
                li.addEventListener('click', () => {
                    input.value = opcion;
                    sugerencias.innerHTML = '';
                    overlay.style.display = 'none';
                });
                sugerencias.appendChild(li);
            });
            overlay.style.display = 'block';
        } else {
            sugerencias.innerHTML = '';
            overlay.style.display = 'none';
        }
    });

    overlay.addEventListener('click', () => {
        sugerencias.innerHTML = '';
        overlay.style.display = 'none';
    });
});



//array de los productos
let Productos = [
    {
        id: 1,
        nombre: "Xiaomi 14T Pro titan",
        precio: 1979999,
        categoria: "Celular",
        Descripcion: "Xiaomi 14T Pro Titan Black 12gb Ram 512gb ram",
        stock: 50,

    },
    {
        id: 2,
        nombre: "Motorola G85 5g ",
        precio: 1979999,
        categoria: "Celular",
        Descripcion: "Moto G85 5g Dual Sim 256 Gb Rom Violeta 12 Gb Ram",
        stock: 50,
    },
    {
        id: 3,
        nombre: "Samsung Galaxy Z flip3 5G",
        precio: 660000,
        categoria: "Celular",
        Descripcion: "Galaxy Z Flip3 5G 128 GB phantom black 8 GB RAM",
        stock: 50,
    },
    {
        id: 4,
        nombre: "Samsung Galaxy S23 Ultra ",
        precio: 1815000,
        categoria: "Celular",
        Descripcion: "Galaxy S23 Ultra Dual SIM 256GB Negro 8GB RAM256 Gb. 8Gb Ram",
        stock: 50,
    },
    {
        id: 5,
        nombre: "Samsung Galaxy S24 Ultra 5G ",
        precio: 2399999,
        categoria: "Celular",
        Descripcion: "Samsung Galaxy S24 Ultra 256 GB Negro 12 GB RAM",
        stock: 50,
    },
    {
        id: 6,
        nombre: "Samsung Galaxy S25 Ultra 5G ",
        precio: 2599999,
        categoria: "Celular",
        Descripcion: "Samsung Galaxy S25 Ultra 5G Dual SIM 512 GB azul acero 12 GB RAM",
        stock: 50,
    },
    {
        id: 7,
        nombre: "Motorola G84 5G",
        precio: 519999,
        categoria: "Celular",
        Descripcion: "Moto G84 5G 256 GB Negro espacial 8 GB RAM",
        stock: 50,
    },
    {
        id: 8,
        nombre: "Samsung Galaxy A55 5G",
        precio: 984999,
        categoria: "Celular",
        Descripcion: "Samsung Galaxy A55 256GB Awesome navy 8GB RAM",
        stock: 50,
    },
    {
        id: 9,
        nombre: "Motorola G75 Xt2437-2",
        precio: 759999,
        categoria: "Celular",
        Descripcion: "Moto G75 Xt2437-2 5g Ram 8gb Interna 128 Gb",
        stock: 50,
    },
    // eliminado{
    //id: 10,
    //nombre:"Xiaomi redmi note 13 pro",
    //precio:1979999,
    //categoria:"Celular",
    //Descripcion: "Xiaomi Redmi Note 13 Pro 5g 512gb 12gb",
    //stock: 50,
    //},
    {
        id: 10,
        nombre: "Samsung Galaxy S25",
        precio: 1749999,
        categoria: "Celular",
        Descripcion: "Galaxy S25 512gb",
        stock: 50,
    },
    {
        id: 11,
        nombre: "Xiaomi Redmi Note 14 4g",
        precio: 450000,
        categoria: "Celular",
        Descripcion: "Xiaomi Redmi Note 14 4g 256gb 8gb Ram",
        stock: 50,
    },
    {
        id: 12,
        nombre: "Xiaomi Poco X7 Pro 5g Iron man Edition",
        precio: 1183295,
        categoria: "Celular",
        Descripcion: "Xiaomi Poco X7 Pro 5g Iron Man Edition 12gb Ram Rojo 512gb Rom",
        stock: 50,
    },
    {
        id: 13,
        nombre: "Xiaomi 13T Pro titan ",
        precio: 1979999,
        categoria: "Celular",
        Descripcion: "Xiaomi 13T Dual SIM 256 GB negro 8 GB RAM",
        stock: 50,
    },
    {
        id: 14,
        nombre: "iPhone 15",
        precio: 1489990,
        categoria: "Celular",
        Descripcion: "Apple iPhone 15 128 GB Negro",
        stock: 50,
    },
    {
        id: 15,
        nombre: " iPhone 16 Pro Max ",
        precio: 4888778,
        categoria: "Celular",
        Descripcion: "Apple iPhone 16 Pro Max (256 GB)",
        stock: 50,
    },
    {
        id: 16,
        nombre: "iPhone 13 Pro Max",
        precio: 1999999,
        categoria: "Celular",
        Descripcion: "Apple iPhone 13 Pro Max",
        stock: 50,
    },
    {
        id: 17,
        nombre: "Galaxy Z Fold 6",
        precio: 3999999,
        categoria: "Celular",
        Descripcion: "Samsung Galaxy 256gb 12 Gb Ram Gris",
        stock: 50,
        imagen: ".imagenes/galaxy_z_fold5.avif",
    },
]

for (let i = 0; i < Productos.length; i++) {
    console.log(Productos[i]);

}

let producto_especifico = document.getElementById("producto");

function mostrar_detalles_producto(id){

    switch (id) {
        case 1:
            Productos.nombre[0];
            break;
        case 2:
            Productos.nombre[1];
            break;
        case 3:
            Productos.nombre[2];
            break;
        case 4:
            Productos.nombre[3];
            break;
        default:
            console.log("Producto no encontrado");    

};

producto_especifico.innerHTML = `

            <div class="product-gallery col-12 col-md-4 col-lg-4 order-1 order-md-1 order-lg-1">
                <div class="thumbnails">
                    <img src="./imagenes/thumbnail1.webp" alt="Vista previa 1">
                    <img src="./imagenes/thumbnail2.webp" alt="Vista previa 2">
                    <img src="./imagenes/thumbnail3.webp" alt="Vista previa 3">
                    <img src="./imagenes/thumbnail4.webp" alt="Vista previa 4">
                </div>
                <div class="main-image">
                    <img src="./imagenes/celular_principal.webp" alt="Samsung Galaxy S24 Ultra">
                </div>
            </div>


            <div class="product-specs col-12 col-md-4 col-lg-4 order-3 order-md-2 order-lg-2">
                <h2>Lo que tenés que saber de este producto</h2>
                <ul>
                    <li>Memoria RAM: 12 GB</li>
                    <li>Dispositivo liberado para que elijas la compañía telefónica que prefieras.</li>
                    <li>Compatible con redes 5G.</li>
                    <li>Pantalla Dynamic AMOLED 2X de 6.8".</li>
                    <li>Tiene 4 cámaras traseras de 200Mpx/50Mpx/10Mpx/12Mpx.</li>
                    <li>Cámaras delanteras de 12Mpx.</li>
                    <li>Batería de 5000mAh con carga inalámbrica.</li>
                    <li>Memoria interna de 512GB.</li>
                    <li>Resistente al agua.</li>
                    <li>Con reconocimiento facial y sensor de huella dactilar.</li>
                    <li>Resistente al polvo.</li>
                    <li>Tarjeta eSIM incluida.</li>
                </ul>
            </div>

            <div class="product-purchase-info col-12 col-md-4 col-lg-4 order-2 order-md-3 order-lg-3">
                <h1>${Productos.Descripcion}</h1>
                <p class="price">${Productos.precio}</p>
                <p class="installments">Mismo precio en 12 cuotas de $198.250</p>

                <div class="variant-option">
                    <label>Memoria interna: 512 GB</label>
                    <div class="options">
                        <button class="option-button">128Gb</button>
                        <button class="option-button selected">512Gb</button>
                    </div>
                </div>

                <div class="variant-option">
                    <label>Memoria RAM: 12 GB</label>
                    <div class="options">
                        <button class="option-button selected">12Gb</button>
                        <button class="option-button">16Gb</button>
                    </div>
                </div>

                <button class="buy-now-button">Comprar ahora</button>
                <button class="add-to-cart-button">Agregar al carrito</button>

                <p class="sales-count">+5mil ventas</p>
            </div>`;}