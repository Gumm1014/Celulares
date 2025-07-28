
const input = document.getElementById('busquedaInput');
const sugerencias = document.getElementById('sugerencias');
const overlay = document.getElementById('overlay');

input.addEventListener('input', function () {
    const valor = input.value.toLowerCase();
    sugerencias.innerHTML = '';

    if (valor) {
        const filtrados = Productos.filter(p => p.nombre.toLowerCase().includes(valor));
        overlay.style.display = 'block';

        filtrados.forEach(p => {
            const li = document.createElement('li');
            li.textContent = p.nombre;
            li.addEventListener('click', () => {
                input.value = p.nombre;
                sugerencias.innerHTML = '';
                overlay.style.display = 'none';
                mostrar_lista_de_productos(li)
            });
            sugerencias.appendChild(li);
        });
    } else {
        overlay.style.display = 'none';
    }
});

overlay.addEventListener('click', () => {
    sugerencias.innerHTML = '';
    overlay.style.display = 'none';
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
        imagen: "./imagenes/xiaomi_14t.jpg",
        imagen1:"imagenes/imagenes_celulares/vista1-xiaomi.webp" , imagen2:"imagenes/imagenes_celulares/vista2-xiaomi.webp" , imagen3:"imagenes/imagenes_celulares/vista3-xiaomi.webp" , imagen4:"imagenes/imagenes_celulares/viata4-xiaomi.webp" , imagen_principal:"imagenes/imagenes_celulares/Vista-principal-xiaomi.webp" , nombre_producto:"Xiaomi 14T Pro Titan Black 12gb Ram 512gb ram" , precioT:"$1,979,999" , mismo_precio:"Mismo precio en 12 cuotas de $198.250" , memoria_interna:"Memoria interna: 512 GB" , op_m_i:"128Gb" , op2_m_i:"512Gb" , memoria_ram:"Memoria RAM: 12 GB" , op_m_r:"12Gb" , op2_m_r:"16Gb" , ventas:"+5mil ventas",

        marca: "Xiaomi",
    },
    {
        id: 2,
        nombre: "Motorola G85 5g ",
        precio: 1979999,
        categoria: "Celular",
        Descripcion: "Moto G85 5g Dual Sim 256 Gb Rom Violeta 12 Gb Ram",
        stock: 50,
        imagen: "./imagenes/G85-cobalt-blue.png",
        imagen1:"imagenes/imagenes_celulares/vista1-Moto G85 5g Dual Sim.webp" , imagen2:"imagenes/imagenes_celulares/vista2-Moto G85 5g Dual Sim.webp" , imagen3:"imagenes/imagenes_celulares/vista3-Moto G85 5g Dual Sim.webp" , imagen4:"imagenes/imagenes_celulares/vista4-Moto G85 5g Dual Sim.webp" , imagen_principal:"imagenes/imagenes_celulares/Vista-principal-Moto G85 5g Dual Sim.webp" , nombre_producto:"Moto G85 5g Dual Sim 256 Gb Rom Violeta 12 Gb Ram" , precioT:"$1,979,999" , mismo_precio:"Mismo precio en 12 cuotas de  $66.666,58" , memoria_interna:"Memoria interna: 256 GB" , op_m_i:"128Gb" , op2_m_i:"256Gb" , memoria_ram:"Memoria RAM: 12 GB" , op_m_r:"12Gb" , op2_m_r:"16Gb" , ventas:"+5mil ventas",

        marca: "Motorola",
    },
    {
        id: 3,
        nombre: "Samsung Galaxy Z flip3 5G",
        precio: 660000,
        categoria: "Celular",
        Descripcion: "Galaxy Z Flip3 5G 128 GB phantom black 8 GB RAM",
        stock: 50,
        imagen: "./imagenes/Galaxy Z Flip3 5G.webp",
        imagen1:"imagenes/imagenes_celulares/vista1-Samsung Galaxy Z Flip3 5G 128.webp",imagen2:"imagenes/imagenes_celulares/vista2-Samsung Galaxy Z Flip3 5G 128.webp",imagen3:"imagenes/imagenes_celulares/vista3-Samsung Galaxy Z Flip3 5G 128.webp",imagen4:"imagenes/imagenes_celulares/vista4-Samsung Galaxy Z Flip3 5G 128.webp",imagen_principal:"imagenes/imagenes_celulares/Vista-principal-Samsung Galaxy Z Flip3 5G 128.webp",nombre_producto:"Galaxy Z Flip3 5G 128 GB phantom black 8 GB RAM",precioT:"$660.000",mismo_precio:"Mismo precio en 12 cuotas de $45.833,25",memoria_interna:"128 GB",op_m_i:"64GB",op2_m_i:"128GB",memoria_ram:"8 GB",op_m_r:"8GB",op2_m_r:"12GB",ventas:"+5mil ventas",

        marca: "Samsung",
    },
    {
        id: 4,
        nombre: "Samsung Galaxy S23 Ultra ",
        precio: 1815000,
        categoria: "Celular",
        Descripcion: "Galaxy S23 Ultra Dual SIM 256GB Negro 8GB RAM256 Gb. 8Gb Ram",
        stock: 50,
        imagen: "./imagenes/Galaxy S23 Ultra.webp",
        imagen1:"imagenes/imagenes_celulares/vista1-Galaxy S23 Ultra Dual SIM 256GB Negro 8GB RAM.webp",imagen2:"imagenes/imagenes_celulares/vista2-Galaxy S23 Ultra Dual SIM 256GB Negro 8GB RAM.webp",imagen3:"imagenes/imagenes_celulares/vista3-Galaxy S23 Ultra Dual SIM 256GB Negro 8GB RAM.webp",imagen4:"imagenes/imagenes_celulares/vista4-Galaxy S23 Ultra Dual SIM 256GB Negro 8GB RAM.webp",imagen_principal:"imagenes/imagenes_celulares/Vista-principal-Galaxy S23 Ultra Dual SIM 256GB Negro 8GB RAM.webp",nombre_producto:"Galaxy S23 Ultra Dual SIM 256GB Negro 8GB RAM",precioT:"$1,815,000",mismo_precio:"Mismo precio en 9 cuotas de $88.481,22",memoria_interna:"256 GB",op_m_i:"512GB",op2_m_i:"256GB",memoria_ram:"8 GB",op_m_r:"8GB",op2_m_r:"16GB",ventas:"+10mil ventas",

        marca: "Samsung",
    },
    {
        id: 5,
        nombre: "Samsung Galaxy S24 Ultra 5G ",
        precio: 2399999,
        categoria: "Celular",
        Descripcion: "Samsung Galaxy S24 Ultra 256 GB Negro 12 GB RAM",
        stock: 50,
        imagen: "./imagenes/Samsung Galaxy S24 Ultra 5G.webp",
        imagen1:"imagenes/thumbnail1.webp",imagen2:"imagenes/thumbnail2.webp",imagen3:"imagenes/thumbnail3.webp",imagen4:"imagenes/thumbnail4.webp",imagen_principal:"imagenes/celular_principal.webp",nombre_producto:"Samsung Galaxy S24 Ultra 256 GB Negro 12 GB RAM",precioT:"$2.379.000$",mismo_precio:"Mismo precio en 12 cuotas de $198.250",memoria_interna:"512 GB",op_m_i:"128GB",op2_m_i:"512GB",memoria_ram:"12 GB",op_m_r:"12GB",op2_m_r:"16GB",ventas:"+5mil ventas",
        

        marca: "Samsung",
    },
    {
        id: 6,
        nombre: "Samsung Galaxy S25 Ultra 5G ",
        precio: 2599999,
        categoria: "Celular",
        Descripcion: "Samsung Galaxy S25 Ultra 5G Dual SIM 512 GB azul acero 12 GB RAM",
        stock: 50,
        imagen: "./imagenes/Samsung Galaxy S25 Ultra 5G.webp",
        imagen1:"imagenes/imagenes_celulares/vista1-Samsung Galaxy S25 Ultra 5G Dual SIM.webp",imagen2:"imagenes/imagenes_celulares/vista2-Samsung Galaxy S25 Ultra 5G Dual SIM.webp",imagen3:"imagenes/imagenes_celulares/vista3-Samsung Galaxy S25 Ultra 5G Dual SIM.webp",imagen4:"imagenes/imagenes_celulares/vista4-Samsung Galaxy S25 Ultra 5G Dual SIM.webp",imagen_principal:"imagenes/imagenes_celulares/Vista-principal-Samsung Galaxy S25 Ultra 5G Dual SIM.webp",nombre_producto:"Samsung Galaxy S25 Ultra 5G Dual SIM 512 GB azul acero 12 GB RAM",precioT:"$2,599,999",mismo_precio:"Mismo precio en 12 cuotas de $203.333,33",memoria_interna:"512 GB",op_m_i:"128GB",op2_m_i:"512GB",memoria_ram:"12 GB",op_m_r:"12GB",op2_m_r:"16GB",ventas:"+5mil ventas",

        marca: "Samsung",
    },
    {
        id: 7,
        nombre: "Motorola G84 5G",
        precio: 519999,
        categoria: "Celular",
        Descripcion: "Moto G84 5G 256 GB Negro espacial 8 GB RAM",
        stock: 50,
        imagen: "./imagenes/Moto G84.webp",
        imagen1:"imagenes/imagenes_celulares/vista1-Motorola Moto G84 5G 256 GB Negro espacial 8 GB RAM.webp",imagen2:"imagenes/imagenes_celulares/vista2-Motorola Moto G84 5G 256 GB Negro espacial 8 GB RAM.webp",imagen_principal:"imagenes/imagenes_celulares/Vista-principal-Motorola Moto G84 5G 256 GB Negro espacial 8 GB RAM.webp",nombre_producto:"Moto G84 5G 256 GB Negro espacial 8 GB RAM",precioT:"$519,999",mismo_precio:"Mismo precio en 12 cuotas de $43.333,25",memoria_interna:"256 GB",op_m_i:"128Gb",op2_m_i:"256Gb",memoria_ram:"8 GB",op_m_r:"8Gb",op2_m_r:"16Gb",ventas:"+5mil ventas",
        

        marca: "Motorola",
    },
    {
        id: 8,
        nombre: "Samsung Galaxy A55 5G",
        precio: 984999,
        categoria: "Celular",
        Descripcion: "Samsung Galaxy A55 256GB Awesome navy 8GB RAM",
        stock: 50,
        imagen: "./imagenes/Samsung Galaxy A55.webp",
        imagen1:"imagenes/imagenes_celulares/vista1-Samsung Galaxy A55 256GB Awesome navy 8GB RAM.webp",
        imagen2:"imagenes/imagenes_celulares/vista2-Samsung Galaxy A55 256GB Awesome navy 8GB RAM.webp",
        imagen3:"imagenes/imagenes_celulares/vista3-Samsung Galaxy A55 256GB Awesome navy 8GB RAM.webp",
        imagen4:"",imagen_principal:"imagenes/imagenes_celulares/Vista-principal-Samsung Galaxy A55 256GB Awesome navy 8GB RAM.webp",
        nombre_producto:"Samsung Galaxy A55 256GB Awesome navy 8GB RAM",
        precioT:"$519,999",mismo_precio:"Mismo precio en 12 cuotas de $77.332,17",
        memoria_interna:"256 GB",
        op_m_i:"128GB",
        op2_m_i:"256GB",
        memoria_ram:"8 GB",
        op_m_r:"8GB",
        op2_m_r:"16GB",
        ventas:"4 ventas",
        marca: "Samsung",
    },
    {
        id: 9,
        nombre: "Motorola G75 Xt2437-2",
        precio: 759999,
        categoria: "Celular",
        Descripcion: "Moto G75 Xt2437-2 5g Ram 8gb Interna 128 Gb",
        stock: 50,
        imagen: "./imagenes/Moto G75 Xt2437-2 5g.webp",
        imagen1:"imagenes/imagenes_celulares/vista1-Motorola Moto G75 Xt2437-2 5g.webp",
        imagen2:"imagenes/imagenes_celulares/vista2-Motorola Moto G75 Xt2437-2 5g.webp",
        imagen3:"imagenes/imagenes_celulares/vista3-Motorola Moto G75 Xt2437-2 5g.webp",
        imagen4:"imagenes/imagenes_celulares/vista4-Motorola Moto G75 Xt2437-2 5g.webp",
        imagen_principal:"imagenes/imagenes_celulares/Vista-principal-Motorola Moto G75 Xt2437-2 5g.webp",
        nombre_producto:"Moto G75 Xt2437-2 5g Ram 8gb Interna 128 Gb",
        precioT:"$759,999",
        mismo_precio:"Mismo precio en 12 cuotas de $52.499,92",
        memoria_interna:"128 GB",
        op_m_i:"512GB",
        op2_m_i:"128GB",
        memoria_ram:"8 GB",
        op_m_r:"8GB",
        op2_m_r:"12GB",
        ventas:"+5mil ventas",
        marca: "Motorola",
    },
    {
        id: 10,
        nombre: "Samsung Galaxy S25",
        precio: 1749999,
        categoria: "Celular",
        Descripcion: "Galaxy S25 512gb",
        stock: 50,
        imagen: "./imagenes/Samsung Galaxy S25.webp",
        imagen1:"imagenes/imagenes_celulares/vista1-Samsung Galaxy S25 512gb Dual Sim Silver Shadow.webp",imagen2:"imagenes/imagenes_celulares/vista1-Samsung Galaxy S25 512gb Dual Sim Silver Shadow.webp",imagen3:"imagenes/imagenes_celulares/vista3-Samsung Galaxy S25 512gb Dual Sim Silver Shadow.webp",imagen4:"imagenes/imagenes_celulares/vista4-Samsung Galaxy S25 512gb Dual Sim Silver Shadow.webp",imagen_principal:"imagenes/imagenes_celulares/Vista-principal-Samsung Galaxy S25 512gb Dual Sim Silver Shadow.webp",nombre_producto:"Galaxy S25 512gb",precioT:"$1,749,999",mismo_precio:"Mismo precio en 12 cuotas de $163.464,02",memoria_interna:"512 GB",op_m_i:"128GB",op2_m_i:"512GB",memoria_ram:"12 GB",op_m_r:"12GB",op2_m_r:"16GB",ventas:"+5mil ventas",
        

        marca: "Samsung",
    },
    {
        id: 11,
        nombre: "Xiaomi Redmi Note 14 4g",
        precio: 450000,
        categoria: "Celular",
        Descripcion: "Xiaomi Redmi Note 14 4g 256gb 8gb Ram",
        stock: 50,
        imagen: "./imagenes/Xiaomi Redmi Note 14 4g.webp",
        imagen1:"imagenes/imagenes_celulares/vista1-Xiaomi Redmi Note 14 4g.webp",imagen2:"imagenes/imagenes_celulares/vista2-Xiaomi Redmi Note 14 4g.webp",imagen3:"imagenes/imagenes_celulares/vista3-Xiaomi Redmi Note 14 4g.webp",imagen4:"imagenes/imagenes_celulares/vista4-Xiaomi Redmi Note 14 4g.webp",imagen_principal:"imagenes/imagenes_celulares/Vista-principal-Xiaomi Redmi Note 14 4g.webp",nombre_producto:"Xiaomi Redmi Note 14 4g 256gb 8gb Ram",precioT:"$450,000",mismo_precio:"Mismo precio en 6 cuotas de $60.435,62",memoria_interna:"128 GB",op_m_i:"256GB",op2_m_i:"128GB",memoria_ram:"6 GB",op_m_r:"6GB",op2_m_r:"8GB",ventas:"+5mil ventas",
        

        marca: "Xiaomi",
    },
    {
        id: 12,
        nombre: "Xiaomi Poco X7 Pro 5g <br> Iron man Edition",
        precio: 1183295,
        categoria: "Celular",
        Descripcion: "Xiaomi Poco X7 Pro 5g Iron Man Edition 12gb Ram Rojo 512gb Rom",
        stock: 50,
        imagen: "./imagenes/Xiaomi Poco X7 Pro 5g Iron Man Edition.webp",
        imagen1:"imagenes/imagenes_celulares/vista1-xiaomi-poco-x7-pro-iron-man.webp",imagen2:"imagenes/imagenes_celulares/vista2-xiaomi-poco-x7-pro-iron-man.webp",imagen3:"imagenes/imagenes_celulares/vista3-xiaomi-poco-x7-pro-iron-man.webp",imagen4:"imagenes/imagenes_celulares/vista4-xiaomi-poco-x7-pro-iron-man.webp",imagen_principal:"imagenes/imagenes_celulares/Vista-principal-xiaomi-poco-x7-pro-iron-man.webp",nombre_producto:"Xiaomi Poco X7 Pro 5g Iron Man Edition 12gb Ram Rojo 512gb Rom",precioT:"$1,979,999",mismo_precio:"Mismo precio en 6 cuotas de $190.593,83",memoria_interna:"512 GB",op_m_i:"128GB",op2_m_i:"512GB",memoria_ram:"12 GB",op_m_r:"12GB",op2_m_r:"16GB",ventas:"+100 ventas",


        marca: "Xiaomi",
    },
    {
        id: 13,
        nombre: "Xiaomi 13T Pro titan ",
        precio: 1979999,
        categoria: "Celular",
        Descripcion: "Xiaomi 13T Dual SIM 256 GB negro 8 GB RAM",
        stock: 50,
        imagen: "./imagenes/Xiaomi 13T.webp",
        imagen1:"imagenes/imagenes_celulares/vista1-Xiaomi 13T Dual SIM 256 GB negro 8 GB RAM.webp",imagen2:"imagenes/imagenes_celulares/vista2-Xiaomi 13T Dual SIM 256 GB negro 8 GB RAM.webp",imagen3:"imagenes/imagenes_celulares/vista3-Xiaomi 13T Dual SIM 256 GB negro 8 GB RAM.webp",imagen4:"imagenes/imagenes_celulares/vista4-Xiaomi 13T Dual SIM 256 GB negro 8 GB RAM.webp",imagen_principal:"imagenes/imagenes_celulares/Vista-principal-Xiaomi 13T Dual SIM 256 GB negro 8 GB RAM.webp",nombre_producto:"Xiaomi 13T Dual SIM 256 GB negro 8 GB RAM",precioT:"$1.949.990",mismo_precio:"Mismo precio en 12 cuotas de $154.166,67",memoria_interna:"256 GB",op_m_i:"128GB",op2_m_i:"256GB",memoria_ram:"8 GB",op_m_r:"8GB",op2_m_r:"12GB",ventas:"+5mil ventas",
        

        marca: "Xiaomi",
    },
    {
        id: 14,
        nombre: "iPhone 15",
        precio: 1489990,
        categoria: "Celular",
        Descripcion: "Apple iPhone 15 128 GB Negro",
        stock: 50,
        imagen: "./imagenes/Apple iPhone 15.webp",
        
        imagen1:"imagenes/imagenes_celulares/vista1-Apple iPhone 15 128 GB Negro.webp",imagen2:"imagenes/imagenes_celulares/vista2-Apple iPhone 15 128 GB Negro.webp",imagen3:"imagenes/imagenes_celulares/vista3-Apple iPhone 15 128 GB Negro.webp",imagen4:"imagenes/imagenes_celulares/vista4-Apple iPhone 15 128 GB Negro.webp",imagen_principal:"imagenes/imagenes_celulares/Vista-principal-Apple iPhone 15 128 GB Negro.webp",nombre_producto:"Apple iPhone 15 128 GB Negro",precioT:"$1.489.990",mismo_precio:"Mismo precio en 12 cuotas de $120.085,75",memoria_interna:"128 GB",op_m_i:"256GB",op2_m_i:"128GB",memoria_ram:"6 GB",op_m_r:"6GB",op2_m_r:"8GB",ventas:"+5mil ventas",

        marca:"Apple",
    },
    {
        id: 15,
        nombre: " iPhone 16 Pro Max ",
        precio: 4888778,
        categoria: "Celular",
        Descripcion: "Apple iPhone 16 Pro Max (256 GB)",
        stock: 50,
        imagen: "./imagenes/Apple iPhone 16 Pro Max.webp",
        imagen1:"imagenes/imagenes_celulares/vista1-Apple iPhone 16 Pro Max (256 GB).webp",imagen2:"imagenes/imagenes_celulares/vista2-Apple iPhone 16 Pro Max (256 GB).webp",imagen3:"imagenes/imagenes_celulares/vista3-Apple iPhone 16 Pro Max (256 GB).webp",imagen4:"imagenes/imagenes_celulares/vista4-Apple iPhone 16 Pro Max (256 GB).webp",imagen_principal:"imagenes/imagenes_celulares/Vista-principal-Apple iPhone 16 Pro Max (256 GB).webp",nombre_producto:"Apple iPhone 16 Pro Max (256 GB)",precioT:"$4.888.778",mismo_precio:"Mismo precio en 12 cuotas de $192.916,67",memoria_interna:"128 GB",op_m_i:"256Gb",op2_m_i:"128Gb",memoria_ram:"8 GB",op_m_r:"8Gb",op2_m_r:"16Gb",ventas:"+5mil ventas",
        
        

        marca:"Apple",
    },
    {
        id: 16,
        nombre: "iPhone 13 Pro Max",
        precio: 1999999,
        categoria: "Celular",
        Descripcion: "Apple iPhone 13 Pro Max",
        stock: 50,
        imagen: "./imagenes/Apple iPhone 13 Pro Max.webp",
        imagen1:"imagenes/imagenes_celulares/vista1-Apple iPhone 13 Pro Max (256 GB).webp",imagen2:"imagenes/imagenes_celulares/vista2-Apple iPhone 13 Pro Max (256 GB).webp",imagen3:"imagenes/imagenes_celulares/vista3-Apple iPhone 13 Pro Max (256 GB).webp",imagen4:"imagenes/imagenes_celulares/vista4-Apple iPhone 13 Pro Max (256 GB).webp",imagen_principal:"imagenes/imagenes_celulares/Vista-principal-Apple iPhone 13 Pro Max (256 GB).webp",nombre_producto:"Apple iPhone 13 Pro Max",precioT:"$1.999.999",mismo_precio:"Mismo precio en 6 cuotas de $399.571,88",memoria_interna:"256 GB",op_m_i:"128Gb",op2_m_i:"256Gb",memoria_ram:"8 GB",op_m_r:"8Gb",op2_m_r:"16Gb",ventas:"+5mil ventas",
        

        marca:"Apple",
    },
    {
        id: 17,
        nombre: "Galaxy Z Fold 6",
        precio: 3999999,
        categoria: "Celular",
        Descripcion: "Samsung Galaxy 256gb 12 Gb Ram Gris",
        stock: 50,
        imagen: "./imagenes/galaxy_z_fold5.avif",

        marca: "Samsung",
    },
]

// falta lo siguiente el id 14 no tiene sus vistas de otras imagnees!!! solo eso y ya estariamos y procederemos con el carrito

const especificaciones_producto = [
    ["Memoria RAM: 12 GB","Dispositivo liberado para que elijas la compañía telefónica que prefieras.","Compatible con redes 5G.","Pantalla Dynamic AMOLED 2X de 6.8","Tiene 4 cámaras traseras de 200Mpx/50Mpx/10Mpx/12Mpx.","Cámaras delanteras de 12Mpx.","Batería de 5000mAh con carga inalámbrica.","Memoria interna de 512GB.","Resistente al agua.","Con reconocimiento facial y sensor de huella dactilar.","Resistente al polvo.","Tarjeta eSIM incluida."],
    ["Memoria RAM: 12 GB", "Dispositivo liberado para que elijas la compañía telefónica que prefieras.", "Compatible con redes 5G.", "Pantalla AMOLED de 6.67\".", "Cámara delantera de 32Mpx", "Procesador MTK DX-3+ Octa-Core de 3.4GHz con 12GB de RAM.", "Batería de 5000mAh con carga inalámbrica.", "Memoria interna de 512GB.", "A prueba de agua.", "Con reconocimiento facial y sensor de huella dactilar.", "Resistente al polvo."],
    ["Más de 80% de capacidad de batería.","Pantalla con rayones o rasguños.","Marcas de uso notorias."],
    ["Más de 80% de capacidad de batería.","Pantalla con rayones o rasguños.","Marcas de uso notorias."],
    ["Memoria RAM: 12 GB","Dispositivo liberado para que elijas la compañía telefónica que prefieras.","Compatible con redes 5G.","Pantalla Dynamic AMOLED 2X de 6.8\".","Tiene 4 cámaras traseras de 200Mpx/50Mpx/10Mpx/12Mpx.","Cámaras delanteras de 12Mpx.","Batería de 5000mAh con carga inalámbrica.","Memoria interna de 512GB.","Resistente al agua.","Con reconocimiento facial y sensor de huella dactilar.","Resistente al polvo.","Tarjeta eSIM incluida."],
    ["Memoria RAM: 12 GB","Dispositivo liberado para que elijas la compañía telefónica que prefieras.","Compatible con redes 5G.","Pantalla de 6.9\".","Memoria interna de 512GB.","sensor con huella digita."],
    ["Memoria RAM: 8 GB","Dispositivo liberado para que elijas la compañía telefónica que prefieras.","Compatible con redes 5G.","Pantalla POLED de 6.55\".","Tiene 2 cámaras traseras de 50Mpx/8Mpx.","Cámaras delanteras de 16Mpx","Procesador Snapdragon 695 Octa-Core de 2.2GHz con 8GB de RAM.","Batería de 5000mAh con carga inalámbrica.","Memoria interna de 256GB.","Resistente a las salpicaduras.","Con reconocimiento facial y sensor de huella dactilar.","Resistente al polvo.","Tarjeta eSIM incluida."],
    ["Memoria RAM: 8 GB","Dispositivo liberado para que elijas la compañía telefónica que prefieras.","Compatible con redes 5G.","Memoria interna de 256GB."],
    ["Memoria RAM: 8 GB.","Dispositivo liberado para que elijas la compañía telefónica que prefieras.","Compatible con redes 5G.","Pantalla LCD de 6.78\".","Cámara delantera de 16Mpx.","Memoria interna de 128GB.","Con reconocimiento facial y sensor de huella dactilar."],
    ["Dispositivo liberado para que elijas la compañía telefónica que prefieras.","Compatible con redes 5G.","Pantalla AMOLED de 6.67\".","Tiene 3 cámaras traseras de 200Mpx/8Mpx/2Mpx","Cámara delantera de 16Mpx","Procesador Snapdragon 7S Gen 2 Octa-Core de 2.4GHz con 8GB de RAM.","Batería de 5000mAh con carga inalámbrica.","Memoria interna de 256GB.","Con reconocimiento facial y sensor de huella dactilar."],
    ["Dispositivo liberado para que elijas la compañía telefónica que prefieras.","Pantalla AMOLED de 6.67\".","Cámara delantera de 20Mpx","Tiene 3 cámaras traseras de 108Mpx/8Mpx/2Mpx","Batería de 5000mAh","Memoria interna de 128GB.","Con reconocimiento facial y sensor de huella dactilar.","Resistente al polvo."],
    ["Memoria RAM: 12 GB","Dispositivo liberado para que elijas la compañía telefónica que prefieras.","Compatible con redes 5G.","Memoria interna de 512GB."],
    ["Memoria RAM: 8 GB.","Dispositivo liberado para que elijas la compañía telefónica que prefieras.","Compatible con redes 5G.","Pantalla AMOLED de 6.67\".","Tiene 3 cámaras traseras de 50Mpx/50Mpx/12Mpx.","Cámara delantera de 20Mpx.","Procesador MediaTek Dimensity 8200 Octa-Core de 3.1GHz con 8GB de RAM.","Batería de 5000mAh con carga inalámbrica.","Memoria interna de 256GB.","A prueba de agua.","Con reconocimiento facial y sensor de huella dactilar.","Tarjeta eSIM incluida."],
    ["Memoria RAM: 6 GB.","La Dynamic Island te muestra alertas y actividades en vivo","Diseño innovador con pantalla Super Retina XDR","Cámara gran angular de 48 MP con teleobjetivo de 2x","Retratos de última generación","Superpotente chip A16 Bionic.","Conexión USB-C","Funcionalidad esencial de seguridad con detección de choques para pedir ayuda","Con tecnologías de privacidad que te ayudan a mantener el control de tus datos"],
    ["Memoria RAM: 8 GB.","Imponente diseño de titanio.","Control de la cámara.","Capturas soñadas.","Estilos fotográficos.","La potencia del chip A18 Pro.","Un salto enorme en batería.","Personaliza tu iPhone.","Funcionalidades esenciales de seguridad"],
    ["Memoria RAM: 6 GB","Dispositivo liberado para que elijas la compañía telefónica que prefieras.","Compatible con redes 5G.","Pantalla AMOLED de 6.67\".","Cámara delantera de 32Mpx","Procesador MTK DX-3+ Octa-Core de 3.4GHz con 12GB de RAM.","Batería de 5000mAh con carga inalámbrica.","Memoria interna de 512GB.","A prueba de agua.","Con reconocimiento facial y sensor de huella dactilar.","Resistente al polvo."]
];


//generamos la lista de celulares
let lista = document.getElementById("lista");

for (let i = 0; i < Productos.length; i++) {

    lista.innerHTML += `
        <div onclick="mostrar(this.id)" id="${Productos[i].id}"  class=" producto col-12 col-md-12 col-lg-12 d-flex align-items-center" onclick="mostrar_detalles_producto(${Productos[i].id})">

            <img src="${Productos[i].imagen}" alt="">
            <div>
                
                <p>${Productos[i].nombre}</p>
                <p>${Productos[i].precio}</p>

            </div>

        </div> 

    `
    console.log(Productos[i]); 
}


//lo de gonza
function mostrar(id) {
    producto.innerHTML = "";

    const prod = Productos[id -1];
    const es = especificaciones_producto[id -1];
    
    producto.innerHTML = `
    <div class="container-fluid row justify-content-center ">
      <div class="product-gallery col-12 col-md-4 col-lg-4 order-1 order-md-1 order-lg-1">
        <div class="thumbnails">
          <img src="${prod.imagen1}">
          <img src="${prod.imagen2}">
          <img src="${prod.imagen3}">
          <img src="${prod.imagen4}">
        </div>
        <div class="main-image">
          <img src="${prod.imagen_principal}">
        </div>
      </div>

      <div class="product-specs col-12 col-md-4 col-lg-4 order-3 order-md-2 order-lg-2">
        <h2>Lo que tenés que saber de este producto</h2>
        <ul class="especif-producto"></ul>
      </div>

      <div class="product-purchase-info col-12 col-md-4 col-lg-4 order-2 order-md-3 order-lg-3">
        <h1 class="nombre-producto">${prod.nombre_producto}</h1>
        <p class="price">${prod.precio}</p>
        <p class="installments">${prod.mismo_precio}</p>

        <div class="variant-option">
          <label>Memoria interna: ${prod.memoria_interna}</label>
          <div class="options">
            <button class="option-button">${prod.op_m_i}</button>
            <button class="option-button selected">${prod.op2_m_i}</button>
          </div>
        </div>

        <div class="variant-option">
          <label>Memoria RAM: ${prod.memoria_ram}</label>
          <div class="options">
            <button class="option-button selected">${prod.op_m_r}</button>
            <button class="option-button">${prod.op2_m_r}</button>
          </div>
        </div>

        <button class="buy-now-button">Comprar ahora</button>
        <button id = "${prod.id}" class="add-to-cart-button" onclick ="agregarAlCarrito(this.id)">Agregar al carrito</button>
        <p class="sales-count">${prod.ventas}</p>
      </div>
    </div>
    `;

    const ules = producto.querySelector(".especif-producto");

    es.forEach(espe => {
        const li = document.createElement("li");
        li.textContent = espe;
        ules.appendChild(li);
    });


    mostrar_producto();
}




 
//carrito
let carritoo=[]

function agregarAlCarrito(id) {
    const producto = Productos.find(p => p.id === parseInt(id));
    if (producto) {
        const existente = carritoo.find(p => p.id === producto.id);
        if (existente) {
            existente.cantidad += 1;

            const filas = document.querySelectorAll("#tbody tr");
            filas.forEach(fila => {
                if (fila.children[1].textContent === producto.nombre) {
                    const inputCantidad = fila.querySelector(".cantidad-input");
                    const tdSubtotal = fila.querySelector(".sub_total");
                    inputCantidad.value = existente.cantidad;
                    tdSubtotal.textContent = `$${(producto.precio * existente.cantidad).toLocaleString('es-AR')}`;

                }
            });

        } else {
            carritoo.push({ ...producto, cantidad: 1 });
            generar_producto(producto.id);
        }

        alert(`${producto.nombre} fue agregado al carrito.`);
        sumar_productos();
    }
}






function generar_producto(id) {
    let producto = Productos.find(p => p.id === parseInt(id));

    let tbody = document.getElementById("tbody");
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td><img src="${producto.imagen}" width="70"></td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td><input type="number" min="1" value="1" class="cantidad-input"></td>
        <td class="sub_total">$${producto.precio.toLocaleString('es-AR')}</td>
        <td><button onclick="eliminar_del_carrito(this.id)" id="${producto.id}" class="btn-accion eliminar">Eliminar</button></td>
    `;
    tbody.appendChild(tr);

    
}
function eliminar_del_carrito(id) {
 
    carritoo = carritoo.filter(p => p.id !== parseInt(id));

   
    const filas = document.querySelectorAll("#tbody tr");
    filas.forEach(fila => {
        const btn = fila.querySelector("button.eliminar");
        if (btn && btn.id === id) {
            fila.remove();
        }
    });

    sumar_productos();
}
function sumar_productos(){

    let total= 0
    let subtotal=0

    carritoo.forEach(producto=>{
        total+= producto.precio * producto.cantidad
        subtotal+= producto.precio * producto.cantidad
    })
    document.getElementById("spann").textContent=`$${subtotal.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` //el tolocalestring es para poner los separadore de los numeros 
    document.getElementById("span").textContent=`$${total.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

}