export type Project = {
    title: string;
    description: string;
    github_url: string;
    web_url: string;
    web_label?: string;
};

export const projects: Project[] = [
    {
        title: 'Tims Hockey Challenge Helper',
        description:
            `App to help make Tim Hortons Hockey Challenge picks in the Tims app. 
            The Tim Hortons Hockey Challenge is a contest for picking goal scorers in NHL games.
            The app uses sportsbook implied probability odds to calculate optimal picks.`,
        github_url: 'https://github.com/snovakow/timspicks',
        web_url: 'https://snovakow.com/timspicks/',
        web_label: 'Open App'
    },
    {
        title: 'Sudoku',
        description:
            `A Sudoku solver and strategy explorer. View the project details page for supported techniques and direct links to strategy-specific runs.`,
        github_url: 'https://github.com/snovakow/sudoku',
        web_url: './sudoku-details.html',
        web_label: 'Project Details'
    },
    {
        title: 'Birthday',
        description:
            `An age tracking app made as a birthday gift.`,
        github_url: 'https://github.com/snovakow/birthday',
        web_url: 'https://snovakow.com/rayapapaya',
        web_label: 'Open App'
    },
    {
        title: 'Monty Hall Problem',
        description:
            `A game show app in development, implementing the Monty Hall problem.`,
        github_url: 'https://github.com/snovakow/gameshow',
        web_url: 'https://snovakow.com/gameshow',
        web_label: 'Open App'
    },
];