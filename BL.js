function renderUserBlock(){
  const Loginblock = document.getElementById('Login-block')
  const Userblock = document.getElementById('user-popup')
  const userBtn = document.getElementById('user')
  userBtn.addEventListener('click', () => {
    Loginblock.style.display = 'none';
    Userblock.style.display = 'flex';
  
  });
} renderUserBlock()

function renderTallerBlock(){
  const Loginblock = document.getElementById('Login-block')
  const Tallerblock = document.getElementById('taller-popup')

  const repairBtn = document.getElementById('repair')
  repairBtn.addEventListener('click', () => {
    Loginblock.style.display = 'none';
    Tallerblock.style.display = 'flex';
  });
}renderTallerBlock()

function renderPWBlock(){
  const OCBlock = document.getElementById('OCBlock')
  const PWBtn = document.getElementById('PW-Btn')

  PWBtn.addEventListener('click', () => {
    
    OCBlock.style.display = 'block';
  });
}renderPWBlock()

function HidePWBlock(){
  const hidBtn = document.getElementById('hidBtn')
  const OCBlock = document.getElementById('OCBlock')

  hidBtn.addEventListener('click', () => {
    OCBlock.style.display = 'none';
  });
}HidePWBlock()
function CloseUserBlock(){
  const userpopup = document.getElementById('user-popup')
  const Loginblock = document.getElementById('Login-block')
  const UXBtn = document.getElementById('UXBtn')
  UXBtn.addEventListener('click', () => {
    userpopup.style.display = 'none';
    Loginblock.style.display = 'flex';
  });
}CloseUserBlock()

function CloseTallerBlock(){
  const tallerpopup = document.getElementById('taller-popup')
  const Loginblock = document.getElementById('Login-block')
  const TXBtn = document.getElementById('TXBtn')
  TXBtn.addEventListener('click', () => {
    tallerpopup.style.display = 'none';
    Loginblock.style.display = 'flex';
  });
}CloseTallerBlock()




