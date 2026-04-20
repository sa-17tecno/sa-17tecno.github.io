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

// Función para obtener parámetros de la URL
function getParametroURL(nombre) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nombre);
}

// Función para mostrar productos
function mostrarProductos(productosAMostrar) {
    const grid = document.getElementById('productos-grid');
    const contador = document.getElementById('contador-productos');
    
    if (!grid) {
        console.error("No se encontró el elemento 'productos-grid'");
        return;
    }
    
    if (productosAMostrar.length === 0) {
        grid.innerHTML = '<div class="no-productos">😕 No hay productos en esta categoría</div>';
        if (contador) contador.textContent = 'Mostrando 0 productos';
        return;
    }
    
    if (contador) contador.textContent = `Mostrando ${productosAMostrar.length} productos`;
    
    let html = '';
    for (let i = 0; i < productosAMostrar.length; i++) {
        const p = productosAMostrar[i];
        html += `
            <div class="producto-card">
                <div class="producto-imagen" style="background-image: url('${p.imagen || 'https://via.placeholder.com/300x200/9111e6/ffffff?text=SA17'}')"></div>
                <div class="producto-info">
                    <h3>${p.nombre}</h3>
                    <p class="producto-categoria">📁 ${p.categoria}</p>
                    <div class="producto-precio">$${p.precio.toLocaleString()}</div>
                    <button class="btn-comprar" data-nombre="${p.nombre}">Comprar</button>
                </div>
            </div>
        `;
    }
    
    grid.innerHTML = html;
    
    // Eventos de los botones COMPRAR (WhatsApp con mensaje simple)
    const botones = document.querySelectorAll('.btn-comprar');
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click', function() {
            const nombreProducto = this.getAttribute('data-nombre');
            const numero = "5492324617203";
            const mensaje = `Hola! Quiero comprar: ${nombreProducto}`;
            const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
            window.open(url, '_blank');
        });
    }
}

// Función para filtrar
function aplicarFiltros() {
    let productosFiltrados = [];
    
    for (let i = 0; i < productos.length; i++) {
        productosFiltrados.push(productos[i]);
    }
    
    const categoriaSelect = document.getElementById('categoria-filtro');
    if (categoriaSelect) {
        const categoria = categoriaSelect.value;
        if (categoria !== 'todos') {
            productosFiltrados = [];
            for (let i = 0; i < productos.length; i++) {
                if (productos[i].categoria === categoria) {
                    productosFiltrados.push(productos[i]);
                }
            }
        }
    }
    
    const ordenSelect = document.getElementById('orden-precio');
    if (ordenSelect) {
        const orden = ordenSelect.value;
        if (orden === 'menor-mayor') {
            productosFiltrados.sort(function(a, b) {
                return a.precio - b.precio;
            });
        } else if (orden === 'mayor-menor') {
            productosFiltrados.sort(function(a, b) {
                return b.precio - a.precio;
            });
        }
    }
    
    mostrarProductos(productosFiltrados);
}

// INICIALIZACIÓN
window.addEventListener('DOMContentLoaded', function() {
    console.log("Página cargada, iniciando productos...");
    
    const categoriaURL = getParametroURL('categoria');
    
    if (categoriaURL) {
        const filtro = document.getElementById('categoria-filtro');
        if (filtro) {
            filtro.value = categoriaURL;
            console.log("Categoría seleccionada:", categoriaURL);
        }
    }
    
    const filtroCategoria = document.getElementById('categoria-filtro');
    const filtroOrden = document.getElementById('orden-precio');
    
    if (filtroCategoria) {
        filtroCategoria.addEventListener('change', aplicarFiltros);
    }
    
    if (filtroOrden) {
        filtroOrden.addEventListener('change', aplicarFiltros);
    }
    
    aplicarFiltros();
    
    if (categoriaURL) {
        const subtitulo = document.querySelector('.productos-header p');
        if (subtitulo) {
            const nombres = {
                'Auriculares': '🎧 Auriculares',
                'Cargadores': '🔋 Cargadores y Cables',
                'Smartwatchs': '⌚ Smartwatches',
                'Iluminación': '💡 Iluminación'
            };
            if (nombres[categoriaURL]) {
                subtitulo.innerHTML = `Mostrando productos de ${nombres[categoriaURL]}`;
            }
        }
    }
});

// MODO OSCURO
const botonModoOscuro = document.getElementById('darkModeBtn');
const modoGuardado = localStorage.getItem('darkMode');

if (modoGuardado === 'activado') {
    document.body.classList.add('dark-mode');
    if (botonModoOscuro) botonModoOscuro.textContent = '☀️';
}

if (botonModoOscuro) {
    botonModoOscuro.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            botonModoOscuro.textContent = '☀️';
            localStorage.setItem('darkMode', 'activado');
        } else {
            botonModoOscuro.textContent = '🌙';
            localStorage.setItem('darkMode', 'desactivado');
        }
    });
}