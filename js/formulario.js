import { carregarPreferencias, salvarPreferencias } from './armazenamento.js';

export function iniciarFormulario() {
    const formulario = document.querySelector('#formulario-cadastro');
    if (!formulario) return;

    const retorno = formulario.querySelector('#retorno-formulario');

    const opcoes = formulario.querySelectorAll('input[name="colaboracao"]');

    // Restaura as escolhas quando o cadastro entra na tela.
    try {
        const preferencias = carregarPreferencias();
        opcoes.forEach(function (opcao) {
            opcao.checked = preferencias.includes(opcao.value);
        });
    } catch (erro) {
        retorno.className = 'alerta alerta--aviso';
        retorno.textContent = 'Não foi possível recuperar suas preferências. Você pode selecionar as opções novamente.';
        retorno.hidden = false;
    }

    // A validação será chamada dentro do submit.
    formulario.noValidate = true;

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault(); // Impede o envio e o recarregamento da página.
        retorno.hidden = true;

        // O navegador verifica required, pattern, type e as demais regras HTML.
        if (!formulario.reportValidity()) return;

        const preferencias = [];
        opcoes.forEach(function (opcao) {
            if (opcao.checked) preferencias.push(opcao.value);
        });

        try {
            salvarPreferencias(preferencias);
            retorno.className = 'alerta alerta--sucesso';
            retorno.textContent = 'Preenchimento validado! Suas opções de colaboração foram salvas neste navegador. Nenhum dado pessoal foi salvo ou enviado.';
        } catch (erro) {
            retorno.className = 'alerta alerta--aviso';
            retorno.textContent = 'Preenchimento validado, mas não foi possível salvar suas preferências neste navegador.';
        }
        retorno.hidden = false;
        retorno.focus();
    });
}
