export default function renderProjects(projects){
    return`
    <section id="projects" class="padding-top">
        <h2 class="mob_heading">Projects</h2>
        <div class="filter">
	        <label>
	            <input type="radio" name="filter" value="all" checked>All</label>
	        <label>
	            <input type="radio" name="filter" value="personal">Personal</label>
            <label>
	            <input type="radio" name="filter" value="course work">Course Work</label>
        </div><br/>
        <div class="filter">
            <b>Subjects: </b>
            <label>
                <input type="radio" name="filter" value="music">Music</label>
            <label>
                <input type="radio" name="filter" value="psychology">Psychology</label>
            <label>
                <input type="radio" name="filter" value="philosophy">Philosophy</label>
        </div><br/>
        <div class="project-list">
            ${renderProjectItems(projects)}
        </div>
    </section>
    `;
}

export function renderProjectItems(projects){
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

export function render_projtags(tags){
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

export function render_materials(materials){
    var mat_arr = ``;
    materials.forEach(function(item){mat_arr += `<a href="${item.path}">${item.label}</a>`;});
    return mat_arr;
}

export function filterProjects(data){
    let buttons = document.querySelectorAll('.filter input[name="filter"]');
    buttons.forEach(cond=>cond.addEventListener('change', function(event){
        document.querySelector(".project-list").innerHTML = renderProjectItems(
            getFilteredProjects(data.projects, cond.value)
          );
    }));
}

export function getFilteredProjects(proj, val){
    if (val === 'all'){
        return proj;
    }
    else{
        let proj_arr = [];
        proj.forEach(function(proj_item){
            proj_item.tags.forEach(function(p){
                if (p.name.toLowerCase() === val){
                    proj_arr.push(proj_item);
                }
            });
        });
        return proj_arr;
    }
}