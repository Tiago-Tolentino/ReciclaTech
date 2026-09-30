# JavaScript

- `app.js`: carrega os templates e inicia o roteador. Apresenta uma mensagem caso o carregamento falhe.
- `templates.js`: busca as três páginas HTML uma vez e reúne seu conteúdo, título e classes em um objeto.
- `formulario.js`: monitora somente `submit`; impede o envio com `preventDefault()`, executa a validação nativa e salva as opções de colaboração e mostra uma confirmação.
- `armazenamento.js`: grava preferências com `JSON.stringify`/`setItem` e recupera com `getItem`/`JSON.parse`.
- `router.js`: observa `hashchange` e insere a página escolhida em `#app`.

Os links já usam `#/inicio`, `#/projetos` e `#/cadastro` no próprio HTML. Não é necessário interceptar cliques ou converter endereços. O navegador altera o hash e o roteador atualiza o conteúdo sem recarregar o documento.

A navegação para seções usa, por exemplo, `#/projetos/voluntariado`. Trocar apenas a seção não recria o formulário. Ao mudar de página, os dados pessoais são descartados. As opções de colaboração salvas após validar o formulário são restauradas do localStorage, inclusive ao reabrir o navegador.

Execute com um servidor local. Não são utilizados frameworks.
