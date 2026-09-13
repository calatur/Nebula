// 1. Theme Toggle (DOM Manipulation)
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeBtn.textContent = '🌙';
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        themeBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        themeBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
});

// 2. Responsive Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 3. Image Modal Logic (Dynamic Content)
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('modal-caption');
const closeModal = document.getElementById('close-modal');
const galleryImages = document.querySelectorAll('.gallery-img');

if (galleryImages.length > 0) {
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the image
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// 4. Client-Side Form Validation
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page reload

        let isValid = true;

        // Get Fields
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        // Get Error Spans
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');
        const successMsg = document.getElementById('success-msg');

        // Reset errors
        nameError.style.display = 'none';
        emailError.style.display = 'none';
        messageError.style.display = 'none';
        successMsg.textContent = '';

        // Validate Name
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            nameError.style.display = 'block';
            isValid = false;
        }

        // Validate Email (Basic Regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email.';
            emailError.style.display = 'block';
            isValid = false;
        }

        // Validate Message
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message cannot be empty.';
            messageError.style.display = 'block';
            isValid = false;
        }

        // Success Behavior
        if (isValid) {
            successMsg.textContent = 'Message sent successfully! (Simulated)';
            contactForm.reset();
        }
    });
}


// 5. Opacity Fade Slider Logic
const opacitySlider = document.getElementById('opacity-slider');
const topImg = document.getElementById('fade-top-img');

if (opacitySlider && topImg) {
    // Listen for the slider being dragged ('input' event)
    opacitySlider.addEventListener('input', (event) => {
        // The slider value goes from 0 to 100.
        const sliderValue = event.target.value;
        
        // Convert the 0-100 scale to a 1.0 to 0.0 scale for CSS opacity
        // 0 slider = 1.0 opacity (fully visible raw image)
        // 100 slider = 0.0 opacity (completely invisible, showing processed image below)
        const currentOpacity = 1 - (sliderValue / 100);
        
        // Apply the new opacity to the top image inline style
        topImg.style.opacity = currentOpacity;
    });
}