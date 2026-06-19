# Visualizador de Perfil do GitHub

Aplicação web (frontend puro) que permite buscar um usuário do GitHub pelo **nome de usuário** e visualizar:
- Avatar, nome e bio
- Quantidade de **seguidores** e **seguindo**
- Lista de **repositórios** (até 10), com informações como forks, stars, watchers e linguagem

A busca consome a **GitHub REST API** diretamente no navegador.

---

## Como funciona

A página principal é `index.html`, que contém:
- Um input (`#input-search`) para digitar o username
- Um botão (`#btn-search`) para iniciar a busca
- Um container (`.profile-results`) onde o conteúdo é renderizado

Fluxo (módulos JS):
1. `javascript/index.js`
   - Inicializa o comportamento chamando `initializeSearch()`.
2. `javascript/search-controller.js`
   - Escuta o clique no botão.
   - Lê o valor do input, faz `trim()` e valida.
   - Exibe estado **loading** via `renderLoading(profileResults)`.
   - Faz chamadas à API:
     - `getUser(username)` (perfil)
     - `getRepos(username)` (repositórios)
   - Em sucesso: renderiza tudo com `renderProfile(profileResults, repos, user)`.
   - Em erro: mostra `alert(error.message)`.
3. `javascript/github-api.js`
   - `getUser`: `GET https://api.github.com/users/:username`
   - `getRepos`: `GET https://api.github.com/users/:username/repos?per_page=10&sort=updated`
   - Se `response.ok` falhar, lança `new Error("Usuário não encontrado")`.
4. `javascript/profile.js`
   - Monta o HTML do perfil e dos repositórios.
   - Se não houver repositórios (lista vazia), exibe: `nenhum repositório encontrado 😢`.

---

## Estrutura do projeto

- `index.html`
  - Estrutura da página e inclusão dos CSS
  - Carrega o script de entrada: `./javascript/index.js`
- `javascript/index.js`
  - Ponto de entrada (inicializa a busca)
- `javascript/search-controller.js`
  - Controla eventos de interface e orquestra a busca/renderização
- `javascript/github-api.js`
  - Cliente da API GitHub (fetch + tratamento básico de erro)
- `javascript/profile.js`
  - Função responsável por renderizar o perfil e os repositórios
- `javascript/loading.js`
  - Função para renderizar o estado de carregamento
- `src/css/*.css`
  - `reset.css`: reset de estilos
  - `styles.css`: layout e estilos principais
  - `animations.css`: animações (ex.: gradiente)
  - `responsive.css`: media queries para responsividade

---

## Requisitos e observações

- **Internet necessária** para consumir a GitHub API.
- A aplicação faz requisições diretamente do navegador para `https://api.github.com`.
  - Em cenários onde CORS/HTTPS e o ambiente do navegador bloquearem requisições, pode ser necessário rodar um backend/proxy.
- A lista de repositórios é limitada a **10 itens** (`per_page=10`).

---

## Como executar

1. Abra o arquivo **`index.html`** no navegador.
   - Alternativamente, use um servidor local (ex.: VSCode Live Server) para garantir melhor compatibilidade com módulos.
2. Digite um username do GitHub e clique em **Buscar**.

---

## Dependências

- Devicons (ícones) via CDN:
  - `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css`
- Fonte Inter via Google Fonts.

