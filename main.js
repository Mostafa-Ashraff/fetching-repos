let theInput = document.querySelector('#input');
let searchBtn = document.querySelector('#search');
let reposDiv = document.querySelector('.repos');
searchBtn.onclick =function() {
    getRepos();
};
function getRepos(){
    if(theInput.value !== null && theInput.value !== ''){
    reposDiv.innerHTML='';        
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
    .then(response => response.json())
    .then(repos => {repos.forEach(repo => {
        let div = document.createElement('div');
        div.classList.add('repo')
        let para = document.createElement('p');
        para.className = 'name';
        para.textContent = repo.name;
        div.appendChild(para);
        let infoDiv = document.createElement('div');
        infoDiv.className = 'info';
        let forkNo = document.createElement('span');
        forkNo.className = 'btn'
        forkNo.textContent =` Forks: ${repo.forks_count}`
        infoDiv.appendChild(forkNo);
        let starsCount = document.createElement('span');
        starsCount.className = 'btn'
        starsCount.textContent =` Star: ${repo.stargazers_count}`
        infoDiv.appendChild(starsCount);
        let url = document.createElement('span');
        let urlLink = document.createElement('a');
        urlLink.textContent ='visit';
        urlLink.href = `https://github.com/${theInput.value}/${repo.name}`;
        urlLink.setAttribute('target', '_blank');
        url.className='btn'
        url.appendChild(urlLink);
        infoDiv.appendChild(url);
        div.appendChild(infoDiv);
        reposDiv.appendChild(div); 

    });});
    }
}
