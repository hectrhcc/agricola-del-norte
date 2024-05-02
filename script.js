document.addEventListener('DOMContentLoaded', () => { //para que funcionen los alert
    const imagenes = document.querySelectorAll('.img-galeria')
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-content')
    const cerrar = document.querySelector('.close')
    const despliguenav = document.querySelector('.hamburguesa')
    const movil = document.querySelector('.movil')

despliguenav.addEventListener('click',()=>{
    movil.style.display = 'block'; 
    despliguenav.style.display = 'none'; 
})

    imagenes.forEach(imagen =>{
        imagen.addEventListener('click', ()=>{
            modal.style.display = 'block'; 
            modal.style.zIndex= '11';
            modalImg.src = imagen.src; 
            imagen.style.zIndex = '10';
            document.body.classList.add('modal-open'); 
        })
    })
    
  
    cerrar.addEventListener('click', () => {
        modal.style.display = 'none'; 
        document.body.classList.remove('modal-open'); 
    });

    var logo = document.querySelector('.logo');
    logo.style.animation = 'emergeLogo 2s forwards'; // Cambia '1s' a la duración deseada de la animación
});