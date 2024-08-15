function changeImage(imgId, imgSrc, btn) {
    // Cambia la imagen
    document.getElementById(imgId).src = imgSrc;

    // Encuentra el contenedor de botones de color
    var colorOptions = btn.parentElement.getElementsByClassName('color-btn');
    
    // Remueve la clase 'active' de todos los botones de color
    for (var i = 0; i < colorOptions.length; i++) {
        colorOptions[i].classList.remove('active');
    }
    
    // Agrega la clase 'active' al botón seleccionado
    btn.classList.add('active');
}
