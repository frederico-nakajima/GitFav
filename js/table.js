export function setupTable() {
    const table = document.querySelector("table");
    const tableBody = table.querySelector("tbody");
    
    const emptyMessageContainer = document.createElement("div");
    emptyMessageContainer.classList.add("empty-message");
    emptyMessageContainer.innerHTML = `
        <img src="assets/Estrela.png" alt="Estrela">
        <span>Nenhum favorito ainda</span>
    `;
    table.parentElement.appendChild(emptyMessageContainer);

    function adjustTableHeight() {
        if (tableBody.querySelectorAll("td").length === 0) {
            table.style.height = "60rem"; 
            emptyMessageContainer.style.display = "flex"; 
        } else {
            table.style.height = "auto"; 
            emptyMessageContainer.style.display = "none"; 
        }
    }

    adjustTableHeight();

    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === "childList") {
                adjustTableHeight();
            }
        });
    });

    observer.observe(tableBody, {
        childList: true,
        subtree: true
    });
}
