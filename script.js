document.getElementById('whatsappBtn').addEventListener('click', function() {
    const numero = "5492324617203";
    const mensaje = "Hola, vengo de la página web";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
});