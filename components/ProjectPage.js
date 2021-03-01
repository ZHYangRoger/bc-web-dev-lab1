import renderNavbar from './Navbar.js';

export default function renderProjectPage(projdata){
    document.querySelector('.container').innerHTML = `
    <body class="container mob_text">
        <nav>
            <ul>
                ${renderNavbar('project')}
            </ul>
        </nav>

        <h1 class="mob_heading">${projdata.title}</h1>

        <p>
        <div class="row">
            <div class="col-7">
                <br/><img src="${projdata.image}" class="image_container3 mob_pic"><br/>
            </div>
            <div class="col-5">
                ${projdata.texts}<br/>
                ${render_materials(projdata.materials)}
    </body>
    `;
}

export function render_materials(materials){
    var mat_arr = ``;
    materials.forEach(function(item){mat_arr += `<a href="${item.path}">${item.label}</a>`;});
    return mat_arr;
}