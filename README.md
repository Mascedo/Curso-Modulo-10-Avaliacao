# Sistema CRUD de BOLICHE

API RESTful de um sistema CRUD para clientes, pistas e agendamentos

## Tecnologias:

* Node.js
* Express
* MongoDB
* Mongoose

## Funções:

1. Mostra clientes, pistas e agendamentos
2. Criar clientes, pistas e agendamentos
3. Atualizar clientes e pistas
4. Deletar clientes, pistas e agendamentos
5. Buscar clientes e pistas

## Endpoints:

 Clientes(/clientes)

GET /clientes → Mostra os clientes

GET /clientes?page=1&limit=1 → Faz uma paginação da pesquisa mostrando a pagina e o limite dela

POST /clientes → Cria um cliente

PUT /clientes/:id → Atualiza um cliente

DELETE /clientes/:id → Deleta um cliente

GET /clientes/:id → Busca um cliente por id

 Pistas(/pistas)

GET /pistas → Mostra as pistas

GET /pistas?page=1&limit=1 → Faz uma paginação da pesquisa mostrando a pagina e o limite dela

POST /pistas → Cria uma pista

PUT /pistas/:id → Atualiza uma pista

DELETE /pistas/:id → Deleta uma pista

GET /pistas/:id → Busca uma pista por id

 Agendamentos(/agendamentos)

GET /agendamentos → Mostra os agendamentos

GET /agendamentos?page=1&limit=1 → Faz uma paginação da pesquisa mostrando a pagina e o limite dela

POST /agendamentos → Cria um agendamento

DELETE /agendamentos/:id → Deleta um agendamento

## Modelos:

 Cliente

```
 {
    nome: String
 }
```

 Pista

```
 {
    nome: String
 }
```

 Agendamento

```
 {
    data: String,
    horario: String,
    clienteID: String,
    pistaID: String
 }
```
## Licença

Este projeto está licenciado sob a Licença MIT.  
Veja o arquivo [LICENSE](./LICENSE) para mais informações.
