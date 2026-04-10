import './style.css'
import hockeyDark from './assets/sports_hockey_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'
import hockeyLight from './assets/sports_hockey_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'

const appBody = document.querySelector<HTMLDivElement>('#app')!;

appBody.innerHTML += `
<p>Welcome to my homepage! Here you can find links to my projects, and resume. 
This site is a work in progress, so check back often for updates! 
</p>
<p>My latest endeavor is a Tim Hortons hockey challenge helper, which you can find by clicking the link below.
It uses sports book odds to calculate the optimal picks for the Tim Hortons hockey challenge, 
which is a contest where you pick the winners of NHL games during the hockey season.
</p>
<p>I am currently working on a new project, which will be a web app that helps you solve Sudoku puzzles. 
Stay tuned for more information about that!
</p>
<picture>
  <source srcset="${hockeyLight}" media="(prefers-color-scheme: dark)">
  <img src="${hockeyDark}" alt="Theme-responsive image" style="height: 4rem;">
</picture>
`;

const addLink = (title: string, link: string) => {
    const a = document.createElement('a');
    a.href = link;
    a.appendChild(document.createTextNode(title));
    a.style.display = 'inline';
    appBody.appendChild(a);
    appBody.appendChild(document.createElement('br'));
};

addLink("Tims Hockey Challenge Helper", "./timspicks/");
appBody.innerHTML += `
<p>Some basic info about Sudoku, and links to my Sudoku app, loading puzzles with different strategies.</p>
`;

const iframe = document.createElement('iframe');
iframe.id = "iframe";
iframe.src = "./sudoku.html";
iframe.style.width = "100%";
// iframe.style.overflow = 'hidden';
iframe.style.border = "0";
appBody.appendChild(iframe);

addLink("Singles", "./sudoku/");

addLink("Naked Pair", "./sudoku/?strategy=naked2");
addLink("Naked Triple", "./sudoku/?strategy=naked3");
addLink("Naked Quad", "./sudoku/?strategy=naked4");
addLink("Hidden Single", "./sudoku/?strategy=hidden1");
addLink("Hidden Pair", "./sudoku/?strategy=hidden2");
addLink("Hidden Triple", "./sudoku/?strategy=hidden3");
addLink("Hidden Quad", "./sudoku/?strategy=hidden4");
addLink("Intersection Removal", "./sudoku/?strategy=omissions");
addLink("Deadly Pattern", "./sudoku/?strategy=uniqueRectangle");
addLink("Y Wing", "./sudoku/?strategy=yWing");
addLink("XYZ Wing", "./sudoku/?strategy=xyzWing");
addLink("X Wing", "./sudoku/?strategy=xWing");
addLink("Swordfish", "./sudoku/?strategy=swordfish");
addLink("Jellyfish", "./sudoku/?strategy=jellyfish");

addLink("Sudoku About", "./sudoku/about.html");

appBody.innerHTML += `
<p>Contact: snovakow@gmail.com</p>
`;
addLink("Resume", "/resume/");

function resizeIFrameToFitContent() {
    const iframe = document.getElementById('iframe')! as HTMLIFrameElement;

    // iframe.contentWindow.document.body.style.whiteSpace = 'nowrap';
    const content = iframe.contentDocument;
    if(!content) return;

    const margin = parseInt(window.getComputedStyle(content.body).margin);
    // iframe.style.width = iframe.contentWindow.document.body.scrollWidth+margin+margin + "px";
    iframe.style.height = content.body.scrollHeight + margin + margin + "px";

    // iframe.contentWindow.document.body.style.height="100%";
    console.log(content.body.scrollWidth);
    console.log(content.body.scrollHeight);
}
iframe.onload = resizeIFrameToFitContent;
