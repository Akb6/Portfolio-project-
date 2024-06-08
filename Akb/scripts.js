document.addEventListener('DOMContentLoaded', function() {
    fetchProjectsData();
});

function fetchProjectsData() {
    fetch('projects.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch project data');
            }
            return response.json();
        })
        .then(data => renderProjects(data))
        .catch(error => console.error('Error fetching project data:', error));
}

function renderProjects(projects) {
    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectDiv = createProjectElement(project);
        projectList.appendChild(projectDiv);
    });
}

function createProjectElement(project) {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';
    projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">Learn More</a>
    `;
    return projectDiv;
}

const images = document.querySelectorAll('.slider-image');
let currentImageIndex = 0;

if (images.length > 0) {
    setInterval(showNextImage, 3000);
}

function showNextImage() {
    images[currentImageIndex].classList.remove('visible');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('visible');
}
