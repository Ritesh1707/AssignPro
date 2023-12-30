function openWhatsApp() {
    // Replace '123456789' with the actual phone number you want to chat with
    var phoneNumber = '123456789';

    // Create the WhatsApp URL
    var whatsappURL = 'https://wa.me/' + phoneNumber;

    // Open the WhatsApp chat in a new tab
    window.open(whatsappURL, '_blank');
}

const navToggle = document.querySelector(".nav-toggle")
const nav = document.querySelector("#nav-links");
navToggle.addEventListener("click" ,()=>{
    nav.classList.toggle("active");
})