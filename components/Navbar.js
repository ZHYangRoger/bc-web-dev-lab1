export default function renderNavbar(page){
    return`
    ${page === 'project'? (
        `<li><a href="index.html">Go back</a></li>`
    ) : (
        `<ul class="flex-container">
        <li><a href="#about">About</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#projects">Projects</a></li>
        </ul>`
    )}`
} 