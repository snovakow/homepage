import './style.css'
import { projects, type Project } from './projects'

const appBody = document.querySelector<HTMLDivElement>('#app');

if (!appBody) {
	throw new Error('Missing #app element in index.html');
}

const renderProjectCard = (project: Project): string => {
	const linkText = project.linkText || 'Open App';
	const additionalLinks = project.additionalLinks?.map(link => `<a class="link-badge" href="${link.url}">` + link.text + '</a>').join('') || '';
	return `
<section class="project-card">
	<h2>${project.title}</h2>
	<p>${project.description}</p>
	<div class="project-links">
		${project.github_url ? `<a class="link-badge" href="${project.github_url}" target="_blank" rel="noreferrer noopener">GitHub</a>` : ''}
		<a class="link-badge" href="${project.web_url}">${linkText}</a>
		${project.info_url ? `<a class="link-badge" href="${project.info_url}">Info</a>` : ''}
		${additionalLinks}
	</div>
</section>
  `;
};

const renderShowcase = (): void => {
	const appPortfolio = projects.slice(0, 2);
	const hobbyProjects = projects.slice(2);

	const appPortfolioCards = appPortfolio.map(renderProjectCard).join('');
	const hobbyProjectsCards = hobbyProjects.map(renderProjectCard).join('');

	appBody.innerHTML = `
<main class="showcase-page">
	<header class="showcase-header">
		<h1>Scott Novakowski</h1>
		<p class="subtitle">Software Engineer</p>
	</header>
	<section class="project-stack" aria-label="App portfolio">
		<p><a class="link-badge" href="https://snovakow.com/resume/">Resume</a></p>
		<h2 class="section-title">App Portfolio</h2>
		${appPortfolioCards}
	</section>
	<section class="project-stack" aria-label="Hobby projects">
		<h2 class="section-title">Hobby Projects</h2>
		${hobbyProjectsCards}
	</section>
	<footer class="showcase-footer">
		<p>Contact: <a href="mailto:snovakow@gmail.com">snovakow@gmail.com</a></p>
	</footer>
</main>
  `;
};

renderShowcase();
