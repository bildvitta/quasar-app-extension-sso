Quasar App Extension SSO
===
Extensão para autenticação. Obs: O retorno da API necessita retornar no padrão **camelCase**, caso a API não retorne nesse padrão utilize a biblioteca [humps](https://www.npmjs.com/package/humps).

# Install
```bash
quasar ext add @bildvitta/sso
```

## Prompts

| Nome | Obrigatório? | Descrição | Padrão |
| ------------ | ------------ | ------------ | ------------ |
| serverBaseURL | Sim. | Endereço base da API em modo de desenvolvimento. | http://localhost:3000 |
| bucketURL | Sim. | Diretório de arquivos na nuvem, endereço dos "assets". | ... |


# Uninstall
```bash
quasar ext remove @bildvitta/sso
```
