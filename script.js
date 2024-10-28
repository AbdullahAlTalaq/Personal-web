// Select all sections and links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');
let isScrolling = false; // Prevent multiple scroll events from triggering
let scrollTimeout; // To manage the timeout for enabling scrolling

// Create an Intersection Observer to handle section visibility
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const content = entry.target.querySelector('.content');
        if (entry.isIntersecting) {
            content.classList.add('show'); // Add show class when in view
            content.classList.remove('hide'); // Remove hide class
        } else {
            content.classList.remove('show'); // Remove show class when out of view
            content.classList.add('hide'); // Add hide class
        }
    });
}, {
    threshold: 0.5 // Trigger when at least 50% of the section is visible
});

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});

// Smooth scrolling for nav links
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor click behavior

        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            isScrolling = true; // Prevent multiple scroll events
            targetSection.scrollIntoView({ behavior: 'smooth' });


        }
    });
});




    function showPopup(description, imageSrc) {
        document.getElementById('popup-description').textContent = description;
        if (imageSrc) {
            document.getElementById('popup-image').src = imageSrc;
            document.getElementById('popup-image').style.display = 'block';
        } else {
            document.getElementById('popup-image').style.display = 'none';
        }
        document.getElementById('popup').style.display = 'flex';
    }
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

