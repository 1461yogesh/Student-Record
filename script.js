document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        // Subtle interaction: Log which section the user is entering
        card.addEventListener('mouseenter', () => {
            console.log(`User focused on: ${card.querySelector('h2').innerText}`);
        });

        // Click ripple effect simulation
        card.addEventListener('click', (e) => {
            const button = card.querySelector('.cta-button');
            button.style.transform = 'scale(0.95)';
            
            // Brief delay to allow the animation to be seen before navigating
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // Optional: Add a simple reveal animation for cards on load
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});