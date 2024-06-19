document.addEventListener('DOMContentLoaded', () => { 
  
    
   
    const imagenes = document.querySelectorAll('.img-galeria')
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-content')
    const cerrar = document.querySelector('.close')
    const movil = document.querySelector('.movil')


    imagenes.forEach(imagen =>{
        imagen.addEventListener('click', ()=>{
            modal.style.display = 'block'; 
            modal.style.zIndex= '10';
            modalImg.src = imagen.src; 
            imagen.style.zIndex = '0';
            document.body.classList.add('modal-open'); 
        })
    })
    
  
    cerrar.addEventListener('click', () => {
        modal.style.display = 'none'; 
        document.body.classList.remove('modal-open'); 
    });

    var logo = document.querySelector('.logo');
    logo.style.animation = 'emergeLogo 2.5s forwards'; 

  // Obtener el enlace de "HISTORIA"
  const linkHistoria = document.querySelector('a[href="./historia.html"]');
  const linkObjetivos = document.querySelector('a[href="./objetivos.html"]');
  const linkpys = document.querySelector('a[href="./productosyservicios.html"]');
  const linkbodega = document.querySelector('a[href="./bodega.html"]');
  const linkcontacto = document.querySelector('a[href="./contacto.html"]');

  linkHistoria.addEventListener('click', function(e) {
      e.preventDefault();
      fetch('historia.html')
          .then(response => {
              if (!response.ok) {
                  throw new Error('La respuesta de la red no fue OK');
              }
              return response.text();
          })
          .then(data => {
              console.log(data)
              const mainContent = document.getElementById('main-content');
              mainContent.innerHTML = data;
          })
          .catch(error => console.error('Error al cargar el contenido:', error));
      });
      linkObjetivos.addEventListener('click', function(e) {
        e.preventDefault();
        fetch('objetivos.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('La respuesta de la red no fue OK');
                }
                return response.text();
            })
            .then(data => {
                console.log(data)
                const mainContent = document.getElementById('main-content');
                mainContent.innerHTML = data;
            })
            .catch(error => console.error('Error al cargar el contenido:', error));
        });
        linkpys.addEventListener('click', function(e) {
            e.preventDefault();
            fetch('productosyservicios.html')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('La respuesta de la red no fue OK');
                    }
                    return response.text();
                })
                .then(data => {
                    console.log(data)
                    const mainContent = document.getElementById('main-content');
                    mainContent.innerHTML = data;
                })
                .catch(error => console.error('Error al cargar el contenido:', error));
            });  
            linkbodega.addEventListener('click', function(e) {
                e.preventDefault();
                fetch('bodega.html')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('La respuesta de la red no fue OK');
                        }
                        return response.text();
                    })
                    .then(data => {
                        console.log(data)
                        const mainContent = document.getElementById('main-content');
                        mainContent.innerHTML = data;
                    })
                    .catch(error => console.error('Error al cargar el contenido:', error));
                });
                linkcontacto.addEventListener('click', function(e) {
                    e.preventDefault();
                    fetch('contacto.html')
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('La respuesta de la red no fue OK');
                            }
                            return response.text();
                        })
                        .then(data => {
                            console.log(data)
                            const mainContent = document.getElementById('main-content');
                            mainContent.innerHTML = data;
                        })
                        .catch(error => console.error('Error al cargar el contenido:', error));
                    });


});