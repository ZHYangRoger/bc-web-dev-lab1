export default function renderAbout(about){
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

export function render_links(links){
    var link_arr = ``;
    links.forEach(function(item){link_arr += `<a href="${item.link}">${item.icon}</a> | `;});
    return link_arr.slice(0, -2);
}

