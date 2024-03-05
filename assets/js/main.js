/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');
    
    /*=============== Menu Show  ===============*/
    //  Validate if constant exists
    if(navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        });
    }
    
/*=============== Menu Hide ===============*/
if(navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
        navLink.classList.remove('active');
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(`.nav__link`);

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, we remove the show menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = ()  => {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the shadow-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
}
window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/
const contactForm  = document.getElementById('contact-form'),
    contactMessage  = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_ohsprec','template_i62rebo','#contact-form','hdkz4gvNLIoOJq42K')
    .then(() => {
        // Show sent message
        contactMessage.textContent = "Message sent successfully ✅"

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ""
        }, 5000) //  Time in milliseconds

        // Clear input fields
        contactForm.reset();
    }, () => {
        // Show error message
        contactMessage.textContent = "Message not sent (service error) ❌"
    })
}

contactForm.addEventListener('submit',sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
