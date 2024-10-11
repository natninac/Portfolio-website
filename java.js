// Language Toggle
const langToggle = document.getElementById('lang-toggle');
langToggle.addEventListener('click', () => {
    if (langToggle.innerText === 'FR') {
        langToggle.innerText = 'EN';
        // Additional logic for translating the page to French
    } else {
        langToggle.innerText = 'FR';
        // Additional logic for translating the page to English
    }
});

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Define project data (titles and descriptions)
const projects = [
    { title: "Branding Project 1", description: "Description of Branding Project 1" },
    { title: "Branding Project 2", description: "Description of Branding Project 2" },
    { title: "Branding Project 3", description: "Description of Branding Project 3" },
    { title: "Branding Project 3", description: "Description of Branding Project 4" },
    { title: "Coding Project 1", description: "Description of Coding Project 1" },
    { title: "Coding Project 2", description: "Description of Coding Project 2" },
    { title: "Coding Project 3", description: "Description of Coding Project 3" },
    { title: "Coding Project 3", description: "Description of Coding Project 4" },
    { title: "Design Project 1", description: "Description of Design Project 1" },
    { title: "Design Project 2", description: "Description of Design Project 2" },
    { title: "Design Project 3", description: "Description of Design Project 3" },
    { title: "Design Project 3", description: "Description of Design Project 4" }
];

let currentProjectIndex = 0; // Track the current project being viewed

// Get references to modal elements
const modal = document.getElementById("myModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementsByClassName("close")[0];
const prevBtn = document.getElementsByClassName("prev")[0];
const nextBtn = document.getElementsByClassName("next")[0];

// Function to update modal content
function updateModalContent(index) {
    modalTitle.textContent = projects[index].title;
    modalDescription.textContent = projects[index].description;
}

// Show modal for the given project index
function showModal(index) {
    currentProjectIndex = index;
    updateModalContent(currentProjectIndex);
    modal.style.display = "block";
}

// Event listener for project buttons
for (let i = 1; i <= 12; i++) {
    let btn = document.getElementById(`myBtn${i}`);
    btn.onclick = function() {
        showModal(i - 1); // Show modal for the clicked project (adjust index by 1)
    };
}

// Close modal functionality
closeModal.onclick = function() {
    modal.style.display = "none";
};

// Close modal if clicked outside modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Navigate to the previous project
prevBtn.onclick = function() {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    updateModalContent(currentProjectIndex);
};

// Navigate to the next project
nextBtn.onclick = function() {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    updateModalContent(currentProjectIndex);
};
