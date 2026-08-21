export type Project = {
    title: string;
    description: string;
    github_url?: string;
    web_url: string;
    info_url?: string;
    linkText?: string;
    additionalLinks?: { text: string; url: string }[];
};

export const projects: Project[] = [
    {
        title: 'Magic of Flight',
        description:
            `An interactive VR educational experience about the science of flight, 
            designed for the Meta Quest headset. Runs in the browser via WebXR with no app install required. 
            Winner of three 2021 WebXR Poly Awards: Education Experience, Video Experience, and Experience of the Year.`,
        web_url: 'https://liquidcinemavr.com/fly/',
        linkText: 'Open Experience',
    },
    {
        title: '3D Anatomy Atlas',
        description:
            `An interactive 3D human anatomy atlas built on Zygote's medical-grade models. 
            Released for iPhone, iPad, and web, as part of the University of Calgary's Lindsay Project.
            No longer active; archival information and demo links are still available.`,
        web_url: 'https://lindsayvirtualhuman.com/?p=273',
        linkText: 'App Overview',
        additionalLinks: [
            { text: 'Demo Video: Intro', url: 'https://www.youtube.com/watch?v=3MZps2_Z1zo' },
            { text: 'Demo Video: Rendering', url: 'https://www.youtube.com/watch?v=38d7P3JB4SE' },
            { text: 'Demo Video: Slice Tool', url: 'https://www.youtube.com/watch?v=M0xubQ0_5Q0' },
            { text: 'CBC News', url: 'https://www.cbc.ca/news/canada/calgary/new-medical-tool-honours-u-of-c-student-s-memory-1.1240316' },
        ],
    },
    {
        title: 'Tims Hockey Challenge Helper',
        description:
            `App to help make Tim Hortons Hockey Challenge picks in the Tims app. 
            The Tim Hortons Hockey Challenge is a contest for picking goal scorers in NHL games.
            The app uses sportsbook implied probability odds to calculate optimal picks.`,
        github_url: 'https://github.com/snovakow/timspicks',
        web_url: 'https://snovakow.com/timspicks/',
        info_url: './homepage/timspicks-details.html',
    },
    {
        title: 'Sudoku',
        description:
            `A Sudoku app and strategy explorer. View the project details page for supported techniques and links to strategy-specific games.`,
        github_url: 'https://github.com/snovakow/sudoku',
        web_url: 'https://snovakow.com/sudoku',
        info_url: './homepage/sudoku-details.html',
    },
    {
        title: 'Birthday',
        description:
            `An age tracking app made as a birthday gift.`,
        github_url: 'https://github.com/snovakow/birthday',
        web_url: 'https://snovakow.com/rayapapaya',
    },
    {
        title: 'Monty Hall Problem',
        description:
            `A game show app in development, implementing the Monty Hall problem.`,
        github_url: 'https://github.com/snovakow/gameshow',
        web_url: 'https://snovakow.com/gameshow',
    },
];