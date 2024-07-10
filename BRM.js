//----------------  Nav-block --------------------//
document.getElementById("VideoBtn").addEventListener("click", function() {
  const video = document.getElementById("Video-tutorial")
  video.style.display="flex";
  
});
document.getElementById("CloseVideo").addEventListener("click", function() {
  const video = document.getElementById("Video-tutorial")
  video.style.display="none";
  
});
//----------------  Ranking-block-top-Cobertura  --------------------//
function Cobertura(){
  function getSelectedValue() {
    var dropdown = document.getElementById("myDropdown");
    var selectedValue = dropdown.options[dropdown.selectedIndex].value;
    return selectedValue;
  }
  // Set a default value for the dropdown
  function setDefaultValue(defaultValue) {
    var dropdown = document.getElementById("myDropdown");
    dropdown.value = defaultValue;
    var value = defaultValue
    const Area = document.getElementById("info-banner-section")
   
    Area.innerHTML = "<span>"+  value + "</span>" 
  }
  // Example usage
  document.getElementById("myDropdown").addEventListener("change", function() {
    var value = getSelectedValue();
    const Area = document.getElementById("info-banner-section")
    Area.innerHTML = "<span>"+  value + "</span>" 
  });
  // Set the default value when the document is loaded
  document.addEventListener("DOMContentLoaded", function() {
    setDefaultValue("Centro"); // Set your default value here
  });
  
}
//----------------  Ranking-block-top-Tipo De Pago  --------------------//
function payment(){
  function getSelectedValuePay() {
    var dropdown = document.getElementById("myDropdownP");
    var selectedValue = dropdown.options[dropdown.selectedIndex].value;
    return selectedValue;
  }
  // Set a default value for the dropdown
  function setDefaultValue(defaultValue) {
    var dropdown = document.getElementById("myDropdownP");
    dropdown.value = defaultValue;
    var value = defaultValue
    console.log(value)
    const payment = document.getElementById("info-banner-payment")
   
    payment.innerHTML = "<span>"+ ">" +  value + "</span>" 
  }
  // Example usage
  document.getElementById("myDropdownP").addEventListener("change", function() {
    var value = getSelectedValuePay();
    const payment = document.getElementById("info-banner-payment")
    payment.innerHTML = "<span>"+ ">" + value + "</span>" 
  });
  // Set the default value when the document is loaded
  document.addEventListener("DOMContentLoaded", function() {
    setDefaultValue("Centro"); // Set your default value here
  });
}
//----------------  title-block  --------------------//
function title(){
  function getSelectedValue() {
    var dropdown = document.getElementById("myDropdown");
    var selectedValue = dropdown.options[dropdown.selectedIndex].value;
    return selectedValue;
  }
  // Set a default value for the dropdown

  // Example usage
  document.getElementById("myDropdown").addEventListener("change", function() {
    var value = getSelectedValue();
    const Area = document.getElementById("title-block-section")
    Area.innerHTML = "<h1>"+  value + "</h1>" 
  });

}









//----------------  Ranking-block-top  --------------------//







Cobertura()
payment()
title()




//----------------  Ranking-block-taller-list  --------------------//
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, getDocs, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { query, orderBy, limit, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4nCWBCEM24HNkKNFZEGUjo6nc5REiGvY",
  authDomain: "taller-database.firebaseapp.com",
  projectId: "taller-database",
  storageBucket: "taller-database.appspot.com",
  messagingSenderId: "969651083981",
  appId: "1:969651083981:web:975fc5f413addb4e2ba784",
  measurementId: "G-M8SRYXXKV1"
};



// init firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, collection, getDocs, Timestamp, addDoc };
export { query, orderBy, limit, where, onSnapshot };
// collection ref
const colRef = collection(db, 'Profile')


// get collection data
function getFirstBook(colRef) {
  return getDocs(colRef)
    .then(snapshot => {
      let books = [];
      snapshot.docs.forEach(doc => {
        books.push({ ...doc.data(), id: doc.id });
      });
      
      let myObject = books;

      return myObject;
    })
    .catch(error => {
      console.error("Error getting documents: ", error);
    });
}

const myObject = await getFirstBook(colRef);



var profile01 =  myObject[0]
var profile02 =  myObject[1]
var profile03 =  myObject[2]
var profile04 =  myObject[3]
var profile05 =  myObject[4]
var profile06 =  myObject[5]
var profile07 =  myObject[6]
var profile08 =  myObject[7]
var profile09 =  myObject[8]
var profile10 =  myObject[9]

console.log( profile01)




let stars01         = profile01.astars;
let id01            = profile01.idT;
let img01           = profile01.img;
let name01          = profile01.name;
let cc01            = profile01.occ;
let openTime01      = profile01.openT;
let pList01         = profile01.pList;
let palbum01        = profile01.palbum;
let paymentT01      = profile01.payment;
let phone01         = profile01.phone;
let promo01         = profile01.promo;
let tad01           = profile01.tad;
let tadress01       = profile01.tadress;
let tbimg01         = profile01.tbimg;
let temail01        = profile01.temail;
let type01          = profile01.type;
let vet01           = profile01.vet;
let wavailability01 = profile01.wavailability;
let website01       = profile01.website;



console.log(stars01)
console.log(id01)
console.log(img01)
console.log(name01)
console.log(cc01)
console.log(openTime01)
console.log(pList01)
console.log(palbum01)
console.log(paymentT01)
console.log(phone01)
console.log(promo01)
console.log(tad01)
console.log(tadress01)
console.log(tbimg01)
console.log(temail01)
console.log(type01)
console.log(vet01)
console.log(wavailability01)
console.log(website01)




//----------------  Ranking-block-Map  --------------------//
function map(){
  function getSelectedValue() {
    var dropdown = document.getElementById("myDropdown");
    var selectedValue = dropdown.options[dropdown.selectedIndex].value;
    return selectedValue;
  }

 
  
  document.getElementById("myDropdown").addEventListener("change", function() {
    var value = getSelectedValue();
     console.log(value)

    if (value === "Centro"){
      var iframe = document.getElementById('myIframe');
      var newSrc = rc="https://www.google.com/maps/d/u/0/embed?mid=1r1FTVVW58GZKPrFcr7t29_25dXoLhAU&ehbc=2E312F"; // New src link
      iframe.src = newSrc;
    }else if (value === "Norte"){
      var iframe = document.getElementById('myIframe');
      var newSrc = "https://www.google.com/maps/d/embed?mid=11v6Jz60Qq4wzRzsfRV6gPcF31eEuPBg&ehbc=2E312F"; // New src link
      iframe.src = newSrc;
    }else if (value === "Este"){
      var iframe = document.getElementById('myIframe');
      var newSrc = "https://www.google.com/maps/d/embed?mid=1BIBc4WPOC5ckgyqvyHUMw-qh23_m6r8&ehbc=2E312F"; // New src link
      iframe.src = newSrc;
    }else if (value === "Sur"){
      var iframe = document.getElementById('myIframe');
      var newSrc = "https://www.google.com/maps/d/embed?mid=1TRO4HYE5jJFad8RioFrHbzaPokM3BSY&ehbc=2E312F"; // New src link
      iframe.src = newSrc;
    }else if (value === "Oeste"){
      var iframe = document.getElementById('myIframe');
      var newSrc = "https://www.google.com/maps/d/embed?mid=18sVYh73Vq8Uk57-N461Zbnkb5Aawy3Q&ehbc=2E312F"; // New src link
      iframe.src = newSrc;
    }



  });


}
map()