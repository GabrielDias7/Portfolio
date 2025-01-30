document.addEventListener("DOMContentLoaded", function() {
    // Seletor para o elemento com a classe 'skillsscroll'
    const scrollButton = document.querySelector('.skillsscroll');

    // Adicionando um evento de clique no botão
    scrollButton.addEventListener('click', function() {
        // Seleciona a seção com a classe 'skills'
        const skillsSection = document.querySelector('.skills');

        // Verifica se a seção de skills foi encontrada
        if (skillsSection) {
            // Rola suavemente até a seção de skills
            skillsSection.scrollIntoView({
                behavior: 'smooth',  // Comportamento de rolagem suave
                block: 'start'       // Alinha o topo da seção com o topo da janela
            });
        }
    });
});
