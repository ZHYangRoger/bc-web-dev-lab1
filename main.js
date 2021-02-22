fetch('assets/data.json')
.then(response => {
  return response.json();
})
.then(data => {
    //console.log(data);
    const queryString = window.location.search;
    renderProfilePage(queryString, data);
});

function renderProfilePage(queryString, data){
    if (queryString.includes("project")){
        const urlParams = new URLSearchParams(queryString);
        var proj_id = urlParams.get('project');
        //console.log(proj_id);
        data.projects.forEach(function(project){
            if (proj_id === project.id){
                renderProjectPage(project);
            }
        });
    }
    else{
        renderMainPage(data);
    }
}

function renderProjectPage(projdata){
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

/* function render_proj_images(projimage){
    var img_arr = ``;
    projimage.forEach(function(item){img_arr += `<img src="${item}" class="image_container2 mob_pic"><br/>`;});
    return img_arr;
} */

function renderNavbar(page){
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
    
function renderMainPage(data){

    document.querySelector('.container').innerHTML = `
        <body class="container mob_text">
        ${renderNavbar('main')}
        ${renderAbout(data.about)}
        ${renderNews(data.news)}
        ${renderProjects(data.projects)}
        </body>
    `;
}


function renderAbout(about){
    return`
    <section id="about" class="padding-top">
        <h2 class="mob_heading animate__animated animate__bounce">${about.name}</h2>
        <div class="row">
            <div class="col-8">
                <img src="${about.photo}" class="image_container1 mob_profile" alt="My Picture!">
            </div>
        <div class="col-4">
            <p>
                <b>${about.title}</b><br/>
                ${about.email}<br/>
                ${about.address}<br/>
                ${render_links(about.links)}
                <p>
                ${about.description}
                </p>
            </p>
        </div>
    </section>
    <br/><br/>
    `;
}

function render_links(links){
    var link_arr = ``;
    links.forEach(function(item){link_arr += `<a href="${item.link}">${item.icon}</a> | `;});
    return link_arr.slice(0, -2);
}

function renderNews(news){
    return`
    <section id="news" class="padding-top">
        <h2 class="mob_heading">News</h2>
            ${renderNewsItem(news)}
    </section>
    <br/><br/>
    `;
}

function renderNewsItem(news){
    return news.map(d=>`
        <section>
            <div class="row">
                <div class="col-8">
                    ${d.title}<br/>
                </div>
                <div class="col-4">
                    ${d.date}<br/><br/>
                </div>
        </section>
    `).join('');

}

function renderProjects(projects){
    return`
    <section id="projects" class="padding-top">
        <h2 class="mob_heading">Projects</h2>
            ${renderProjectItems(projects)}
    </section>
    `;
}

function renderProjectItems(projects){
    return projects.map(d=>`
        <section>
            <div class="row">
                <div class="col-8">
                    <a href="?project=${d.id}"><b>${d.title}</b></a>
                    <img src="${d.image}" class="image_container2 mob_pic">
                </div>
                <div class="col-4">
                    ${render_projtags(d.tags)}<br/>
                    ${d.authors}<br/>
                    ${d.date}<br/>
                    ${render_materials(d.materials)}<br/><br/>
                </div>
            </div>
        </section>
    `).join('');
}

function render_projtags(tags){
    var tag_arr = ``;
    tags.forEach(function(item){
        switch(item.id){
            case `personal`:
                tag_arr += `<span class="tag tag_personal">${item.name}</span> `;
                break;
            case `course work`:
                tag_arr += `<span class="tag tag_course">${item.name}</span> `;
                break;
            case `subject`:
                tag_arr += `<span class="tag tag_subject">${item.name}</span> `;
                break;
        }
        });
    return tag_arr;
}

function render_materials(materials){
    var mat_arr = ``;
    materials.forEach(function(item){mat_arr += `<a href="${item.path}">${item.label}</a>`;});
    return mat_arr;
}