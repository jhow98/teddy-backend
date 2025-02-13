# 📌 Projeto Backend - NestJS

## 📖 Visão Geral
Este projeto é uma API desenvolvida utilizando o framework **NestJS** com **TypeScript**, seguindo uma arquitetura modular baseada no **Clean Architecture**. Ele implementa serviços de mensageria com **BullMQ** e um banco de dados utilizando **TypeORM**.

## 📂 Estrutura de Pastas
```
📦 src
 ┣ 📂 modules
 ┃ ┣ 📂 clientes
 ┃ ┃ ┣ 📜 cliente.module.ts
 ┃ ┃ ┣ 📜 cliente.service.ts
 ┃ ┃ ┣ 📜 cliente.controller.ts
 ┃ ┃ ┣ 📜 cliente.repository.ts
 ┃ ┃ ┗ 📜 dtos
 ┃ ┣ 📂 messaging
 ┃ ┃ ┣ 📜 messaging.module.ts
 ┃ ┃ ┣ 📜 messaging.service.ts
 ┃ ┃ ┣ 📜 messaging.processor.ts
 ┃ ┃ ┗ 📜 messaging.controller.ts
 ┣ 📜 main.ts
 ┣ 📜 app.module.ts
 ┗ 📜 config.ts
```

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **NestJS**
- **TypeScript**
- **TypeORM**
- **PostgreSQL**
- **BullMQ**
- **Redis**
- **Jest** (Testes automatizados)
- **ESLint & Prettier** (Padrão de código)
- **Swagger** (Documentação da API)

---

## 📌 Instalação

### 1️⃣ Clonar o repositório
```sh
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

### 2️⃣ Instalar as dependências
```sh
npm install
```

### 3️⃣ Configurar variáveis de ambiente
Copie o arquivo `.env.example` e renomeie para `.env`, preenchendo os valores corretamente.
```sh
cp .env.example .env
```

### 4️⃣ Rodar a aplicação
```sh
npm run start:dev
```

---

## 🛢️ Banco de Dados

Utilizamos **PostgreSQL** como banco de dados.

📌 **Acesso ao banco:**
- Serviço: [Railway.app](https://railway.app/)
- Conexão: **postgres://username:password@host:port/database**

### 📌 Rodando as Migrations
```sh
npm run migration:run
```

---

## 📩 Serviço de Mensageria

A mensageria é feita com **BullMQ** e **Redis**.

📌 **Acesso ao Redis:**
- Serviço: [Upstash](https://upstash.com/)
- URL: `redis://your_upstash_url`

Para monitoramento das filas, utilize **Bull Board**:
```sh
npm run bull-board
```
Acesse: `http://localhost:3000/admin/queues`

---

## 📑 Documentação da API

A documentação da API é gerada automaticamente pelo **Swagger**.

📌 **Acesse:** [Swagger UI](http://localhost:3000/api)

---

## ✅ Testes Automatizados

Os testes são feitos com **Jest**.

### Rodar todos os testes:
```sh
npm test
```

### Rodar testes com cobertura de código:
```sh
npm run test:cov
```

---

## 📌 Padrão de Commits e Pull Requests

Este projeto segue o **Guia do Commit Amigão**.

📌 **Exemplo de commit:**
```sh
git commit -m "feat(clientes): adiciona validação ao criar cliente"
```

📌 **Padrão de Pull Request:**
- Descreva de forma clara as mudanças realizadas.
- Relacione a PR com uma issue (se aplicável).
- Inclua evidências de testes e funcionamento.

---

## 🔥 Desenvolvimento de Painel Administrativo

Caso seja necessário desenvolver um painel administrativo para este sistema, estima-se:

📌 **Tempo:** 2 a 3 meses
📌 **Equipe:** 3 desenvolvedores
📌 **Senioridade:** 1 pleno, 1 sênior e 1 júnior

O tempo e equipe podem variar conforme o escopo detalhado e requisitos adicionais.

---

📌 **Dúvidas?** Abra uma issue no repositório! 😊
