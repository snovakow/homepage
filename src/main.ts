import './style.css'

type Project = {
  title: string;
  description: string;
  github_url: string | null;
  web_url: string;
  web_label?: string;
};

const appBody = document.querySelector<HTMLDivElement>('#app');

if (!appBody) {
  throw new Error('Missing #app element in index.html');
}

const renderProjectCard = (project: Project): string => {
  const githubBadge = project.github_url
    ? `<a class="link-badge" href="${project.github_url}" target="_blank" rel="noreferrer noopener">GitHub</a>`
    : '';

  return `
    <section class="project-card">
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <div class="project-links">
        ${githubBadge}
        <a class="link-badge" href="${project.web_url}">${project.web_label ?? 'Open Project'}</a>
      </div>
    </section>
  `;
};

const renderShowcase = async (): Promise<void> => {
  const response = await fetch('/projects.json');
  if (!response.ok) {
    throw new Error(`Unable to load project data: ${response.status}`);
  }

  const projects = (await response.json()) as Project[];
  const cards = projects.map(renderProjectCard).join('');

  appBody.innerHTML = `
    <main class="showcase-page">
      <header class="showcase-header">
        <h1>Projects</h1>
        <p>Showcase entries for projects I have developed.</p>
      </header>
      <section class="project-stack">
        ${cards}
      </section>
      <footer class="showcase-footer">
        <p>Contact: <a href="mailto:snovakow@gmail.com">snovakow@gmail.com</a></p>
        <a class="link-badge" href="/resume/">Resume</a>
      </footer>
    </main>
  `;
};

renderShowcase().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : 'Unknown error';
  appBody.innerHTML = `<p>Unable to render showcase: ${message}</p>`;
});
