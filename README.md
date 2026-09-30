# ReciclaTech

Projeto acadêmico de uma plataforma para doações e voluntariado.

## Organização

- `html/`: páginas com a estrutura semântica e o conteúdo (`index.html`, `projetos.html` e `cadastro.html`).
- `css/`: fonte `style.scss`, CSS compilado `style.css` e mapa `style.css.map`.
- `imagens/`: logotipos, ícones e imagens utilizados nas páginas.
- `js/`: módulos de inicialização (`app.js`), roteamento (`router.js`) e carregamento de templates (`templates.js`).
- `capturas/`: registros visuais das páginas e componentes para a atividade acadêmica.
- `index.html` na raiz: entrada principal da SPA, com cabeçalho, rodapé e conteúdo inicial. Os arquivos de `html/` fornecem os templates de conteúdo.

## Abrir o projeto

Use um servidor local (os módulos JavaScript e o `fetch` não devem ser abertos por `file://`). Na raiz do projeto, execute:

```sh
python3 -m http.server 8000
```

Acesse `http://localhost:8000/`. Também é possível usar o Live Server do VS Code.

As rotas são `#/inicio`, `#/projetos` e `#/cadastro`. Seções usam um terceiro segmento, como `#/projetos/voluntariado`. A navegação troca apenas o conteúdo de `main#app`, mantém cabeçalho e rodapé e funciona com os botões voltar e avançar. As páginas de `html/` ainda podem ser acessadas diretamente pelo servidor.

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

A SPA usa JavaScript modular e templates obtidos dos arquivos HTML. Menu e popover usam recursos nativos. O módulo `formulario.js` trata apenas `submit`, utilizando `preventDefault()` para impedir o envio e `reportValidity()` para verificar as restrições HTML. O localStorage será desenvolvido em uma próxima etapa. Ao trocar de página, o formulário ainda não preserva os dados digitados.
