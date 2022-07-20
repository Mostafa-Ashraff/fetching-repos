let theInput = document.querySelector('#input');
let searchBtn = document.querySelector('#search');
let reposDiv = document.querySelector('.repos');
searchBtn.onclick =function() {
    getRepos();
};
function getRepos(){
    if(theInput.value !== null && theInput.value !== ''){
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
    .then(response => response.json())
    .then(repos => {repos.forEach(repo => {
        let div = document.createElement('div');
        div.classList.add('repo')
        let para = document.createElement('p');
        para.className = 'name';
        let infoDiv = document.createElement('div');
        infoDiv.className = 'info';
        let forkNo = document.createElement('span');
        let url = document.createElement('span');
        let urlLink = document.createElement('a');
        urlLink.textContent ='visit';
        urlLink.href = `https://github.com/${theInput.value}/${repo.name}`;
        urlLink.setAttribute('target', '_blank');
        url.appendChild(urlLink);
        url.className='btn'
        forkNo.className = 'btn'
        para.textContent = repo.name;
        forkNo.textContent =` Forks: ${repo.forks_count}`
        div.appendChild(para);
        infoDiv.appendChild(forkNo);
        infoDiv.appendChild(url);
        div.appendChild(infoDiv);
        reposDiv.appendChild(div); 

    });});
    }
}
