import './style.css'
import { projects, type Project } from './projects'

const appBody = document.querySelector<HTMLDivElement>('#app');

if (!appBody) {
	throw new Error('Missing #app element in index.html');
}

const renderProjectCard = (project: Project): string => {
	return `
    <section class="project-card">
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <div class="project-links">
        <a class="link-badge" href="${project.github_url}" target="_blank" rel="noreferrer noopener">GitHub</a>
        <a class="link-badge" href="${project.web_url}">Open App</a>
        ${project.info_url ? `<a class="link-badge" href="${project.info_url}">Info</a>` : ''}
      </div>
    </section>
  `;
};

const renderShowcase = (): void => {
	const cards = projects.map(renderProjectCard).join('');

	appBody.innerHTML = `
    <main class="showcase-page">
      <header class="showcase-header">
        <h1>Projects</h1>
      </header>
      <section class="project-stack">
        ${cards}
      </section>
      <footer class="showcase-footer">
        <p>Contact: <a href="mailto:snovakow@gmail.com">snovakow@gmail.com</a></p>
        <a class="link-badge" href="https://snovakow.com/resume/">Resume</a>
      </footer>
    </main>
  `;
};

renderShowcase();
