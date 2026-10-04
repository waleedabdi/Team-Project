const testimonials = [
    {
        name: "John Wick",
        role: "web Designer",
        quote: "Great layout and clean code structure."
    },
    {
        name: "Tony Stark",
        role: "Project Manager",
        quote: "Highly impressed with the dynamic rendering features. A stellar student project."
    }
];
function renderTestimonials() {
     const testimonialContainer = document.getElementById('testimonial-container');
testimonilas.forEach(item => {
    const cardHTML =`
    <div class="testimonial-card">
    <p class="quote">"${item.quote}"</p>
    <h4 class="name">-${item.name}</h4>
    <h5 class="role">${item.role}</h5>
</div>
    `});
}
window.addEventListener('DOMContentLoaded', () => {
    renderTestimonials();
});



