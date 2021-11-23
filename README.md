
# TodoList - Backend

Backend do projeto final do Módulo 3 - FullStack da Blue Edtech!
Os alunos deveriam criar uma aplicação em formato de "TodoList", onde 
fosse possível criar, editar, visualizar e apagar tarefas através
de uma API externa. O frontend deveria ser feito em ReactJS.

Esta é a parte do Backend, com as quatro operações CRUD funcionais 


## API

#### Listar todas as tarefas

```
  GET /
```

#### Listar apenas um item

```
  GET /(id)
```
##### Exibe as informações da tarefa com o ID fornecido.
| Parâmetro | Tipo     | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Obrigatório**. Id do item a ser recuperado |

```
  POST /add
```

##### Adiciona uma nova tarefa. **O ID é gerado automaticamente**.
| Parâmetro | Tipo     | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `titulo`      | `string` | **Obrigatório**. Título da tarefa a ser criada |
| `descricao` | `string` | **Obrigatório**. Descrição da tarefa. |
| `prazo` | `date` | **Obrigatório**. Define o prazo da tarefa. Date em formato ISO |
| `prioridade` | `number` | **Obrigatório**. Define a prioridade da tarefa. 0 = Alta, 1 = Média, 2 = Baixa |
| `status` | `number` | **Obrigatório**. Define o status da tarefa. 0 = A fazer, 1 = Fazendo, 2 = Feita |

```
  PUT /(id)
```

##### Edita uma tarefa já existente.
| Parâmetro | Tipo     | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | **Obrigatório**. O ID da tarefa a ser editada. Deve ser um ID já existente.|
| `titulo`      | `string` | **Obrigatório**. Novo título da tarefa. |
| `descricao` | `string` | **Obrigatório**. Nova descrição da tarefa. |
| `prazo` | `date` | **Obrigatório**. Novo prazo da tarefa. Date em formato ISO |
| `prioridade` | `number` | **Obrigatório**. Nova prioridade da tarefa. 0 = Alta, 1 = Média, 2 = Baixa |
| `status` | `number` | **Obrigatório**. Novo status da tarefa. 0 = A fazer, 1 = Fazendo, 2 = Feita |

```
  DELETE /(id)
```
##### Apaga uma tarefa com o ID fornecido

| Parâmetro | Tipo     | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | **Obrigatório**. O ID da tarefa a ser apagada.|


## Variáveis de ambiente

As variáveis de ambiente estão no arquivo .ENV.EXAMPLE

## Demo

Backend: https://todo022-backend.herokuapp.com/

Frontend: https://eduardo-todolist.herokuapp.com/

**A partir do dia 29/11/2021, apenas as operações GET estarão ativas.**