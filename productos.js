// Lista completa de productos
const productos = [
    { id: 1, nombre: "Cargador 220V MIXOR - 51A - 2 USB + Cable Tipo C", categoria: "Cargadores", precio: 7000, imagen: "imagenes/mixor-quiero.png" },
    { id: 2, nombre: "Auriculares con Cable M11 (Negro)", categoria: "Auriculares", precio: 2600, imagen: "imagenes/aurism11black.png" },
    { id: 3, nombre: "Auriculares con Cable M11 (Blanco)", categoria: "Auriculares", precio: 2600, imagen: "imagenes/aurism11white.png" },
    { id: 4, nombre: "Auriculares M41", categoria: "Auriculares", precio: 12000, imagen: "imagenes/m41.png" },
    { id: 5, nombre: "Smartwatch Watch 8 Ultra", categoria: "Smartwatchs", precio: 25000, imagen: "imagenes/sw8ultra.png" },
    { id: 6, nombre: "Auriculares Air 31 (Negro)", categoria: "Auriculares", precio: 8400, imagen: "imagenes/air31black.png" },
    { id: 7, nombre: "Auriculares Air 31 (Rosa)", categoria: "Auriculares", precio: 7500, imagen: "imagenes/air31pink.png" },
    { id: 8, nombre: "Smartwatch ZL02 PRO (Azul)", categoria: "Smartwatchs", precio: 33900, imagen: "imagenes/swzl02black.png" },
    { id: 9, nombre: "Smartwatch ZL02 PRO (Negro)", categoria: "Smartwatchs", precio: 33000, imagen: "imagenes/swzl02blue.png" },
    { id: 10, nombre: "PARLANTE UNI-RETROILUMINADO 3 PULGADAS", categoria: "Parlantes", precio: 15000, imagen: "imagenes/parlante3p.png" },
    { id: 11, nombre: "PARLANTE T06 (Para la ducha y la pileta)", categoria: "Parlantes", precio: 10200, imagen: "imagenes/parlantet06.png" },
    { id: 12, nombre: "Auriculares M25", categoria: "Auriculares", precio: 10500, imagen: "/imagenes/m25.png" },
    { id: 13, nombre: "CABEZAL DE CARGA RÁPIDA 65W (ENTRADA TIPO C)", categoria: "Cargadores", precio: 12000, imagen: "imagenes/cargadorrapido.png" },
    { id: 14, nombre: "SMARTWATCH T1000 ULTRA 3 - 7 MALLAS", categoria: "Smartwatchs", precio: 35000, imagen: "imagenes/sw7mallas.png" },
    { id: 15, nombre: "LÁMPARA NOCTURNA LUNA Y ESTRELLAS", categoria: "Iluminación", precio: 9600, imagen: "imagenes/lampstar.png" },
    { id: 16, nombre: "AURICULARES DEPORTIVO MANOS LIBRES", categoria: "Auriculares", precio: 6200, imagen: "imagenes/manoslibres.png" },
    { id: 17, nombre: "CABLE USB - VITAL - TIPO C (Negro)", categoria: "Cargadores", precio: 3300, imagen: "imagenes/mixor-cable.png" },
    { id: 18, nombre: "Smartwatch ZL165 Negro", categoria: "Smartwatchs", precio: 38000, imagen: "imagenes/swzl165.png" },
    { id: 19, nombre: "LINTERNA CARGADOR TIPO C", categoria: "Iluminación", precio: 4000, imagen: "imagenes/linternac.png" },
    { id: 20, nombre: "MOCHILA (CAQUI)", categoria: "Mochilas/Fundas", precio: 20000, imagen: "imagenes/mochila.png" },
    { id: 21, nombre: "Mochila Negra", categoria: "Mochilas/Fundas", precio: 20000, imagen: "imagenes/mochila.png" }
];

// Función para renderizar productos
function renderizarProductos(productosFiltrados) {
    const grid = document.getElementById('productos-grid');
    const contador = document.getElementById('contador-productos');
    
    if (productosFiltrados.length === 0) {
        grid.innerHTML = '<div class="no-productos">😕 No hay productos en esta categoría</div>';
        contador.textContent = 'Mostrando 0 productos';
        return;
    }
    
    contador.textContent = `Mostrando ${productosFiltrados.length} productos`;
    
    grid.innerHTML = productosFiltrados.map(producto => `
        <div class="producto-card">
            <div class="producto-imagen" style="background-image: url('${producto.imagen || 'https://via.placeholder.com/300x200/9111e6/ffffff?text=SA17'}')"></div>
            <div class="producto-info">
                <h3>${producto.nombre}</h3>
                <p class="producto-categoria">📁 ${producto.categoria}</p>
                <div class="producto-precio">$${producto.precio.toLocaleString()}</div>
                <button class="btn-comprar" data-id="${producto.id}">Ver más</button>
            </div>
        </div>
    `).join('');
    
    // Agregar eventos a los botones "Ver más"
    document.querySelectorAll('.btn-comprar').forEach(boton => {
        boton.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            const producto = productos.find(p => p.id === id);
            alert(`📱 ${producto.nombre}\n💰 $${producto.precio.toLocaleString()}\n📁 ${producto.categoria}\n\nMás información disponible en breve. ¡Consultanos!`);
        });
    });
}

// Función para filtrar y ordenar productos
function filtrarYOrdenar() {
    let productosFiltrados = [...productos];
    
    // Filtrar por categoría
    const categoria = document.getElementById('categoria-filtro').value;
    if (categoria !== 'todos') {
        productosFiltrados = productosFiltrados.filter(p => p.categoria === categoria);
    }
    
    // Ordenar por precio
    const orden = document.getElementById('orden-precio').value;
    if (orden === 'menor-mayor') {
        productosFiltrados.sort((a, b) => a.precio - b.precio);
    } else if (orden === 'mayor-menor') {
        productosFiltrados.sort((a, b) => b.precio - a.precio);
    }
    
    renderizarProductos(productosFiltrados);
}

// Inicializar la página cuando carga
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar todos los productos al inicio
    renderizarProductos(productos);
    
    // Agregar event listeners a los filtros
    document.getElementById('categoria-filtro').addEventListener('change', filtrarYOrdenar);
    document.getElementById('orden-precio').addEventListener('change', filtrarYOrdenar);
    
    // Animación de entrada para las tarjetas
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 50);
                observer.unobserve(entry.target);
            }
        });
    });
    
    // Esperar un poco para que las tarjetas existan en el DOM
    setTimeout(() => {
        const cards = document.querySelectorAll('.producto-card');
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });
    }, 100);
});