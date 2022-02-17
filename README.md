# Bem-vindos ao Todo List Ebytr - Frontend

## Contexto

---

Esse projeto foi desenvolvido para uma vaga de backend na empresa [`Ebytr`](www.betrybe.com).

A proposta era desenvolver uma aplicação backend de uma Lista de Tarefas para a empresa, com as funcionalidades de criação, edição, leitura e exclusão de tarefas por usuário.

Os tipos de dados adotados são:

#### Tarefas

|   Task   |  Status  |  CreatedAt |    id    | 
| :------: | :------: |  :------:  | :------: | 
| `string` | `string` |  `string`  | `string` | 

#### Usuário

|  UserId  |  Email   |  Password  |   Name   |   Role   | 
| :------: | :------: |  :------:  | :------: | :------: | 
| `string` | `string` |  `string`  | `string` | `string` |

---

---

## Como instalar

Pre-requisitos para rodar o projeto: 
- NPM

Copie o ssh do projeto `git@github.com:ricardo-sousa-dev/challange-to-do-list-Ebytr-frontend.git`

* Abra um terminal no seu computador e utilize os comandos a baixo na ordem que são apresentados:

  * `git clone git@github.com:ricardo-sousa-dev/challange-to-do-list-Ebytr-frontend.git`
  * `cd challange-to-do-list-Ebytr-backend`
  * `npm install`
  * `npm start`

  A aplicação está configurada para rodar na porta local `3000`. Caso queira rodar o projeto localmente, será necessário fazer o clone do [repositório do backend](https://github.com/ricardo-sousa-dev/challange-to-do-list-Ebytr-backend) e seguir os mesmos passos de instalação do projeto. Ao final, o backend estárá rodando na porta `3001` e o frontend na porta `3000`.

---

## Modo de utilização

A aplicação possui as seguintes telas:
* `/` => Login - O usuário poderá se cadastrar ou efetuar login, caso já possua cadastro
* `/tasks` => Tasks - O usuário poderá visualizar suas tarefas cadastradas, assim como editar, excluir ou criar uma nova tarefa
---

## Modo de desenvolvimento

---

O projeto foi desenvolvido utilizando `TDD`, inicialmente com testes de integração, posteriormente a construção da [API](https://github.com/ricardo-sousa-dev/challange-to-do-list-Ebytr-backend) e depois a construção do frontend.

### Tecnologias

---

Foi utilizado para o desenvolvimento desse projeto o `React JS` com `Bootstrap` para a criação básica, `Axios` para as requisições no backend e `JWT` para a geração de token de autenticação.

---

## Próximos passos

* Implementação da cobertura de testes unitários e integração com `Jest` ou `Cypress`
* Implementação de Categorias
* Implementação de Relatórios com filtros de categoria, data e status
* Integração com Google Calendar

---

## Contatos

#### Ricardo Sousa :smiley:

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-0077B5?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/rwmsousa/)](https://www.linkedin.com/in/rwmsousa/) [![Gmail Badge](https://img.shields.io/badge/-Gmail-D14836?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rwmsousa@gmail.com)](mailto:rwmsousa@gmail.com)

<img src="https://bit.ly/foto-linkedin" style="height: 100px; width:100px; border-radius:50px"/>



