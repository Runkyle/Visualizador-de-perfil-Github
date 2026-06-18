export function renderProfile(container, repos, user) {

    const repositoriesInfo = repos.length > 0 ? repos.map( repo => `


        <a href="${repo.html_url}" target="_blank">

        <div class="repository-card">
    <h3>${repo.name}</h3>

    
    <div class="repository-info">

        <span>🍴 Forks: ${repo.forks}</span>

        <span>⭐ Stars: ${repo.stargazers_count}</span>

        <span>👀 Watchers: ${repo.watchers_count}</span>

        <span>💻 Language: ${repo.language || "Não informado"}</span>

    </div>
</div>



        `).join("") : `<p>nenhum repositório encontrado 😢</p>`



    container.innerHTML = `
        <div class="profile">
            <img src="${user.avatar_url}" alt="Avatar do usuário">

            <div class="profile-results">
                <h3>${user.name}</h3>
                <p>${user.bio || "Bio não encontrada 😢"}</p>
            </div>
        </div>

        <div class="profile-counters">
            <div class="followers">
                <h4>🧑‍💼 Seguidores</h4>
                <span>${user.followers}</span>
            </div>

            <div class="following">
                <h4>🤝 Seguindo</h4>
                <span>${user.following}</span>
            </div>
        </div>

   <div class="profile-repositories">

    <h2>Repositórios</h2>

    <div class="repositories-grid">
        ${repositoriesInfo}
    </div>
</div>
        
        

    `;
}