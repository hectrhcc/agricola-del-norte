document.addEventListener('DOMContentLoaded', () => { 
   
    //js mapa
    const map = L.map('map').setView([-18.50019,-70.28407], 17);
    map.scrollWheelZoom.disable();

    function handleMapScroll(e) {

        e.stopPropagation();
        e.preventDefault();

      const delta = e.wheelDelta ? e.wheelDelta : -e.detail;
  
        if (delta > 0) {
            map.zoomIn();
        } else {
            map.zoomOut();
        }
    }

    map.on('wheel', handleMapScroll);
    map.on('mousewheel', handleMapScroll);
    map.on('DOMMouseScroll', handleMapScroll);
      
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: ' <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    const marker = L.marker([-18.50019,-70.28407]).addTo(map);
    const polygon = L.polygon([
      [-18.50019,-70.28407],
      [-18.50019,-70.28407],
      [-18.50019,-70.28407]
    ]).addTo(map);
    

  //js contacto  
    let nombre = document.getElementById('nombre');
    let telefono = document.getElementById('telefono');
    let correo = document.getElementById('correo');
    let asunto = document.getElementById('asunto');
    let mensaje = document.getElementById('mensaje');
    //let submit = document.getElementById('button');
    let p1 = document.getElementById('pf1');
    let p2 = document.getElementById('pf2');
    let p3 = document.getElementById('pf3');
    let p4 = document.getElementById('pf4');
    let p5 = document.getElementById('pf5');
    let p6 = document.getElementById('pf6');
    
    const email = correo.value.trim(); 
    
    function isValidEmail(email) {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email); 
    }
    
    function showErrorText() {
    p3.style.display = 'block';
    }
    
    function hideErrorText() {
    p3.style.display = 'none'; 
    }
    
    correo.addEventListener('blur', () => {
    const emailValue = correo.value.trim();
    
    if (!isValidEmail(emailValue)) {
        showErrorText(); 
    } else {
        hideErrorText(); 
    }
    if (emailValue === '') {
        p4.style.display = 'block';
    } else {
        p4.style.display = 'none';
    }
    });
   
    nombre.addEventListener('blur', ()=>{
    if(nombre.value.trim()===''){
        p1.style.display='block';
    }else{
        p1.style.display='none';
    }
    
    })
    
    telefono.addEventListener('blur', ()=>{
    if(telefono.value.trim()===''){
    p2.style.display='block';
    }else{
        p2.style.display='none';
    }
    })
    
    correo.addEventListener('blur', ()=>{
    if(correo.value.trim()===''){
    p4.style.display='block';
    }else{
        p4.style.display='none';
    }
    })
    
    asunto.addEventListener('blur', ()=>{
    if(asunto.value.trim()===''){
    p5.style.display='block';
    }else{
        p5.style.display='none';
    }
    })
    
    mensaje.addEventListener('blur', ()=>{
    if(mensaje.value.trim()===''){
    p6.style.display='block';
    }else{
        p6.style.display='none';
    }
    })
});