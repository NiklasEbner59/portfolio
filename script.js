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

// Projekte-Array
const projects = [
  {
    title: "Portfolio Website",
    description: "This is my personal portfolio website where I present my projects",
    image: "images/project_thumbnails/portfolio_thumbnail.png",
    link: "https://github.com/NiklasEbner59/portfolio",
    tags: ["JavaScript", "HTML", "CSS"]
  },
  {
    title: "TODO Website",
    description: "This is a very basic todo application",
    image: "images/project_thumbnails/todo_thumbnail.png",
    link: "https://github.com/NiklasEbner59/todo-website",
    tags: ["JavaScript", "HTML", "CSS", "Python", "Docker"]
  }
  // Weitere Projekte können hier ergänzt werden
];

// Projekte dynamisch einfügen
window.addEventListener('DOMContentLoaded', () => {
  const projectsList = document.querySelector('.projects-list');
  if (projectsList) {
    projects.forEach(project => {
      const projectDiv = document.createElement('div');
      projectDiv.className = 'project';
      projectDiv.innerHTML = `
        <img src="${project.image}" alt="${project.title} Thumbnail" class="project-thumb">
        <div class="project-info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" class="project-link">View Project</a>
          ${project.tags && project.tags.length ? `<div class="tags">${project.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}</div>` : ''}
        </div>
      `;
      projectsList.appendChild(projectDiv);
    });
  }
});

// Navbar ein-/ausklappen beim Scrollen und Mouseover
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');
let navbarHovered = false;

if (navbar) {
  navbar.addEventListener('mouseenter', () => {
    navbar.classList.remove('navbar--hidden');
    navbarHovered = true;
  });
  navbar.addEventListener('mouseleave', () => {
    navbarHovered = false;
  });

  window.addEventListener('scroll', () => {
    if (navbarHovered) return; // Beim Hover nicht verstecken
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
      // Nach unten scrollen
      navbar.classList.add('navbar--hidden');
    } else {
      // Nach oben scrollen
      navbar.classList.remove('navbar--hidden');
    }
    lastScrollY = window.scrollY;
  });
}

const hotzone = document.querySelector('.navbar-hotzone');
if (hotzone && navbar) {
  hotzone.addEventListener('mouseenter', () => {
    navbar.classList.remove('navbar--hidden');
  });
} 