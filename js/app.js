import { carregarTemplates } from './templates.js';
import { iniciarNavegacao } from './router.js';

// Primeiro carrega o HTML; depois ativa as rotas.
try {
    const paginas = await carregarTemplates();
    iniciarNavegacao(paginas);
} catch (erro) {
    document.querySelector('#app').innerHTML = '<p role="alert">Não foi possível carregar as páginas. Verifique a conexão e recarregue o site.</p>';
}
