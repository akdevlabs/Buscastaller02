//--------------------  Our Valores  -----------------------//
const squeresHidden = document.getElementById('squeres-hidden')
document.getElementById("squeres").addEventListener("mousemove", function(event) {
  squeresHidden.style.display = 'flex'
});
document.getElementById("squeres").addEventListener("mouseout", function(event) {
  squeresHidden.style.display = 'none'
});
const montaHidden = document.getElementById('monta-hidden')
document.getElementById("monta").addEventListener("mousemove", function(event) {
  montaHidden.style.display = 'flex'
});
document.getElementById("monta").addEventListener("mouseout", function(event) {
  montaHidden.style.display = 'none'
});
const teamHidden = document.getElementById('team-hidden')
document.getElementById("team").addEventListener("mousemove", function(event) {
  teamHidden.style.display = 'flex'
});
document.getElementById("team").addEventListener("mouseout", function(event) {
  teamHidden.style.display = 'none'
});
const qualityHidden = document.getElementById('quality-hidden')
document.getElementById("quality").addEventListener("mousemove", function(event) {
  qualityHidden.style.display = 'flex'
});
document.getElementById("quality").addEventListener("mouseout", function(event) {
  qualityHidden.style.display = 'none'
});


//--------------------  Moral-block-dropdown  -----------------------//
function Dp1run(){
  let toggle = true;
function handleClick() {
  if (toggle) {
    myDropdown.style.display = 'flex'
  } else {
    myDropdown.style.display = 'none'
  }
  // Toggle the variable
  toggle = !toggle;
}
document.getElementById("dp1").addEventListener("click", handleClick);
}Dp1run()


function Dp2run(){
  let toggle = true;
function handleClick() {
  if (toggle) {
    myDropdown2.style.display = 'flex'
  } else {
    myDropdown2.style.display = 'none'
  }
  // Toggle the variable
  toggle = !toggle;
}
document.getElementById("dp2").addEventListener("click", handleClick);
}Dp2run()

function Dp3run(){
  let toggle = true;
function handleClick() {
  if (toggle) {
    myDropdown3.style.display = 'flex'
  } else {
    myDropdown3.style.display = 'none'
  }
  // Toggle the variable
  toggle = !toggle;
}
document.getElementById("dp3").addEventListener("click", handleClick);
}Dp3run()


function Dp4run(){
  let toggle = true;
function handleClick() {
  if (toggle) {
    myDropdown4.style.display = 'flex'
  } else {
    myDropdown4.style.display = 'none'
  }
  // Toggle the variable
  toggle = !toggle;
}
document.getElementById("dp4").addEventListener("click", handleClick);
}Dp4run()