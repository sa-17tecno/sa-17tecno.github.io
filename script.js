// Botón de WhatsApp
document.getElementById('whatsappBtn').addEventListener('click', function() {
    const numero = "5492324617203";
    const mensaje = "Hola, vengo de la página web";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
});

// Botón de Instagram
const instagramBtn = document.getElementById('instagramBtn');
if (instagramBtn) {
    instagramBtn.addEventListener('click', function() {
        const url = "https://www.instagram.com/TU_USUARIO";
        window.open(url, '_blank');
    });
}

// Botón de Email
const emailBtn = document.getElementById('emailBtn');
if (emailBtn) {
    emailBtn.addEventListener('click', function() {
        window.location.href = "mailto:sadiecisiete@gmail.com";
    });
}

// Modo oscuro
const darkModeBtn = document.getElementById('darkModeBtn');
const modoOscuroGuardado = localStorage.getItem('darkMode');

if (modoOscuroGuardado === 'activado') {
    document.body.classList.add('dark-mode');
    if (darkModeBtn) darkModeBtn.textContent = '☀️';
}

if (darkModeBtn) {
    darkModeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            darkModeBtn.textContent = '☀️';
            localStorage.setItem('darkMode', 'activado');
        } else {
            darkModeBtn.textContent = '🌙';
            localStorage.setItem('darkMode', 'desactivado');
        }
    });
}