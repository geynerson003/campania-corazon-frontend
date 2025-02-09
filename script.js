function countdown() {
    const targetDate = new Date('2025-03-01T00:00:00').getTime();
    const timer = document.getElementById('timer');
    
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s 🕖 `;
        
        if (timeLeft < 0) {
            clearInterval(interval);
            timer.innerHTML = '¡Es el día de la votación!';
        }
    }
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
}

document.addEventListener('DOMContentLoaded', countdown);

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
