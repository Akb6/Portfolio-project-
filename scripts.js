document.addEventListener('DOMContentLoaded', function() {
    renderProjectsInline();
    initImageSlider();
    animateSkills();
    typewriterEffect();
    createParticles();
    observeElements();
});

function typewriterEffect() {
    const phrases = [
        "MCA Graduate (2025)",
        "ML/AI Engineer",
        "Building Fraud Detection Systems",
        "Passionate about AI"
    ];
    let currentPhrase = 0;
    let currentChar = 0;
    const typingElement = document.querySelector('.typing-text');
    
    function type() {
        if (currentChar < phrases[currentPhrase].length) {
            typingElement.textContent += phrases[currentPhrase].charAt(currentChar);
            currentChar++;
            setTimeout(type, 50);
        } else {
            setTimeout(erase, 2000);
        }
    }
    
    function erase() {
        if (currentChar > 0) {
            typingElement.textContent = phrases[currentPhrase].substring(0, currentChar - 1);
            currentChar--;
            setTimeout(erase, 30);
        } else {
            currentPhrase = (currentPhrase + 1) % phrases.length;
            setTimeout(type, 500);
        }
    }
    type();
}

function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
        particle.style.setProperty('--ty', (Math.random() - 0.5) * 200 + 'px');
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);
    }
}

function renderProjectsInline() {
    const projects = [
        {
            "title": "Fraud Detection ML Pipeline",
            "description": "End-to-end ML pipeline preventing $6,000 fraud losses per 1,000 transactions. XGBoost + Random Forest + SMOTE (87% precision, 75K+ transactions).",
            "technologies": ["Python", "Scikit-learn", "XGBoost", "Pandas"],
            "link": "https://github.com/Akb6/fraud-detection-ml-pipeline"
        },
        {
            "title": "Health AI Tracker",
            "description": "AI-powered web app for instant diabetes risk predictions. Full-stack Flask application serving thousands of users.",
            "technologies": ["Python", "Flask", "Scikit-learn", "HTML/CSS/JS"],
            "link": "https://github.com/Akb6/HealthAiTracker"
        },
        {
            "title": "Crime Rate Prediction",
            "description": "ML models predicting crime rates by state/pincode/year/population. Random Forest vs Linear Regression (cross-validated MSE/R² metrics).",
            "technologies": ["Python", "Scikit-learn", "Pandas"],
            "link": "https://github.com/Akb6/Crime_Rate-Prediction"
        }
    ];

    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';
    projects.forEach((project, index) => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.style.animationDelay = (index * 0.15) + 's';
        projectDiv.innerHTML = `
            <h3><i class="fas fa-code"></i> ${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">${project.technologies.join(' | ')}</div>
            <a href="${project.link}" target="_blank"><i class="fas fa-external-link-alt"></i> View on GitHub</a>
        `;
        projectList.appendChild(projectDiv);
    });
}

let currentImageIndex = 0;
const images = document.querySelectorAll('.slider-image');

function initImageSlider() {
    if (images.length > 0) {
        images[0].classList.add('visible');
        setInterval(showNextImage, 5000);
    }
}

function showNextImage() {
    if (images.length > 0) {
        images[currentImageIndex].classList.remove('visible');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('visible');
    }
}

function animateSkills() {
    const fills = document.querySelectorAll('.skill-fill');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const width = fill.style.width;
                fill.style.width = '0';
                setTimeout(() => {
                    fill.style.width = width;
                }, 100);
                observer.unobserve(fill);
            }
        });
    });
    fills.forEach(fill => observer.observe(fill));
}

function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}
