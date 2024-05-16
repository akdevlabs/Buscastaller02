window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav-Block").classList.add('scrolled');
    } else {
        document.getElementById("nav-Block").classList.remove('scrolled');
    }
}