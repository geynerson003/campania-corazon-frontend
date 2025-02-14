
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".buttonPropuest");

    // Mostrar el modal al hacer clic en cualquier botón "Propuestas"
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-target") || button.getAttribute("data-modal"); 
            const modal = document.getElementById(modalId);

            if (modal) {
                modal.style.display = "flex";
            }
        });
    });

    // Cerrar el modal al hacer clic en la "X"
    const closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach(closeButton => {
        closeButton.addEventListener("click", () => {
            closeButton.closest(".modal").style.display = "none";
        });
    });

    // Cerrar el modal al hacer clic fuera del contenido
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});
