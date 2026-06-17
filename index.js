const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('input-search');
const profileResults = document.querySelector('.profile-results');


const BaseUrl = 'https://api.github.com';


btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;

    if (userName) {

        profileResults.innerHTML = `
        <div class="loading">
        <p>Carregando perfil...</p>
      </div>
`;


        try {

            const response = await fetch(`${BaseUrl}/users/${userName}`)

            if (!response.ok) {
                alert('Usuário não encontrado');
                return;
            }

            const data = await response.json();
            console.log(data);

            profileResults.innerHTML = `

            <div class="profile">
            <img src="${data.avatar_url}" alt="Avatar do usuário">
            <div class="profile-results">
                <h3>${data.name}</h3>
                <p>${data.bio || "Bio não encontrada 😢"}</p>
            </div>
            </div>
            `

        } catch (error) {
            console.log('Usuário não encontrado', error);
        }

    }

    // Aqui você pode chamar uma função para buscar os dados na API do GitHub



});


