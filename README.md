# ReciclaTech

Projeto acadêmico de uma plataforma para doações e voluntariado.

## Organização

- `html/`: páginas com a estrutura semântica e o conteúdo (`index.html`, `projetos.html` e `cadastro.html`).
- `css/`: fonte `style.scss`, CSS compilado `style.css` e mapa `style.css.map`.
- `imagens/`: logotipos, ícones e imagens utilizados nas páginas.
- `js/`: pasta preparada para os futuros módulos JavaScript da SPA; atualmente contém apenas a documentação do planejamento.
- `capturas/`: registros visuais das páginas e componentes para a atividade acadêmica.
- `index.html` na raiz: entrada que redireciona para `html/index.html`, com um link alternativo.

## Abrir o projeto

Abra `index.html` na raiz ou `html/index.html` diretamente no navegador. Os links entre as páginas permanecem relativos à pasta `html/`; estilos e imagens são carregados de `../css/` e `../imagens/`.

## Compilar os estilos

Com o Sass instalado, execute na raiz:

```sh
sass css/style.scss css/style.css
```

Para recompilar automaticamente durante a edição:

```sh
sass --watch css/style.scss:css/style.css
```

## Etapa atual

A navegação e os componentes interativos atuais utilizam HTML e CSS nativos. A conversão para SPA, os templates JavaScript, a validação por scripts e a persistência com localStorage serão desenvolvidos nas próximas etapas.
