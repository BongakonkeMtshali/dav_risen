// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5000/api/music')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // You can update your HTML with the received data
        })
        .catch(error => console.error('Error fetching music data:', error));
});

