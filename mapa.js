const map = L.map('map').setView([-18.50019,-70.28407], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: ' <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let nombre = document.getElementById('nombre');
let telefono = document.getElementById('telefono');
let correo = document.getElementById('correo');
let asunto = document.getElementById('asunto');
let mensaje = document.getElementById('msj');
let submit = document.getElementById('submit');
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

submit.addEventListener('click',(e)=>{
e.preventDefault();

const emailValue = correo.value.trim();

// Validación de campos aquí...
if(nombre.value.trim()==='' ){
p1.style.display='block';
}
else{
p1.style.display='none';
}
if(telefono.value.trim()==='' ){
p2.style.display='block';
}
else{
p2.style.display='none';
}

if(emailValue ==='' ){
p4.style.display='block';
}
else{
p4.style.display='none';
}
if(asunto.value.trim()==='' ){
p5.style.display='block';
}
else{
p5.style.display='none';
}

if(mensaje.value.trim()==='' ){
p6.style.display='block';
}
else{
p6.style.display='none';
}
// Verificar si todos los campos obligatorios están completos y el correo es válido
if (nombre.value.trim() !== '' &&
telefono.value.trim() !== '' &&
emailValue !== '' &&
isValidEmail(emailValue) &&
asunto.value.trim() !== '' &&
mensaje.value.trim() !== '') {
alert("Mensaje enviado!\nGracias por completar el formulario. ¡Nos pondremos en contacto pronto!");
}

})

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