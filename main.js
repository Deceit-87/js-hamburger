



// Aggiungere classe active al menu hamburger class fa-bars
// oppure aggiungere classe open al link (no id no classe )

// togliere la classe active con la x classe close 










let openButton = document.querySelector('.header-right > a');
openButton.classList.add('open');
let closeButton = document.querySelector('.close');
console.log(openButton);

openButton.onclick =function() {
    let hamburgerMenu = document.querySelector('.hamburger-menu');
    hamburgerMenu.classList.add("active");
    
    console.log('event')
}


closeButton.onclick =function() {
    let hamburgerMenu = document.querySelector('.hamburger-menu');
    hamburgerMenu.classList.remove("active");
    
    console.log('event')
}