document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            // Remove the animation class if it exists
            this.classList.remove("animate");

            // Trigger reflow to restart the animation
            void this.offsetWidth;

            // Add the animation class
            this.classList.add("animate");

            // Smooth scroll to the section
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Optional: Remove animation class after the transition
            setTimeout(() => {
                this.classList.remove("animate");
            }, 300); // duration of the animation
        });
    });
});
