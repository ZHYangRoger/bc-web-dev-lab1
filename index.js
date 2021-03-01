import renderMainPage from './components/MainPage.js';
import renderProjectPage from './components/ProjectPage.js';

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













