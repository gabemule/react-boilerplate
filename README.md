# React boilerplate

## Usando linter
Os linters `eslint` e `stylelint` estão sendo verificados
no `pre-commit`. Caso não estejam de acordo o commit será
impedido de ser realizado.

Caso esteja numa IDE onde não tenha a opção de auto correção.

Você pode usar os seguintes comandos:

Para resolver os erros de js:
```
npm run fix:js
```

Para resolver os erros de scss:
```
npm run fix:scss
```

E caso você queria resolver tudo de uma vez :-)
```
npm run fix:all
```

## Cofigurando a Ide Vscode
**Esses passos devem ser feitos após a instalação do projeto**


Existem algumas configurações para deixar o linter corrigir
os arquivos ao salvar além de avisar quando está saindo do
padrão. Vamos a elas:

1. Crie uma pasta .vscode na raiz do projeto

2. Crie o arquivo extensions.json dentro da pasta .vscode,
com as seguintes configurações:
```
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "stylelint.vscode-stylelint",
    "editorconfig.editorconfig",
    "esbenp.prettier-vscode"
  ]
}
```
3. Crie o arquivo settings.json dentro da pasta .vscode e
cole o código abaixo:
```
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
  },
  "[scss]": {
		"editor.defaultFormatter": "stylelint.vscode-stylelint",
  }
}

```

