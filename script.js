document.addEventListener('DOMContentLoaded', () => { //para que funcionen los alert
    const imagenes = document.querySelectorAll('.img-galeria')
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-content')
    const cerrar = document.querySelector('.close')
    const movil = document.querySelector('.movil')

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
//MAPA

    const map = L.map('map').setView([-18.50019,-70.28407], 17);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  const marker = L.marker([-18.50019,-70.28407]).addTo(map);
 

  const polygon = L.polygon([
    [-18.50019,-70.28407],
    [-18.50019,-70.28407],
    [-18.50019,-70.28407]
  ]).addTo(map);

  



});