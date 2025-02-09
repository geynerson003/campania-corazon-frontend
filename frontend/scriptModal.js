
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("propuestasModal");
    const closeModal = document.querySelector(".close");
    const buttons = document.querySelectorAll(".buttonPropuest");

    // Mostrar el modal al hacer clic en cualquier botón "Propuestas"
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            modal.style.display = "flex";
        });
    });

    // Cerrar el modal al hacer clic en la "X"
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera del contenido
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
