export function renderProfile(container, user) {
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
    `;
}