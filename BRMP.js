// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore, doc, updateDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4nCWBCEM24HNkKNFZEGUjo6nc5REiGvY",
  authDomain: "taller-database.firebaseapp.com",
  projectId: "taller-database",
  storageBucket: "taller-database.appspot.com",
  messagingSenderId: "969651083981",
  appId: "1:969651083981:web:975fc5f413addb4e2ba784",
  measurementId: "G-M8SRYXXKV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Collection reference
const colRef = collection(db, 'Profile');


let n = "Profile01"



// Function to get all profiles
async function getProfiles(colRef) {
  try {
    const snapshot = await getDocs(colRef);
    let profiles = [];
    snapshot.docs.forEach(doc => {
      profiles.push({ ...doc.data(), id: doc.id });
    });

    return profiles;
  } catch (error) {
    console.error("Error getting documents: ", error);
  }
}

// Function to add a review to an existing profile
async function addReviewToProfile(profileId, review) {
  try {
    // Get a reference to the profile document
    const profileDocRef = doc(colRef, profileId);

    // Update the profile document with the new review
    await updateDoc(profileDocRef, {
      reviews: arrayUnion(review) // Use arrayUnion to add the review to the reviews array
    });

    console.log("Review added to profile with ID: ", profileId);
  } catch (error) {
    console.error("Error adding review to profile: ", error);
  }
}



// Get all profiles and add a review to the first profile as an example
(async () => {
  const profiles = await getProfiles(colRef);

  if (profiles.length > 0) {
    const firstProfileId = n; // Get the ID of the first profile

    const review = {

    };
    console.log(review)
    // Add a review to the first profile
    await addReviewToProfile(firstProfileId, review);
  }
})();

// Other profile-related code...
var gProfile = 1;
const myObject = await getProfiles(colRef);

function getprofile() {
  const profile = gProfile;
  return myObject[profile - 1]; // Adjusting the index to match array indexing
}

let currentProfile = getprofile();
let starsAvarge = currentProfile.aStarAv;
let stars = currentProfile.astars;
let id = currentProfile.idT;
let img = currentProfile.img;
let name = currentProfile.name;
let cc = currentProfile.occ;
let openTimeA = currentProfile.openT;
let pList = currentProfile.pList;
let palbum = currentProfile.palbum;
let paymentT = currentProfile.payment;
let phone = currentProfile.phone;
let promo = currentProfile.promo;
let tLogo = currentProfile.tLogo;
let tMap = currentProfile.tMap;
let tWhatsapp = currentProfile.tWhatsapp;
let tad = currentProfile.tad;
let tadress = currentProfile.tadress;
let tbimg = currentProfile.tbimg;
let temail = currentProfile.temail;
let type = currentProfile.type;
let vet = currentProfile.vet;
let wavailability = currentProfile.wavailability;
let website = currentProfile.website;

var shopLogo = tLogo;
var bbgI = tbimg;
var shopName = name;
var amountofstars = stars;
var vetted = vet;
var album = palbum;
var Shopphone = phone;
var address = tadress;
var email = temail;
var map = tMap;
var open = openTimeA;
var whatsapp = tWhatsapp;
//--------------------  action-btn-block -----------------------//
function reviewbtn(){
  const reviewbtn = document.getElementById('review-btn');
  const reviewIcon = document.getElementById('reviewIcon');
  const reviewtext = document.getElementById('review-btn-text');

  function startAnimation() {
    reviewIcon.colors = 'primary:#931d36';
    reviewtext.style.color = "#931d36";
    reviewbtn.style.borderColor = "#931d36";
    reviewIcon.trigger = 'loop'; // Start the animation
  }

  function stopAnimation() {
    reviewIcon.colors = 'primary:#ffffff';
    reviewtext.style.color = "#ffffff"
    reviewbtn.style.borderColor = "#ffffff"
    reviewIcon.trigger = 'hover'; // Stop the animation
  }

  reviewbtn.addEventListener('mouseenter', startAnimation);
  reviewbtn.addEventListener('mouseleave', stopAnimation);
}
function subscribeBtn(){
  const subscribeBtn = document.getElementById('subscribe-btn');
  const bellIcon = document.getElementById('bellIcon');
  const subscribetext = document.getElementById('subscribe-btn-text');

  function startAnimation() {
    bellIcon.colors = 'primary:#931d36';
    subscribetext.style.color = "#931d36"
    subscribeBtn.style.borderColor = "#931d36";
    bellIcon.trigger = 'loop'; // Start the animation
  }

  function stopAnimation() {
    bellIcon.colors = 'primary:#ffffff';
    subscribetext.style.color = "#ffffff"
    subscribeBtn.style.borderColor = "#ffffff"
    bellIcon.trigger = 'hover'; // Stop the animation
  }

  subscribeBtn.addEventListener('mouseenter', startAnimation);
  subscribeBtn.addEventListener('mouseleave', stopAnimation);
}
function uploadbtn(){
  const uploadbtn = document.getElementById('upload-btn');
  const uploadIcon = document.getElementById('uploadIcon');
  const uploadtext = document.getElementById('upload-btn-text');

  function startAnimation() {
    uploadIcon.colors = 'primary:#931d36';
    uploadtext.style.color = "#931d36"
    uploadbtn.style.borderColor = "#931d36"
    uploadIcon.trigger = 'loop'; // Start the animation
  }

  function stopAnimation() {
    uploadIcon.colors = 'primary:#ffffff';
    uploadtext.style.color = "#ffffff"
    uploadbtn.style.borderColor = "#ffffff"
    uploadIcon.trigger = 'hover'; // Stop the animation
  }

  uploadbtn.addEventListener('mouseenter', startAnimation);
  uploadbtn.addEventListener('mouseleave', stopAnimation);
}
function sharebtn(){
  const shareBtn = document.getElementById('share-btn');
  const shareIcon = document.getElementById('shareIcon');
  const sharetext = document.getElementById('share-btn-text');
  function startAnimation() {
    shareIcon.colors = 'primary:#931d36';
    sharetext.style.color = "#931d36"
    shareBtn.style.borderColor = "#931d36"
    shareIcon.trigger = 'loop'; // Start the animation
  }

  function stopAnimation() {
    shareIcon.colors = 'primary:#ffffff';
    sharetext.style.color = "#ffffff"
    shareBtn.style.borderColor = "#ffffff"
    shareIcon.trigger = 'hover'; // Stop the animation
  }

  shareBtn.addEventListener('mouseenter', startAnimation);
  shareBtn.addEventListener('mouseleave', stopAnimation);
}
function savebtn(){
  const savebtn = document.getElementById('save-btn');
  const saveIcon = document.getElementById('saveIcon');
  const savetext = document.getElementById('save-btn-text');

  function startAnimation() {
    saveIcon.colors = 'primary:#931d36';
    savetext.style.color = "#931d36"
    savebtn.style.borderColor = "#931d36"
    saveIcon.trigger = 'loop'; // Start the animation
  }

  function stopAnimation() {
    saveIcon.colors = 'primary:#ffffff';
    savetext.style.color = "#ffffff"
    savebtn.style.borderColor = "#ffffff"
    saveIcon.trigger = 'hover'; // Stop the animation
  }

  savebtn .addEventListener('mouseenter', startAnimation);
  savebtn .addEventListener('mouseleave', stopAnimation);
}
function activateActionbtnBlock(){
  reviewbtn()
subscribeBtn()
uploadbtn()
sharebtn()
savebtn()
}
activateActionbtnBlock()
//--------------------  upload-banner-block -----------------------//
function uBb(){
  const uploadbtn = document.getElementById('upload-btn');
  const uploadBanner = document.getElementById('upload-banner-block');
  const closeUbb = document.getElementById('closeUbb');

  function openBanner() {
    uploadBanner.style.display = 'flex';
  }
  function closeBanner() {
    uploadBanner.style.display = 'none';
    
  }


  uploadbtn.addEventListener('click', openBanner);
  closeUbb.addEventListener('click', closeBanner);

}
uBb()
//--------------------  Sub-banner-block -----------------------//
function sBb(){
  const subscribeBtn = document.getElementById('subscribe-btn');
  const closesBb = document.getElementById('closesBb');

  function rendersubalert(){
    const subText = document.getElementById('sub-banner-block');
    const Name = shopName;
    console.log(shopName )
      // Establecer el texto del elemento h1
    subText.textContent = "Felicidades, te has suscrito exitosamente a "+ shopName +", y recibirás notificaciones sobre promociones y descuentos.";
    subText.style.display = 'flex';
    subText.style.backgroundColor = "#931d36";

    // Hide the text after 7 seconds
    setTimeout(() => {
      subText.style.display = 'none';
    }, 7000);

  }

  subscribeBtn.addEventListener('click', rendersubalert);
 
} 
sBb()
//--------------------  share-banner-block -----------------------//
function renderCopyInput() {
  const copyContainer = document.getElementById('copyContainer');

  copyContainer.innerHTML = '';
  // Create the input field
  const copyInput = document.createElement('input');
  copyInput.type = 'text';
  copyInput.id = 'copyInput';
  copyInput.value = 'buscastaller.com';
  copyContainer.appendChild(copyInput);

  // Create the copy button
  const copyButton = document.createElement('button');
  copyButton.id = 'copyButton';
  copyButton.textContent = 'Copiar';
  copyContainer.appendChild(copyButton);

  // Add event listener to the copy button
  copyButton.addEventListener('click', copyToClipboard);
}
function copyToClipboard() {
  const copyInput = document.getElementById('copyInput');
  copyInput.select();
  copyInput.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the input field to the clipboard
  document.execCommand('copy');

  // Alert the copied text
  alert('Copied the text: ' + copyInput.value);
}
renderCopyInput()
function rendershareBtn(){
  const shareBtn = document.getElementById("share-btn")
  const shareBannerBlock = document.getElementById("share-banner-block")
  
  function openshareBanner() {
    
    renderCopyInput();
        shareBannerBlock.style.display = 'flex';
     
      }
      setTimeout(() => {
        shareBannerBlock .style.display = 'none';
      }, 7000);


  shareBtn.addEventListener('click', openshareBanner);
}
rendershareBtn()
function pushsavedshop(){




}
function SaveBb(){
  const saveBtn = document.getElementById('save-btn');
  const closesBb = document.getElementById('closesBb');

  function rendersubalert(){
    const saveText = document.getElementById('Save-banner-block');
    const Name = shopName;
    
      // Establecer el texto del elemento h1
      saveText.textContent = shopName +", Ha sido guardado como favorito en tu cuenta.";
      saveText.style.display = 'flex';
      saveText.style.backgroundColor = "#931d36";
      saveText.style.padding = "1rem";

    // Hide the text after 7 seconds
    setTimeout(() => {
      saveText.style.display = 'none';
    }, 7000);

  }

  saveBtn.addEventListener('click', rendersubalert);
 
} 
SaveBb()
function openEmailClient() {
  const subject = encodeURIComponent('¡Descubre BuscasTaller.com para Todas tus Necesidades automotizes!');
  const recipient = 'ayuda@buscastaller.com';
  const mailtoLink = `mailto:${recipient}?subject=${subject}`;
  
  // Create a temporary anchor element
  const tempLink = document.createElement('a');
  tempLink.href = mailtoLink;
  tempLink.style.display = 'none';
  
  // Append the anchor to the body
  document.body.appendChild(tempLink);
  
  // Programmatically click the anchor
  tempLink.click();
  
  // Remove the anchor from the document
  document.body.removeChild(tempLink);
}
//--------------------  website-block -----------------------//
function renderwebsitelink(){
  var web = website
  var labeText = 'Pagina Web:'
  const lable = document.getElementById('web-Link-lable');
  const link  = document.getElementById('web-link');

    lable.textContent = labeText ;
    link.textContent = web;
    link.style.fontSize = '1.7 rem';
    link.style.color = "#ffffff";
    lable.style.color = "#ffffff";
}
renderwebsitelink()

// Add event listener to the button
const emailButton = document.getElementById('emailButton');
emailButton.addEventListener('click', openEmailClient);

//--------------------  Renderes-contact-block -----------------------//
function renderShopphone(texto) {
  // Obtener el elemento h1 donde se mostrará el texto
  const phone =document.getElementById('shop-phone-link');
  // Establecer el texto del elemento h1
  phone.textContent = texto;
}
renderShopphone(Shopphone)

function renderShopaddress(texto) {
  // Obtener el elemento h1 donde se mostrará el texto
  const address = document.getElementById('Shop-address-link');
  // Establecer el texto del elemento h1
  address.textContent = texto;
}
renderShopaddress(address)

function renderShopemail(texto) {
  // Obtener el elemento h1 donde se mostrará el texto
  const email =document.getElementById('Shop-email-link');
  // Establecer el texto del elemento h1
  email.textContent = texto;
}
renderShopemail(email)

//--------------------  Renderes-Vetted-block  -----------------------//
function findIfvetted(){
  let vetImg = 'Images/icons/vetted.webp'
  if (vetted === 1) {
    const imagen = document.createElement('img');
    // Establecer el atributo src de la imagen
    imagen.src = vetImg;
    // Establecer un atributo alt para la imagen (opcional pero recomendado)
    imagen.alt = 'Descripción de la imagen';
  
    // Obtener el contenedor donde se mostrará la imagen
    const contenedor = document.getElementById('vetted-icon');
    // Limpiar el contenedor (opcional, si quieres reemplazar la imagen anterior)
    contenedor.innerHTML = '';
    // Añadir la imagen al contenedor
    contenedor.appendChild(imagen);
    
  }else{
     console.log("not vetted")
  }
}
findIfvetted()
//--------------------  Renderes-carousel-block  -----------------------//
function RenderesCarouselblock(){

let albumlist = album

const imageUrls = albumlist;

let currentIndex = 0;

const carouselImage = document.getElementById('carousel');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const closeButton = document.getElementById('closeCb');
const openButton = document.getElementById('CarasoleBtn');
const carouselBlock = document.getElementById('carouselBlock');

function updateImage() {
  carouselImage.src = imageUrls[currentIndex];
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % imageUrls.length;
  updateImage();
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
  updateImage();
}

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

closeButton.addEventListener('click', () => {
  carouselBlock.style.display = 'none';
});

// Initialize carousel with the first image
updateImage();
openButton.addEventListener('click', () => {
  carouselBlock.style.display = 'block';
});


}
RenderesCarouselblock()
//--------------------  Renderes-Top-Banner  -----------------------//

function cambiarFondo(nuevaUrl) {
  const elemento = document.getElementById('miElemento');
  elemento.style.backgroundImage = `url('${nuevaUrl}')`;
}
cambiarFondo(bbgI)
function rendershopLogo(url) {
  // Crear un nuevo elemento de imagen
  const imagen = document.createElement('img');
  // Establecer el atributo src de la imagen
  imagen.src = url;
  // Establecer un atributo alt para la imagen (opcional pero recomendado)
  imagen.alt = 'Descripción de la imagen';

  // Obtener el contenedor donde se mostrará la imagen
  const contenedor = document.getElementById('shop-logo');
  // Limpiar el contenedor (opcional, si quieres reemplazar la imagen anterior)
  contenedor.innerHTML = '';
  // Añadir la imagen al contenedor
  contenedor.appendChild(imagen);
}
rendershopLogo(shopLogo)
function renderVetted() {
  const vetted = document.getElementById('vetted');
  vetted.style.display = "flex";
}
renderVetted()
function renderShopName(texto) {
  // Obtener el elemento h1 donde se mostrará el texto
  const ShopName =document.getElementById('shop-name');
  // Establecer el texto del elemento h1
  ShopName.textContent = texto;
}
renderShopName(shopName)
function renderStars(){
  const Star1 = document.getElementById('Star1');
  const Star2 = document.getElementById('Star2');
  const Star3 = document.getElementById('Star3');
  const Star4 = document.getElementById('Star4');
  const Star5 = document.getElementById('Star5');
  
  var amountS = amountofstars

  if(amountS === 1 ){
    Star1.style.color = "#931d36";
   
  }else if(amountS === 2 ){
    Star1.style.color = "#931d36";
    Star2.style.color = "#931d36";
  }else if(amountS === 3 ){
    Star1.style.color = "#931d36";
    Star2.style.color = "#931d36";
    Star3.style.color = "#931d36";
  }else if(amountS === 4 ){
    Star1.style.color = "#931d36";
    Star2.style.color = "#931d36";
    Star3.style.color = "#931d36";
    Star4.style.color = "#931d36";
  }else if(amountS === 5 ){
    Star1.style.color = "#931d36";
    Star2.style.color = "#931d36";
    Star3.style.color = "#931d36";
    Star4.style.color = "#931d36";
    Star5.style.color = "#931d36";
  }



}
renderStars()

function calcularPromedio(numeros) {
  const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  return suma / numeros.length;
}
function renderStaravrage(numeros){
    // Calcular el promedio
    const promedio = calcularPromedio(numeros);
    // Obtener el elemento h1 donde se mostrará el promedio
    const encabezado = document.getElementById('avarge-stars');
    // Establecer el texto del elemento h1
    encabezado.textContent = `${promedio}`;
}

renderStaravrage([10, 20, 30, 40, 50])
function renderReviewamount(cantidad) {
  // Obtener el elemento h1 donde se mostrará la cantidad de reseñas
  const encabezado = document.getElementById('amount-reviews');
  // Establecer el texto del elemento h1
  encabezado.textContent = `(${cantidad} Reseñas)`;
}
renderReviewamount(10)



//--------------------  time-block  -----------------------//
function getDayofWeek(){
  const now = new Date();
  const currentHour = now.getHours();
  const currentDay = now.getDay(); // Sunday - Saturday : 0 - 6

  if (currentDay === 1){
    return("Lunes")
  }else if(currentDay === 2){
    return("Martes")
  }else if(currentDay === 3){
    return("Miércoles")
  }else if(currentDay === 4){
    return("Jueves")
  }else if(currentDay === 5){
    return("Viernes")
  }else if(currentDay === 6){
    return("Sábado")
  }else if(currentDay === 7){
    return("Domingo")
  }
}
function getTimeframe(){
  let cDtw = getDayofWeek()

  let openTime = open
  var monday       = openTime[0]
  var mondayopen   = openTime[1]
  var mondayEnd    = openTime[2]
  var tuesday      = openTime[3]
  var tuesdayopen  = openTime[4]
  var tuesdayEnd   = openTime[5]
  var wensday      = openTime[6]
  var wensdayOpen  = openTime[7]
  var wensdayEnd   = openTime[8]
  var thursday     = openTime[9]
  var thursdayOpen = openTime[10]
  var thursdayEnd  = openTime[11]
  var friday       = openTime[12]
  var fridayOpen   = openTime[13]
  var fridayEnd    = openTime[14]
  var saturday     = openTime[15]
  var saturdayOpen = openTime[16]
  var saturdayEnd  = openTime[17]
  var sunday       = openTime[18]
  var sundayOpen   = openTime[19]
  var sundayEnd    = openTime[20]


  function pushTwoValues(array, value1, value2) {
      array.push(value1, value2);
    }
  const myArray = [];
  if (cDtw === monday ){
    const value1 = mondayopen
    const value2 = mondayEnd 
    pushTwoValues(myArray, value1, value2);
    return(myArray)
  }else if(cDtw === tuesday){
    const value1 = tuesdayopen
    const value2 = tuesdayEnd 
    pushTwoValues(myArray, value1, value2);
    return(myArray)
  }else if(cDtw === wensday){
    const value1 = wensdayOpen
    const value2 = wensdayEnd
    pushTwoValues(myArray, value1, value2);
    return(myArray)
  }else if(cDtw === thursday){
    const value1 = thursdayOpen
    const value2 = thursdayEnd 
    pushTwoValues(myArray, value1, value2);
    return(myArray)
  }else if(cDtw === friday){
    const value1 = fridayOpen 
    const value2 = fridayEnd 
    pushTwoValues(myArray, value1, value2);
  }else if(cDtw === saturday){
    const value1 = saturdayOpen
    const value2 = saturdayEnd 
    pushTwoValues(myArray, value1, value2);
  }else if(cDtw === sunday){
    const value1 = sundayOpen 
    const value2 = sundayEnd 
    pushTwoValues(myArray, value1, value2);
  }
  return(myArray)
}
function changeAbilitycolor(){
  var stat      = document.getElementById("status");
  let timeArray = getTimeframe()
  let open      =  timeArray[0]
  let close     =  timeArray[1] 
  let off       = "dayoff"



  const now = new Date();
  const currentHour = now.getHours();
  const currentDay = now.getDay(); // Sunday - Saturday : 0 - 6
 
  stat.innerHTML = '';
  function dayoff(){
    if(open === 0 && close ===0){
        return('dayoff')
    }else{
        return('work')
    }
  }
  
  if (dayoff() === off ) {
    stat.textContent = 'Cerrado';
    stat.style.color="red";
    stat.style.fontSize="1.3rem";
  }else{
    if (currentHour>= open && currentHour <= close ) {
      stat.textContent = 'Abierto';
      stat.style.color="green";
      stat.style.fontSize="1.3rem";
    }else{
      stat.textContent = 'Cerrado';
      stat.style.color="red";
      stat.style.fontSize="1.3rem";
    }
    
  }

}
changeAbilitycolor()
//--------------------  map-block  -----------------------//
function changeIframeSrc() {
    const iframe = document.getElementById('myIframe');
    const mapSrc = map 
    iframe.src = mapSrc;
  
}
changeIframeSrc()
function renderMapad(){
  const add = address
  const mBa = document.getElementById('map-block-address');

    // Establecer el texto del elemento h1
    mBa.textContent = add;
    mBa.style.color = "#ffffff";
    

}
renderMapad()
function renderLink() {
const mapSrc = map 
const iframe = document.getElementById('map-link-btn');
iframe.href = mapSrc;
iframe.target = '_blank';
}
const mapBtn = document.getElementById('map-link-btn');
mapBtn.addEventListener('click', renderLink);
//--------------------  horario-Block  -----------------------//
function renderDaysOfWeek() {
  var openTime = open 

  function renderMonday(){
    var monday       = openTime[0]
    var mondayopen   = openTime[1]
    var mondayEnd    = openTime[2]

    function Opentime(){
      var open = mondayopen 
      var type = (typeof open)
    
      if (type === 'number'){
        if ( open === 5){
          return('5:00')
        }else if (open === 6){
          return('6:00')
        }else if (open === 7){
          return('7:00')
        }else if (open === 8){
          return('8:00')
        }else if (open === 9){
          return('9:00')
        }else if (open === 10){ 
          return('10:00')
        }else if (open === 11){ 
          return('11:00')
        }else if (open === 12){ 
          return('12:00')
        }
      }else{
        return('Cerrado')
      }


    }
    function closetime(){
      var open = mondayEnd  
      var type = (typeof open)
    
      if (type === 'number'){
        if ( open === 13){
          return('13:00')
        }else if (open === 14){
          return('14:00')
        }else if (open === 15){
          return('15:00')
        }else if (open === 16){
          return('16:00')
        }else if (open === 17){
          return('17:00')
        }else if (open === 18){ 
          return('18:00')
        }else if (open === 19){ 
          return('19:00')
        }else if (open === 20){ 
          return('20:00')
        }else if (open === 21){ 
          return('21:00')
        }else if (open === 22){ 
          return('22:00')
        }
      }else{
        return('Cerrado')
      }
    }
    const renderday   = document.getElementById('monday');
    const renderOpen  = document.getElementById('mondayStart');
    const renderClose = document.getElementById('mondayEnd');
    renderday.textContent   =  monday;
    renderOpen.textContent  = `${Opentime()} am -`
    renderClose.textContent = `${closetime()} pm `
  }
  renderMonday()
  function renderTuesday(){
    var tuesday      = openTime[3]
    var tuesdayopen  = openTime[4]
    var tuesdayEnd   = openTime[5]
 
    function Opentime(){
      var open = tuesdayopen
      var type = (typeof open)
    
      if (type === 'number'){
        if ( open === 5){
          return('5:00')
        }else if (open === 6){
          return('6:00')
        }else if (open === 7){
          return('7:00')
        }else if (open === 8){
          return('8:00')
        }else if (open === 9){
          return('9:00')
        }else if (open === 10){ 
          return('10:00')
        }else if (open === 11){ 
          return('11:00')
        }else if (open === 12){ 
          return('12:00')
        }
      }else{
        return('Cerrado')
      }


    }
    function closetime(){
      var open = tuesdayEnd 
      var type = (typeof open)
    
      if (type === 'number'){
        if ( open === 13){
          return('13:00')
        }else if (open === 14){
          return('14:00')
        }else if (open === 15){
          return('15:00')
        }else if (open === 16){
          return('16:00')
        }else if (open === 17){
          return('17:00')
        }else if (open === 18){ 
          return('18:00')
        }else if (open === 19){ 
          return('19:00')
        }else if (open === 20){ 
          return('20:00')
        }else if (open === 21){ 
          return('21:00')
        }else if (open === 22){ 
          return('22:00')
        }
      }else{
        return('Cerrado')
      }
    }

    const renderday   = document.getElementById('tuesday');
    const renderOpen  = document.getElementById('tuesdayStart');
    const renderClose = document.getElementById('tuesdayEnd');
    renderday.textContent   =  tuesday ;
    renderOpen.textContent  = `${Opentime()} am -`
    renderClose.textContent = `${closetime()} pm `
  }
  renderTuesday()
  function renderWensday(){
    var wensday      = openTime[6]
    var wensdayOpen  = openTime[7]
    var wensdayEnd   = openTime[8]
 
    function Opentime(){
      var open = wensdayOpen 
      var type = (typeof open)
    
      if (type === 'number'){
        if ( open === 5){
          return('5:00')
        }else if (open === 6){
          return('6:00')
        }else if (open === 7){
          return('7:00')
        }else if (open === 8){
          return('8:00')
        }else if (open === 9){
          return('9:00')
        }else if (open === 10){ 
          return('10:00')
        }else if (open === 11){ 
          return('11:00')
        }else if (open === 12){ 
          return('12:00')
        }
      }else{
        return('Cerrado')
      }


    }
    function closetime(){
      var open = wensdayEnd 
      var type = (typeof open)
    
      if (type === 'number'){
        if ( open === 13){
          return('13:00')
        }else if (open === 14){
          return('14:00')
        }else if (open === 15){
          return('15:00')
        }else if (open === 16){
          return('16:00')
        }else if (open === 17){
          return('17:00')
        }else if (open === 18){ 
          return('18:00')
        }else if (open === 19){ 
          return('19:00')
        }else if (open === 20){ 
          return('20:00')
        }else if (open === 21){ 
          return('21:00')
        }else if (open === 22){ 
          return('22:00')
        }
      }else{
        return('Cerrado')
      }
    }

    const renderday   = document.getElementById('wensday');
    const renderOpen  = document.getElementById('wensdayStart');
    const renderClose = document.getElementById('wensdayEnd');
    renderday.textContent   =  wensday  ;
    renderOpen.textContent  = `${Opentime()} am -`
    renderClose.textContent = `${closetime()} pm `
  }
  renderWensday()
  function renderThursday(){
    var thursday     = openTime[9]
    var thursdayOpen = openTime[10]
    var thursdayEnd  = openTime[11]
    
    function Opentime(){
      var open = thursdayOpen
      var type = (typeof open)
    
      if (type === 'number'){
        if ( open === 5){
          return('5:00')
        }else if (open === 6){
          return('6:00')
        }else if (open === 7){
          return('7:00')
        }else if (open === 8){
          return('8:00')
        }else if (open === 9){
          return('9:00')
        }else if (open === 10){ 
          return('10:00')
        }else if (open === 11){ 
          return('11:00')
        }else if (open === 12){ 
          return('12:00')
        }
      }else{
        return('Cerrado')
      }


    }
    function closetime(){
      var open = thursdayEnd 
      var type = (typeof open)
    
      if (type === 'number'){
        if ( open === 13){
          return('13:00')
        }else if (open === 14){
          return('14:00')
        }else if (open === 15){
          return('15:00')
        }else if (open === 16){
          return('16:00')
        }else if (open === 17){
          return('17:00')
        }else if (open === 18){ 
          return('18:00')
        }else if (open === 19){ 
          return('19:00')
        }else if (open === 20){ 
          return('20:00')
        }else if (open === 21){ 
          return('21:00')
        }else if (open === 22){ 
          return('22:00')
        }
      }else{
        return('Cerrado')
      }
    }

    const renderday   = document.getElementById('thursday');
    const renderOpen  = document.getElementById('thursdayStart');
    const renderClose = document.getElementById('thursdayEnd');
    renderday.textContent   =  thursday ;
    renderOpen.textContent  = `${Opentime()} am -`
    renderClose.textContent = `${closetime()} pm `
  }
  renderThursday()
  function renderFriday(){
    var friday       = openTime[12]
    var fridayOpen   = openTime[13]
    var fridayEnd    = openTime[14]
    
    function Opentime(){
      var open = fridayOpen 
      var type = (typeof open)
    
      if (type === 'number'){
        if ( open === 5){
          return('5:00')
        }else if (open === 6){
          return('6:00')
        }else if (open === 7){
          return('7:00')
        }else if (open === 8){
          return('8:00')
        }else if (open === 9){
          return('9:00')
        }else if (open === 10){ 
          return('10:00')
        }else if (open === 11){ 
          return('11:00')
        }else if (open === 12){ 
          return('12:00')
        }
      }else{
        return('Cerrado')
      }


    }
    function closetime(){
      var open = fridayEnd  
      var type = (typeof open)
    
      if (type === 'number'){
        if ( open === 13){
          return('13:00')
        }else if (open === 14){
          return('14:00')
        }else if (open === 15){
          return('15:00')
        }else if (open === 16){
          return('16:00')
        }else if (open === 17){
          return('17:00')
        }else if (open === 18){ 
          return('18:00')
        }else if (open === 19){ 
          return('19:00')
        }else if (open === 20){ 
          return('20:00')
        }else if (open === 21){ 
          return('21:00')
        }else if (open === 22){ 
          return('22:00')
        }
      }else{
        return('Cerrado')
      }
    }

    const renderday   = document.getElementById('friday');
    const renderOpen  = document.getElementById('fridayStart');
    const renderClose = document.getElementById('fridayEnd');
    renderday.textContent   =  friday    ;
    renderOpen.textContent  = `${Opentime()} am -`
    renderClose.textContent = `${closetime()} pm `
  }
  renderFriday()
  function renderSturday(){
   var saturday     = openTime[15]
   var saturdayOpen = openTime[16]
   var saturdayEnd  = openTime[17]

  function Opentime(){
    var open = saturdayOpen
    var type = (typeof open)
  
    if (type === 'number'){
      if ( open === 5){
        return('5:00')
      }else if (open === 6){
        return('6:00')
      }else if (open === 7){
        return('7:00')
      }else if (open === 8){
        return('8:00')
      }else if (open === 9){
        return('9:00')
      }else if (open === 10){ 
        return('10:00')
      }else if (open === 11){ 
        return('11:00')
      }else if (open === 12){ 
        return('12:00')
      }
    }else{
      return('Cerrado')
    }


  }
  function closetime(){
    var open = saturdayEnd
    var type = (typeof open)
  
    if (type === 'number'){
      if ( open === 13){
        return('13:00')
      }else if (open === 14){
        return('14:00')
      }else if (open === 15){
        return('15:00')
      }else if (open === 16){
        return('16:00')
      }else if (open === 17){
        return('17:00')
      }else if (open === 18){ 
        return('18:00')
      }else if (open === 19){ 
        return('19:00')
      }else if (open === 20){ 
        return('20:00')
      }else if (open === 21){ 
        return('21:00')
      }else if (open === 22){ 
        return('22:00')
      }
    }else{
      return('Cerrado')
    }
  }

  const renderday   = document.getElementById('saturday');
  const renderOpen  = document.getElementById('saturdayStart');
  const renderClose = document.getElementById('saturdayEnd');
  renderday.textContent   =  saturday    ;
  renderOpen.textContent  = `${Opentime()} am -`
  renderClose.textContent = `${closetime()} pm `
  }
  renderSturday()
  function renderSundayday(){
    var sunday       = openTime[18]
    var sundayOpen   = openTime[19]
    var sundayEnd    = openTime[20]

    function Opentime(){
      var open = sundayOpen
      var type = (typeof open)
    
      if (type === 'number'){
        if ( open === 5){
          return('5:00')
        }else if (open === 6){
          return('6:00')
        }else if (open === 7){
          return('7:00')
        }else if (open === 8){
          return('8:00')
        }else if (open === 9){
          return('9:00')
        }else if (open === 10){ 
          return('10:00')
        }else if (open === 11){ 
          return('11:00')
        }else if (open === 12){ 
          return('12:00')
        }
      }else{
        return('Cerrado')
      }


    }
    function closetime(){
      var open = sundayEnd 
      var type = (typeof open)
    
      if (type === 'number'){
        if ( open === 13){
          return('13:00')
        }else if (open === 14){
          return('14:00')
        }else if (open === 15){
          return('15:00')
        }else if (open === 16){
          return('16:00')
        }else if (open === 17){
          return('17:00')
        }else if (open === 18){ 
          return('18:00')
        }else if (open === 19){ 
          return('19:00')
        }else if (open === 20){ 
          return('20:00')
        }else if (open === 21){ 
          return('21:00')
        }else if (open === 22){ 
          return('22:00')
        }
      }else{
        return('Cerrado')
      }
    }

    const renderday   = document.getElementById('sunday');
    const renderOpen  = document.getElementById('sundayStart');
    const renderClose = document.getElementById('sundayEnd');
    renderday.textContent   =  sunday   ;
    renderOpen.textContent  = `${Opentime()}  -`
    renderClose.textContent = `- ${closetime()}`



  }
  renderSundayday()

}
renderDaysOfWeek() 
//--------------------  appointment-btn-block  -----------------------//
function changeHref() {
  const link = document.getElementById('appointment-btn');
  let whats = whatsapp  
  link.href = whats;
}
changeHref()
function renderStargraf(){
  
  const Star1 = document.getElementById('Star-Graf-1');
  const Star2 = document.getElementById('Star-Graf-2');
  const Star3 = document.getElementById('Star-Graf-3');
  const Star4 = document.getElementById('Star-Graf-4');
  const Star5 = document.getElementById('Star-Graf-5');
  
  var amountS = amountofstars

  if(amountS === 1 ){
    Star1.style.color = "#931d36";
   
  }else if(amountS === 2 ){
    Star1.style.color = "#931d36";
    Star2.style.color = "#931d36";
  }else if(amountS === 3 ){
    Star1.style.color = "#931d36";
    Star2.style.color = "#931d36";
    Star3.style.color = "#931d36";
  }else if(amountS === 4 ){
    Star1.style.color = "#931d36";
    Star2.style.color = "#931d36";
    Star3.style.color = "#931d36";
    Star4.style.color = "#931d36";
  }else if(amountS === 5 ){
    Star1.style.color = "#931d36";
    Star2.style.color = "#931d36";
    Star3.style.color = "#931d36";
    Star4.style.color = "#931d36";
    Star5.style.color = "#931d36";
  }


}
renderStargraf()



//--------------------  review-posted-block  -----------------------//


let selectedStars = 0;
let reviewPopup = []
    console.log(selectedStars )
document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function() {
        selectedStars = this.getAttribute('data-value');
        highlightStars(selectedStars);
        reviewPopup.push(selectedStars) 
        
    });
});
console.log(reviewPopup)
function highlightStars(stars) {
    document.querySelectorAll('.star').forEach(star => {
        if (star.getAttribute('data-value') <= stars) {
            star.classList.add('highlighted');
        } else {
            star.classList.remove('highlighted');
        }
    });
}

function submitReview() {
    const reviewText = document.getElementById('reviewText').value;
    return(reviewText)
}


document.getElementById('reviewshowBtn').addEventListener('click', submitReview);













function renderReviewamountgraf(cantidad) {
  // Obtener el elemento h1 donde se mostrará la cantidad de reseñas
  const encabezado = document.getElementById('graf-reviws');
  // Establecer el texto del elemento h1
  encabezado.textContent = `(${cantidad} Reseñas)`;
}
renderReviewamountgraf(10)
function showReviewInput(){
  const reviewbtn = document.getElementById('review-btn');
  const reviewContent = document.getElementById('leave-review-block');
  const close = document.getElementById('leave-review-block');
  const line = document.getElementById('hidden-line');

  
   function showReviewblock(){
    reviewContent.style.display = 'flex';
    line.style.display = 'flex';
   }

   function activateLink() {
    const link = document.getElementById('moveReview');
    link.click();
   }
  reviewbtn.addEventListener('click', () => {
    showReviewblock();
    activateLink();
  });

  function closeReview(){
    reviewContent.style.display = 'none';
    line.style.display = 'none';
  }
 


}
showReviewInput()





Object.assign(review, { genre: "Dystopian", yearPublished: 1949 });
















