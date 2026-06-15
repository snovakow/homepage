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
            `App to help make Tim Hortons Hockey Challenge picks in the Tims app, 
            a contest involving picking goal scorers in NHL games.
            The app uses sportsbook implied probability odds to calculate the optimal picks.`,
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
            `An age tracking app for my niece.`,
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
    {
        title: 'Composer',
        description:
            `A 2D content creation tool in development.`,
        github_url: 'https://github.com/snovakow/composer',
        web_url: 'https://snovakow.com/composer',
        web_label: 'Open App'
    },
    {
        title: 'Greenscreen',
        description:
            `A greenscreen app in development.`,
        github_url: 'https://github.com/snovakow/greenscreen',
        web_url: 'https://snovakow.com/greenscreen',
        web_label: 'Open App'
    },
    {
        title: 'Bounder',
        description:
            `A walkable area exploration app in development.`,
        github_url: 'https://github.com/snovakow/bounder',
        web_url: 'https://snovakow.com/bounder',
        web_label: 'Open App'
    }
];