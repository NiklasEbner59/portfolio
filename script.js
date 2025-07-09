// Smooth scrolling for nav links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Home-Button scrollt nach oben
const homeBtn = document.getElementById('home-btn');
if (homeBtn) {
  homeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Dynamische Projekte
const projects = [
  {
    title: "Portfolio Website",
    description: "A personal website to showcase my projects and skills.",
    image: "", // z.B. "project1.jpg" oder leer lassen
    link: "https://github.com/NiklasEbner59",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Weather App",
    description: "A simple weather app using a public API.",
    image: "", // z.B. "weatherapp.jpg"
    link: "",
    tags: ["API", "JavaScript"]
  }
  // Weitere Projekte einfach ergänzen
];

const projectsSection = document.querySelector('.projects-section');
const projectsList = document.createElement('div');
projectsList.className = 'projects-list';

projects.forEach(project => {
  const article = document.createElement('article');
  article.className = 'project';
  article.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    ${project.image ? `<img src="${project.image}" alt="${project.title}" class="project-img">` : ""}
    ${project.link ? `<a href="${project.link}" target="_blank" class="project-link">View Project</a>` : ""}
    ${project.tags ? `<div class="tags">${project.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}</div>` : ""}
  `;
  projectsList.appendChild(article);
});

// Entferne evtl. statische Beispielprojekte
const staticProject = projectsSection.querySelector('.project');
if (staticProject) staticProject.remove();

projectsSection.appendChild(projectsList); 