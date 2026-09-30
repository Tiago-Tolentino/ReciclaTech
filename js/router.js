import { iniciarFormulario } from './formulario.js';

// O roteador recebe as páginas que já foram carregadas.
export function iniciarNavegacao(paginas) {
    const app = document.querySelector('#app');
    let paginaAtual = '';

    function renderizar() {
        // Exemplo: #/projetos/voluntariado vira ['projetos', 'voluntariado'].
        const partes = location.hash.replace('#/', '').split('/');
        const rota = partes[0] || document.body.dataset.pagina;
        const secao = partes[1];

        if (!paginas[rota]) {
            location.replace('#/inicio');
            return;
        }

        // Troca apenas o conteúdo principal, mantendo cabeçalho e rodapé.
        if (rota !== paginaAtual) {
            app.innerHTML = paginas[rota].html;
            document.body.className = paginas[rota].classeBody;
            app.className = paginas[rota].classeMain;
            document.title = paginas[rota].titulo;
            paginaAtual = rota;
            iniciarFormulario();
        }

        document.querySelectorAll('.cabecalho a').forEach(function (link) {
            link.removeAttribute('aria-current');
            if (link.getAttribute('href') === '#/' + rota) {
                link.setAttribute('aria-current', 'page');
            }
        });
        document.querySelectorAll('.cabecalho details').forEach(function (menu) {
            menu.open = false;
        });

        // Leva o usuário à seção escolhida ou ao início do conteúdo.
        const destino = document.getElementById(secao) || app;
        destino.setAttribute('tabindex', '-1');
        destino.focus({ preventScroll: true });
        destino.scrollIntoView();
    }

    // Os próprios links href="#/..." alteram o hash, sem recarregar a página.
    window.addEventListener('hashchange', renderizar);
    renderizar();
}
