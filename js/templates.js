// Carregamos as três páginas uma vez, antes de iniciar a navegação.
export async function carregarTemplates() {
    const arquivos = {
        inicio: 'index.html',
        projetos: 'projetos.html',
        cadastro: 'cadastro.html'
    };
    const paginas = {};

    for (const rota in arquivos) {
        const endereco = new URL('../html/' + arquivos[rota], import.meta.url);
        const resposta = await fetch(endereco);
        if (!resposta.ok) throw new Error('Não foi possível carregar as páginas.');

        const texto = await resposta.text();
        const documento = new DOMParser().parseFromString(texto, 'text/html');
        const conteudo = documento.querySelector('main');

        // Ajusta as imagens para funcionarem na raiz e na pasta html.
        conteudo.querySelectorAll('img').forEach(function (imagem) {
            imagem.src = new URL(imagem.getAttribute('src'), endereco).href;
        });

        paginas[rota] = {
            html: conteudo.innerHTML,
            titulo: documento.title,
            classeBody: documento.body.className,
            classeMain: conteudo.className
        };
    }
    return paginas;
}
