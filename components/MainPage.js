import renderNavbar from './Navbar.js';
import renderAbout from './About.js';
import renderNews, {searchNews} from './News.js';
import renderProjects, {filterProjects} from './Projects.js';

export default function renderMainPage(data){

    document.querySelector('.container').innerHTML = `
        <body class="container mob_text">
        ${renderNavbar('main')}
        ${renderAbout(data.about)}
        ${renderNews(data.news)}
        ${renderProjects(data.projects)}
        </body>
        <br/>
        <footer>Copyright © 2021 Zihui Yang</footer>
    `;
    searchNews(data);
    filterProjects(data);
}