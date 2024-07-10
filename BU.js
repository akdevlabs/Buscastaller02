function circleOne(){
  console.log("red")
  const C1 = document.getElementById('C1')
  const CC1 = document.getElementById('CC1')
  const cText1 = document.getElementById('cText1')
  C1.style.display = 'flex'
  CC1.style.backgroundColor = '#931D36'
}
function circleTwo(){
  const C2 = document.getElementById('C2')
  const CC2 = document.getElementById('CC2')
  const cText2 = document.getElementById('cText1')
  C2.style.display = 'flex'
  CC2.style.backgroundColor = '#931D36'
}
function circleThree(){
  const C3 = document.getElementById('C3')
  const CC3 = document.getElementById('CC3')
  const cText3 = document.getElementById('cText1')
  C3.style.display = 'flex'
  CC3.style.backgroundColor = '#931D36'
}
function circleFour(){
  const C4 = document.getElementById('C4')
  const CC4 = document.getElementById('CC4')
  const cText4 = document.getElementById('cText1')
  C4.style.display = 'flex'
  CC4.style.backgroundColor = '#931D36'
}
function circleFive(){
  const C5 = document.getElementById('C5')
  const CC5 = document.getElementById('CC5')
  const cText1 = document.getElementById('cText1')
  C5.style.display = 'flex'
  CC5.style.backgroundColor = '#931D36'
}
function circleSix(){
  const C6 = document.getElementById('C6')
  const CC6 = document.getElementById('CC6')
  const cText1 = document.getElementById('cText1')
  C6.style.display = 'flex'
  CC6.style.backgroundColor = '#931D36'
}
function circleSeven(){
  const C7 = document.getElementById('C7')
  const CC7 = document.getElementById('CC7')
  const cText7 = document.getElementById('cText7')
  C7.style.display = 'flex'
  CC7.style.backgroundColor = '#931D36'
}
function circleEight(){
  const C8 = document.getElementById('C8')
  const CC8 = document.getElementById('CC8')
  const cText8 = document.getElementById('cText8')
  C8.style.display = 'flex'
  CC8.style.backgroundColor = '#931D36'
}
function circleNine(){
  const C9 = document.getElementById('C9')
  const CC9 = document.getElementById('CC9')
  const cText9 = document.getElementById('cText9')
  C9.style.display = 'flex'
  CC9.style.backgroundColor = '#931D36'
}
function circleTen(){
  const C10 = document.getElementById('C10')
  const CC10 = document.getElementById('CC10')
  const cText10 = document.getElementById('cText10')
  C10.style.display = 'flex'
  CC10.style.backgroundColor = '#931D36'
}

const functions = [
  () => circleOne(),
  () => circleTwo(),
  () => circleThree(),
  () => circleFour(),
  () => circleFive(),
  () => circleSix(),
  () => circleSeven(),
  () => circleEight(),
  () => circleNine(),
  () => circleTen()
];
function activateFunctionsInOrder(funcs, interval) {
  let index = 0;
  const intervalId = setInterval(() => {
      if (index < funcs.length) {
          funcs[index]();
          index++;
      } else {
          clearInterval(intervalId);
      }
  }, interval);
}
// Activate each function every 3 seconds
activateFunctionsInOrder(functions, 2000);
//---------- hover effect --------//



function hoverEffect(){
  function hoverBtn1(){
    const C1 = document.getElementById('C1')
    // Get the button element
  // Add a mouseover event listener
  C1.addEventListener('mouseover', () => {
    // Change the button's background color
    C1.style.fontSize = '2rem';
  });
  
  // Add a mouseout event listener
  C1.addEventListener('mouseout', () => {
    // Change the button's background color back to its original color
    C1.style.fontSize = '1rem';
  });
  }
  function hoverBtn2(){
    const C2 = document.getElementById('C2')
    // Get the button element
  // Add a mouseover event listener
  C2.addEventListener('mouseover', () => {
    // Change the button's background color
    C2.style.fontSize = '2rem';
  });
  
  // Add a mouseout event listener
  C2.addEventListener('mouseout', () => {
    // Change the button's background color back to its original color
    C2.style.fontSize = '1rem';
  });
  }
  function hoverBtn3(){
    const C3 = document.getElementById('C3')
    // Get the button element
  // Add a mouseover event listener
  C3.addEventListener('mouseover', () => {
    // Change the button's background color
    C3.style.fontSize = '2rem';
  });
  
  // Add a mouseout event listener
  C3.addEventListener('mouseout', () => {
    // Change the button's background color back to its original color
    C3.style.fontSize = '1rem';
  });
  }
  function hoverBtn4(){
    const C4 = document.getElementById('C4')
    // Get the button element
  // Add a mouseover event listener
  C4.addEventListener('mouseover', () => {
    // Change the button's background color
    C4.style.fontSize = '2rem';
  });
  
  // Add a mouseout event listener
  C4.addEventListener('mouseout', () => {
    // Change the button's background color back to its original color
    C4.style.fontSize = '1rem';
  });
  }
  function hoverBtn5(){
    const C5 = document.getElementById('C5')
    // Get the button element
  // Add a mouseover event listener
  C5.addEventListener('mouseover', () => {
    // Change the button's background color
    C5.style.fontSize = '2rem';
  });
  
  // Add a mouseout event listener
  C5.addEventListener('mouseout', () => {
    // Change the button's background color back to its original color
    C5.style.fontSize = '1rem';
  });
  }
  function hoverBtn6(){
    const C6 = document.getElementById('C6')
    // Get the button element
  // Add a mouseover event listener
  C6.addEventListener('mouseover', () => {
    // Change the button's background color
    C6.style.fontSize = '2rem';
  });
  
  // Add a mouseout event listener
  C6.addEventListener('mouseout', () => {
    // Change the button's background color back to its original color
    C6.style.fontSize = '1rem';
  });
  }
  function hoverBtn7(){
    const C7 = document.getElementById('C7')
    // Get the button element
  // Add a mouseover event listener
  C7.addEventListener('mouseover', () => {
    // Change the button's background color
    C7.style.fontSize = '2rem';
  });
  
  // Add a mouseout event listener
  C7.addEventListener('mouseout', () => {
    // Change the button's background color back to its original color
    C7.style.fontSize = '1rem';
  });
  }
  function hoverBtn8(){
    const C8 = document.getElementById('C8')
    // Get the button element
  // Add a mouseover event listener
  C8.addEventListener('mouseover', () => {
    // Change the button's background color
    C8.style.fontSize = '2rem';
  });
  
  // Add a mouseout event listener
  C8.addEventListener('mouseout', () => {
    // Change the button's background color back to its original color
    C8.style.fontSize = '1rem';
  });
  }
  function hoverBtn9(){
    const C9 = document.getElementById('C9')
    // Get the button element
  // Add a mouseover event listener
  C9.addEventListener('mouseover', () => {
    // Change the button's background color
    C9.style.fontSize = '2rem';
  });
  
  // Add a mouseout event listener
  C9.addEventListener('mouseout', () => {
    // Change the button's background color back to its original color
    C9.style.fontSize = '1rem';
  });
  }
  function hoverBtn10(){
    const C10 = document.getElementById('C10')
    // Get the button element
  // Add a mouseover event listener
  C10.addEventListener('mouseover', () => {
    // Change the button's background color
    C10.style.fontSize = '2rem';
  });
  
  // Add a mouseout event listener
  C10.addEventListener('mouseout', () => {
    // Change the button's background color back to its original color
    C10.style.fontSize = '1rem';
  });
  }
  
  
  hoverBtn1()
  hoverBtn2()
  hoverBtn3()
  hoverBtn4()
  hoverBtn5()
  hoverBtn6()
  hoverBtn7()
  hoverBtn8()
  hoverBtn9()
  hoverBtn10()
}
hoverEffect()





