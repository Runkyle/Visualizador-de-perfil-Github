import { getUser } from "./github-api.js";
import { renderLoading } from "./loading.js";
import { renderProfile } from "./profile.js";

const btnSearch = document.getElementById("btn-search");
const inputSearch = document.getElementById("input-search");
const profileResults = document.querySelector(".profile-results");

export function initializeSearch() {

    btnSearch.addEventListener("click", handleSearch);

}

async function handleSearch() {

    const username = inputSearch.value.trim();

    if (!username) return;

    renderLoading(profileResults);

    try {

        const user = await getUser(username);

        renderProfile(profileResults, user);

    } catch (error) {

        alert(error.message);

    }

}