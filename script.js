document.getElementById('learn-more-btn').addEventListener('click', function() {
    document.getElementById('introduction').scrollIntoView({ behavior: 'smooth' });
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.content-block').forEach(block => {
    block.classList.add('fade-in');
    observer.observe(block);
});
