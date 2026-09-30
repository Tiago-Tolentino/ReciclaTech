export function iniciarFormulario() {
    const formulario = document.querySelector('#formulario-cadastro');
    if (!formulario) return;

    const retorno = formulario.querySelector('#retorno-formulario');

    // A validação será chamada dentro do submit.
    formulario.noValidate = true;

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault(); // Impede o envio e o recarregamento da página.
        retorno.hidden = true;

        // O navegador verifica required, pattern, type e as demais regras HTML.
        if (!formulario.reportValidity()) return;

        retorno.className = 'alerta alerta--sucesso';
        retorno.textContent = 'Na última verificação, o preenchimento estava válido. Os dados não foram enviados ou salvos.';
        retorno.hidden = false;
        retorno.focus();
    });
}
