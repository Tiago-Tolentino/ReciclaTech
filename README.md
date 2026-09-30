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

A SPA usa JavaScript modular e templates obtidos dos arquivos HTML. Menu e popover usam recursos nativos. O módulo `formulario.js` trata apenas `submit`, utilizando `preventDefault()` para impedir o envio e `reportValidity()` para verificar as restrições HTML. Após uma validação bem-sucedida, `armazenamento.js` salva somente as opções de colaboração no localStorage, na chave `reciclatech.preferenciasColaboracao`, usando JSON. As opções são restauradas ao abrir o cadastro. Desmarcar todas e validar grava uma lista vazia. Dados pessoais não são armazenados. Falhas de leitura ou gravação exibem uma mensagem sem bloquear o formulário.

## Fluxo de branches (GitFlow)

O GitFlow foi adotado a partir do commit `527a4c2`. O histórico anterior foi mantido, sem reescrita.

- `main`: referência da versão estável; recebe lançamentos revisados e correções urgentes. Sua existência não significa que o site já esteja publicado em produção.
- `develop`: integra as funcionalidades em desenvolvimento, antes do próximo lançamento.
- `feature/<nome>`: nasce de `develop` e concentra uma funcionalidade. Após a verificação, retorna a `develop` por um merge com `--no-ff`, preservando o registro da integração.
- `release/<versao>`: criada de `develop` quando uma versão estiver pronta para revisão final. Após a aprovação, é integrada a `main` e `develop`, com uma tag de versão em `main`.
- `hotfix/<nome>`: criada de `main` quando houver uma falha urgente na versão estável. A correção retorna a `main` e `develop` (ou à release em andamento), evitando que se perca no próximo lançamento.

Nesta adoção inicial, `feature/preferencias-colaboracao` reúne a persistência das opções de colaboração, o feedback de armazenamento, a correção da validação de rotas e a documentação correspondente. A funcionalidade é integrada a `develop`; `main` permanece na versão anterior até o próximo lançamento.

Exemplo de trabalho em uma nova funcionalidade:

```sh
git switch develop
git pull --ff-only origin develop
git switch -c feature/nome-da-funcionalidade
# Editar e verificar os arquivos.
git add arquivos-alterados
git commit -m "Descreve a funcionalidade implementada"
git push -u origin feature/nome-da-funcionalidade
# Revisar as alterações antes de integrar.
git switch develop
git merge --no-ff feature/nome-da-funcionalidade
git push origin develop
```

Branches de funcionalidade normalmente são removidas após a integração. A primeira foi mantida para demonstrar a estrutura na atividade acadêmica. Branches `release/` e `hotfix/` são temporárias e só serão criadas quando houver trabalho correspondente. Regras de proteção e exigência de pull requests no GitHub ainda não foram configuradas.
