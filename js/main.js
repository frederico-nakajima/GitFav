import { FavoritesView } from './Favorites.js'

new FavoritesView('#app')



document.addEventListener("DOMContentLoaded", function() {
    const table = document.querySelector("table");
    const tableBody = table.querySelector("tbody");
    
    // Cria o contêiner para a imagem e a frase
    const emptyMessageContainer = document.createElement("div");
    emptyMessageContainer.classList.add("empty-message");
    emptyMessageContainer.innerHTML = `
        <img src="assets/Estrela.png" alt="Estrela">
        <span>Nenhum favorito ainda</span>
    `;
    // Adiciona o contêiner ao DOM
    table.parentElement.appendChild(emptyMessageContainer);

    // Função para ajustar a altura da tabela e mostrar/ocultar a mensagem
    function adjustTableHeight() {
        if (tableBody.querySelectorAll("td").length === 0) {
            table.style.height = "60rem"; // Aplica altura fixa quando não houver <td>
            emptyMessageContainer.style.display = "flex"; // Mostra a mensagem
        } else {
            table.style.height = "auto"; // Ajusta a altura automaticamente com os dados
            emptyMessageContainer.style.display = "none"; // Oculta a mensagem
        }
    }

    // Ajusta a altura ao carregar a página
    adjustTableHeight();

    // MutationObserver para monitorar mudanças no tbody
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === "childList") {
                adjustTableHeight(); // Reajusta a altura e visibilidade da mensagem
            }
        });
    });

    // Configura o observer para observar mudanças no tbody
    observer.observe(tableBody, {
        childList: true,
        subtree: true
    });

    // Exemplo de adição de novos dados, representando um evento dinâmico da SPA
    document.querySelector("#search-button").addEventListener("click", function() {
        // Simulação de adição de novos dados
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td class="user">
                <img src="https://github.com/username.png" alt="imagem do usuário">
                <a href="https://github.com/username" target="_blank">
                    <p>Usuário</p>
                    <span>/username</span>
                </a>
            </td>
            <td class="repositories">10</td>
            <td class="followers">100</td>
            <td class="remove"><button class="remove">Remover</button></td>
        `;
        tableBody.appendChild(newRow);
    });
});






