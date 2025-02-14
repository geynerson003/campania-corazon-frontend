document.addEventListener("DOMContentLoaded", () => {
    const comentarioForm = document.getElementById("comentarioForm");
    const comentariosLista = document.getElementById("listaComentarios");

    // Cargar comentarios al cargar la página
    cargarComentarios();

    comentarioForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const comentarioInput = document.getElementById("comentario");
        const texto = comentarioInput.value.trim();

        if (texto) {
            await enviarComentario(texto);
            comentarioInput.value = "";
            cargarComentarios(); // Recargar comentarios después de enviar
        }
    });

    async function enviarComentario(texto) {
        try {
            await fetch("https://graceful-empathy-production.up.railway.app/comentarios/guardar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ texto })
            });
        } catch (error) {
            console.error("Error al enviar comentario:", error);
        }
    }

    async function cargarComentarios() {
        try {
            const response = await fetch("https://graceful-empathy-production.up.railway.app/comentarios/listar");
            const comentarios = await response.json();
            comentariosLista.innerHTML = "";

            comentarios.forEach((comentario, index) => {
                const comentarioDiv = document.createElement("div");
                comentarioDiv.classList.add("comentario-item"); // Clase para aplicar estilo
    
                const p = document.createElement("p");
                p.textContent = comentario.texto;
    
                comentarioDiv.appendChild(p);
                comentariosLista.appendChild(comentarioDiv);
            });
        } catch (error) {
            console.error("Error al cargar comentarios:", error);
        }
    }
});