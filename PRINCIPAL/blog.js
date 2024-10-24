function addComment() {
    const commentInput = document.getElementById("comment-input");
    const commentText = commentInput.value;

    if (commentText) {
        const commentsSection = document.getElementById("comments-section");
        const newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.textContent = commentText; // Adiciona o texto do comentário
        commentsSection.appendChild(newComment);
        commentInput.value = ""; // Limpa o campo de comentário
    } else {
        alert("Por favor, escreva um comentário antes de enviar.");
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Adiciona a funcionalidade para o botão de voltar ao topo
document.getElementById("back-to-top").addEventListener("click", scrollToTop);
