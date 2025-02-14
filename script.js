function countdown() {
    const targetDate = new Date('2025-02-28T00:00:00').getTime();
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

