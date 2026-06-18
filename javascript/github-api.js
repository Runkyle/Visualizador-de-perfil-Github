const BASE_URL = "https://api.github.com";

export async function getUser(username) {
    const response = await fetch(`${BASE_URL}/users/${username}`);

    if (!response.ok) {
        throw new Error("Usuário não encontrado");
    }

    return await response.json();
}


export async function getRepos(username){
    const response = await fetch(`${BASE_URL}/users/${username}/repos?per_page=10&sort=updated`);

    if (!response.ok) {
        throw new Error("Usuário não encontrado");

}
    return await response.json();

}