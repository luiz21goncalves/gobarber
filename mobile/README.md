# GoBarber - Mobile

## Pré-requisitos

Antes de começar você vai precisar das seguintes ferramentas:

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/)
- [Emulador](https://react-native.rocketseat.dev/)
- opcional [Yarn](https://classic.yarnpkg.com/en/docs/install)

---

## Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [ReactJS](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Unform](https://unform.dev/)
- [Axios](https://github.com/axios/axios)
- [Styled Components](https://styled-components.com/)
- [React Native Vector Icos](https://github.com/oblador/react-native-vector-icons)
- [Jest](https://jestjs.io/)
- [Yup](https://github.com/jquense/yup)

---

**Tanto para versão web como mobile funcione normalmente a API precisa estar sendo executada**

### Rodando o back end
```bash
# clonando o projeto
git clone https://github.com/luiz21goncalves/gobarber.git

# acesse a pasta do projeto
cd gobarber

# entrando do diretório da API
cd api

# instalando as dependências
yarn

# executando a aplicação em modo de desenvolvimento
yarn dev:server
```

### Rodando o font end mobile
```bash
# retornando ao diretório base
cd ..
# entrando do diretório da API
cd web

# instalando as dependências
yarn

# executando emulardor ISO
yarn ios

# executando o metro bundler
yarn start

# abra outra aba do terminal
# executando emulardor ISO
yarn android
```
