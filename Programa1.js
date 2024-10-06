// Lista de productos de cómputo
const productos = [
    { nombre: "Laptop", precio: 15000 },
    { nombre: "Teclado", precio: 1200 },
    { nombre: "Monitor", precio: 7000 },
    { nombre: "Mouse", precio: 500 },
    { nombre: "Silla", precio: 3000 },
    { nombre: "Impresora", precio: 3500 },
    { nombre: "Router", precio: 2500 },
    { nombre: "Disco Duro Externo", precio: 2000 },
    { nombre: "Cámara Web", precio: 800 },
    { nombre: "Auriculares", precio: 1500 },
    { nombre: "Memoria USB", precio: 300 },
    { nombre: "Tablet", precio: 6000 },
    { nombre: "Micrófono", precio: 1000 },
    { nombre: "Tarjeta Gráfica", precio: 12000 },
    { nombre: "Case para PC", precio: 1500 }

];

// Función para filtrar productos por precio
const filtrarPorPrecio = (minPrecio, maxPrecio) => {
    return productos.filter(producto => producto.precio >= minPrecio && producto.precio <= maxPrecio);
};

// Función para buscar productos por nombre
const buscarPorNombre = (nombre) => {
    return productos.filter(producto => producto.nombre.toLowerCase().includes(nombre.toLowerCase()));
};

// Función para mostrar productos en la lista
const mostrarProductos = (productosFiltrados) => {
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = ''; // Limpiamos la lista antes de mostrar resultados

    if (productosFiltrados.length === 0) {
        listaProductos.innerHTML = `<li>No se encontraron productos</li>`;
        return;
    }

    // Mostramos los productos filtrados
    productosFiltrados.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        listaProductos.appendChild(li);
    });
};

// Manejamos el formulario para filtrar por precio
document.getElementById('form-precio').addEventListener('submit', (evento) => {
    evento.preventDefault(); // Evitamos que el formulario se envíe y recargue la página

    // Obtenemos los valores de precio
    const minPrecio = parseInt(document.getElementById('min-precio').value);
    const maxPrecio = parseInt(document.getElementById('max-precio').value);

    // Filtramos los productos y los mostramos
    const productosFiltrados = filtrarPorPrecio(minPrecio, maxPrecio);
    mostrarProductos(productosFiltrados);
});

// Manejamos el formulario para buscar por nombre
document.getElementById('form-nombre').addEventListener('submit', (evento) => {
    evento.preventDefault(); // Evitamos que el formulario se envíe y recargue la página

    // Obtenemos el valor del nombre
    const nombre = document.getElementById('nombre').value;

    // Buscamos los productos por nombre y los mostramos
    const productosFiltrados = buscarPorNombre(nombre);
    mostrarProductos(productosFiltrados);
});
