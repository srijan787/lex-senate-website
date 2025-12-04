// Mobile Navbar Toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Get the form
const contactForm = document.querySelector('#contactForm form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent actual form submission

    // Get form values
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all required fields correctly.');
    } else {
        alert('Thank you! Your message has been sent.');
        contactForm.reset(); // optional: clear the form after success
    }
});


