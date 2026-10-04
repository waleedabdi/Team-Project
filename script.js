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
    renderProjects();
});


const projects = [
    {
        title: "To-Do List Dashboard",
        description: "A dynamic dashboard that helps teams track their daily goals and manage project deadlines in real-time.",
        tags: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "Local Brand Matchmaker Dashboard"
        description: "A business marketplace dashboard that uses engagement analytics to instantly match local small businesss with regional micro-influencers for marketingcampaigns.",
        tags: ["HTML", "CSS", "JavaScript", "Engagement-Algorithim"],
    }
];

function renderProjects() {
    const projectContainer = document.getElementById('project-container');
    projects.forEach(item => {
        const cardHTML = `
        <div class="project-card">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <p>Tags: ${item.tags.join(', ')}</p>
        </div>
        `;
        projectContainer.innerHTML += cardHTML;
        
    });

}




