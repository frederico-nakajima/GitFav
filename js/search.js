export function setupSearch() {
    const tableBody = document.querySelector("tbody");
    
    document.querySelector("#search-button").addEventListener("click", function() {
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
}
