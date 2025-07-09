// Edição Especial: Bastidores da Interatividade no Papiro News
// Reportagem técnica sobre o funcionamento dos cartões informativos

// Aguarda o carregamento completo do conteúdo da página antes de executar qualquer ação
// Isso garante que todos os elementos estejam disponíveis para manipulação
// Redação Técnica: Equipe de Desenvolvimento Web

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links que possuem a classe 'show-card', responsáveis por exibir informações extras
    var linksDeCartao = document.querySelectorAll('.show-card');

    // Para cada link encontrado, adiciona um ouvinte de evento para o clique
    linksDeCartao.forEach(function(link) {
        link.addEventListener('click', function(evento) {
            // Impede o comportamento padrão do link (navegar para outra página)
            evento.preventDefault();

            // Obtém o valor do atributo 'data-target', que indica qual cartão deve ser exibido
            var alvo = link.getAttribute('data-target');
            // Localiza o elemento do cartão correspondente pelo ID
            var cartao = document.getElementById('card-' + alvo);

            // Se o cartão existir, alterna sua visibilidade
            // O cartão aparece ou desaparece, simulando uma reportagem exclusiva revelada ao leitor
            if(cartao) {
                cartao.classList.toggle('card-fly-hide');
            }
        });
    });
});

// Fim da reportagem técnica: assim funciona a interatividade dos cartões no Papiro News.
