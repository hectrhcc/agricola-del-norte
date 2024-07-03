document.addEventListener('DOMContentLoaded', () => { 
//Hamburguesa para la version movil              
let navegacion=document.getElementById('navegacion');
let hamburguesa = document.getElementById('hamburguesa');

hamburguesa.addEventListener('click', ()=>{
    if(navegacion.style.display===''){
    navegacion.style.display = 'block';
    }
    else{
        navegacion.style.display = '';
    } 
})
//Movimiento del Logo
let logo = document.querySelector('.imglogo');
logo.style.animation = 'emergeLogo 2.5s forwards'; 
const slides = document.querySelectorAll('.slide-item');
const inputs = document.querySelectorAll('input[name="slide"]'); 
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentSlide = 0;

function changeSlide() {
  inputs[currentSlide].checked = false;

  currentSlide++;

  if(currentSlide >= inputs.length) {
    currentSlide = 0;
  }

  inputs[currentSlide].checked = true;
}

function autoPlay() {
  setInterval(() => {
    changeSlide();
  }, 3000);
}

autoPlay();

nextBtn.addEventListener('click', () => {
  changeSlide();
  clearInterval(autoPlay);
  autoPlay();  
});

prevBtn.addEventListener('click', () => {  
  changeSlide();
  clearInterval(autoPlay);
  autoPlay();
});

});