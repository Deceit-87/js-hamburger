



// Aggiungere classe active al menu hamburger class fa-bars
// oppure aggiungere classe open al link (no id no classe )

// togliere la classe active con la x classe close 










let openButton = document.querySelector('.header-right > a');



let closeButton = document.querySelector('.close');
// console.log(openButton);


let hamburgerMenu = document.querySelector('.hamburger-menu');

openButton.onclick =function() {
    hamburgerMenu.classList.add("active");}


    // onclick si puo aggiungere solo un eventlistener 

    openButton.addEventListener('click', function(){

    }
//  addEventListener puoi aggiungere piu eventi 

    
    // console.log('event')



closeButton.onclick =function() {
    hamburgerMenu.classList.remove("active");
    
    // console.log('event')
}