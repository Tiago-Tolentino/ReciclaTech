// Guardamos apenas as opções de colaboração, sem dados pessoais.
const chave = 'reciclatech.preferenciasColaboracao';

export function salvarPreferencias(preferencias) {
    const texto = JSON.stringify(preferencias);
    localStorage.setItem(chave, texto);
}

export function carregarPreferencias() {
    const texto = localStorage.getItem(chave);
    if (texto === null) return [];

    const preferencias = JSON.parse(texto);
    if (!Array.isArray(preferencias)) {
        throw new Error('As preferências salvas não são uma lista.');
    }
    return preferencias;
}
