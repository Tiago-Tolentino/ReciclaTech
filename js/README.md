# JavaScript

- `app.js`: carrega os templates e inicia o roteador. Apresenta uma mensagem caso o carregamento falhe.
- `templates.js`: busca as três páginas HTML uma vez e reúne seu conteúdo, título e classes em um objeto.
- `formulario.js`: monitora somente `submit`; impede o envio com `preventDefault()`, executa a validação nativa e mostra uma confirmação, sem salvar dados.
- `router.js`: observa `hashchange` e insere a página escolhida em `#app`.

Os links já usam `#/inicio`, `#/projetos` e `#/cadastro` no próprio HTML. Não é necessário interceptar cliques ou converter endereços. O navegador altera o hash e o roteador atualiza o conteúdo sem recarregar o documento.

A navegação para seções usa, por exemplo, `#/projetos/voluntariado`. Trocar apenas a seção não recria o formulário. Ao mudar de página, os dados digitados ainda são descartados; localStorage será implementado em outra etapa.

Execute com um servidor local. Não são utilizados frameworks.
