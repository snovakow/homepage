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
            `An age tracking app made as a birthday gift.
            It shows an age counted live in years, months, weeks, days, hours, minutes and seconds,
            and in years to eight decimal places.`,
        github_url: 'https://github.com/snovakow/birthday',
        web_url: 'https://snovakow.com/rayapapaya/',
    },
    {
        title: 'Monty Hall Problem',
        description:
            `A 3D game show in the browser, played on the Monty Hall problem: three crates, one prize,
            and the question of whether to switch.
            A host runs the show round after round, a studio audience cheers along,
            and a show can be sent to someone as a gift link.`,
        github_url: 'https://github.com/snovakow/gameshow',
        web_url: 'https://snovakow.com/gameshow/',
        info_url: './homepage/gameshow-details.html',
    },
    {
        title: 'PDBSplat',
        description:
            `Proteins from the Protein Data Bank, rendered in the browser as Gaussian splats with three.js on WebGPU.
            Any entry loads by its PDB ID, drawn as soft splats, shaded spheres, a molecular surface or a density cloud,
            and coloured by element, chain, mobility or secondary structure.`,
        github_url: 'https://github.com/snovakow/PDBSplat',
        web_url: 'https://snovakow.com/pdbsplat/',
        info_url: './homepage/pdbsplat-details.html',
    },
    {
        title: 'VisibleHuman',
        description:
            `The Visible Human Project's male and female bodies and its head, in 3D in the browser,
            rebuilt from thousands of photographed cross-sections and their CT scans.
            Turn them, cut them open, and see them as splats, an X-ray, traced surfaces or meshes.`,
        github_url: 'https://github.com/snovakow/VisibleHuman',
        web_url: 'https://snovakow.com/visiblehuman/',
        info_url: './homepage/visiblehuman-details.html',
    },
    {
        title: 'Greenscreen',
        description:
            `A chroma key library for the browser, on WebGPU or WebGL2.
            It keys as OBS Studio's chroma key filter does and takes its settings in OBS's units,
            so a key tuned in OBS copies across as it is.
            It has no dependencies, and works from plain JavaScript, TypeScript, React and three.js.`,
        github_url: 'https://github.com/snovakow/greenscreen',
        web_url: 'https://www.npmjs.com/package/@snovakow/greenscreen',
        linkText: 'npm',
    },
];