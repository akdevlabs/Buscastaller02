const popbt = document.getElementById('popup-block-taller')
const addTbtn = document.getElementById('addShop')
const tCloseBtn = document.getElementById('taller-close-btn')


function openTpopReg(){

  addTbtn.addEventListener('click', function(){
  popbt.style.display = 'flex'
}) 


tCloseBtn.addEventListener('click', function(){
  popbt.style.display = 'none'
}) 



}

openTpopReg()








function openEmailuser() {
  var email = "ayuda@buscastaller.com"; // Recipient's email address
  var subject = "El usuario necesita ayuda"; // Subject of the email
  var body = "Hola, me gustaría preguntar sobre..."; // Body of the email

  var mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
}
function openEmailshop() {
  var email = "ainfo@buscastaller.com"; // Recipient's email address
  var subject = "El dueño del taller necesita ayuda."; // Subject of the email
  var body = "Hola, me gustaría preguntar sobre..."; // Body of the email

  var mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
}

const helpC = document.getElementById('helpC')
const helpT = document.getElementById('helpT')
helpC.addEventListener('click', function(){
  openEmailuser()
})

helpT.addEventListener('click', function(){
  openEmailshop()
})