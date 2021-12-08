# React boilerplate

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

