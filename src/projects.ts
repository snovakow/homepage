export type Project = {
  title: string;
  description: string;
  github_url: string | null;
  web_url: string;
  web_label?: string;
};

export const projects: Project[] = [
  {
    title: 'Tims Hockey Challenge Helper',
    description:
      'This app helps you make Tim Hortons Hockey Challenge picks in the Tims app. It ranks candidates for Pick #1, Pick #2, and Pick #3 using implied probabilities from sportsbook odds. which you can find by clicking the link below. It uses sports book odds to calculate the optimal picks for the Tim Hortons hockey challenge, which is a contest where you pick the winners of NHL games during the hockey season.',
    github_url: 'https://github.com/snovakow/timspicks',
    web_url: 'https://snovakow.com/timspicks/',
    web_label: 'Open App'
  },
  {
    title: 'Sudoku Solver',
    description:
      'A Sudoku solver and strategy explorer. View the project details page for supported techniques and direct links to strategy-specific runs.',
    github_url: null,
    web_url: './sudoku-details.html',
    web_label: 'Project Details'
  }
];