export default function renderNews(news){
    return`
    <section id="news" class="padding-top">
        <h2 class="mob_heading">News</h2>
        <div class="search">
        <input type="search" name='news' placeholder="Search News...">
        </div><br/>
        <div class="news-list">
        ${renderNewsItem(news)}
        </div>
    </section>
    <br/><br/>
    `;
}

export function renderNewsItem(news){
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
    `).slice(0, 8).join('');
}

export function searchNews(data){
    document.querySelector('.search input[name="news"]')
    .addEventListener('input', (event)=>{
        const keyword = event.target.value;
        let filtered = [];
        if (keyword === ""){
            filtered = data.news;
        }
        else{
            data.news.forEach(function(news_item){
                if (news_item.title.toLowerCase().includes(keyword.toLowerCase())
                || news_item.date.toLowerCase().includes(keyword.toLowerCase())){
                    filtered.push(news_item);
                }
            });
        }
        filtered.sort((a,b)=>a.title.localeCompare(b.title));
        document.querySelector('.news-list').innerHTML = renderNewsItem(filtered);
    });
}

