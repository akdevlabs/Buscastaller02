



  const NorthB = document.getElementById('North-B')
  const BEast = document.getElementById('B-East')
  const Bsouth = document.getElementById('B-South')
  const Bwest = document.getElementById('B-West')

  const Base = document.getElementById('Base')
  const North = document.getElementById('Norte')
  const East = document.getElementById('Este')
  const West = document.getElementById('Oeste')
  const South = document.getElementById('Sur')


  NorthB.addEventListener('click', function() {
    var heading = document.getElementById('myHeading');
    var newContent = 'Cobertura Norte'; // New content for the h1
    heading.textContent = newContent; // Replace the content of the h1

    var iframe = document.getElementById('myIframe');
    var newSrc = "https://www.google.com/maps/d/embed?mid=11v6Jz60Qq4wzRzsfRV6gPcF31eEuPBg&ehbc=2E312F"; // New src link
    iframe.src = newSrc;
    });

    BEast.addEventListener('click', function() {
      var heading = document.getElementById('myHeading');
      var newContent = 'Cobertura Este'; // New content for the h1
      heading.textContent = newContent; // Replace the content of the h1

      var iframe = document.getElementById('myIframe');
      var newSrc = "https://www.google.com/maps/d/embed?mid=1BIBc4WPOC5ckgyqvyHUMw-qh23_m6r8&ehbc=2E312F"; // New src link
      iframe.src = newSrc;
 
  });

  Bsouth.addEventListener('click', function() {
    var heading = document.getElementById('myHeading');
    var newContent = 'Cobertura Sur'; // New content for the h1
    heading.textContent = newContent; // Replace the content of the h1

    var iframe = document.getElementById('myIframe');
    var newSrc = "https://www.google.com/maps/d/embed?mid=1TRO4HYE5jJFad8RioFrHbzaPokM3BSY&ehbc=2E312F"; // New src link
    iframe.src = newSrc;
  });

  Bwest.addEventListener('click', function() {
    var heading = document.getElementById('myHeading');
    var newContent = 'Cobertura Oeste'; // New content for the h1
    heading.textContent = newContent; // Replace the content of the h1

    var iframe = document.getElementById('myIframe');
    var newSrc = "https://www.google.com/maps/d/embed?mid=18sVYh73Vq8Uk57-N461Zbnkb5Aawy3Q&ehbc=2E312F"; // New src link
    iframe.src = newSrc;
  });