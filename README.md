# 📌 Projeto Backend - Arquitetura e Documentação

Este repositório contém o backend de um sistema desenvolvido com NestJS e TypeScript, seguindo princípios de arquitetura limpa. Ele inclui integração com um banco de dados relacional e um serviço de mensageria para processamento assíncrono.

## 📂 Estrutura de Pastas

```
📦 projeto-backend
 ┣ 📂 src
 ┃ ┣ 📂 modules
 ┃ ┃ ┣ 📂 clientes
 ┃ ┃ ┃ ┣ 📜 clientes.module.ts
 ┃ ┃ ┃ ┣ 📜 clientes.service.ts
 ┃ ┃ ┃ ┣ 📜 clientes.controller.ts
 ┃ ┃ ┃ ┣ 📜 clientes.repository.ts
 ┃ ┃ ┣ 📂 messaging
 ┃ ┃ ┃ ┣ 📜 messaging.module.ts
 ┃ ┃ ┃ ┣ 📜 messaging.service.ts
 ┃ ┃ ┃ ┣ 📜 messaging.processor.ts
 ┃ ┣ 📂 config
 ┃ ┣ 📂 common
 ┃ ┣ 📜 main.ts
 ┣ 📜 .eslintrc.js
 ┣ 📜 package.json
 ┣ 📜 README.md
```

## 🚀 Tecnologias Utilizadas

- **Node.js** (v18+)
- **NestJS** (v9+)
- **TypeScript**
- **TypeORM**
- **Banco de Dados PostgreSQL**
- **Mensageria Upstash**
- **Swagger para documentação da API**

## 🔧 Instalação e Configuração

### 1️⃣ Clonar o Repositório
```sh
git clone https://dev.azure.com/jhonatanlopes98/Teddy
cd projeto-backend
```

### 2️⃣ Instalar Dependências
```sh
npm install
```

### 3️⃣ Configurar o Banco de Dados
Utilizamos PostgreSQL. Configure o `.env` com os dados corretos:
```sh
DATABASE_URL=postgres://user:password@host:port/dbname
```

### 4️⃣ Configurar o Serviço de Mensageria
Utilizamos Upstash para a mensageria assíncrona. Configure o `.env` com:
```sh
UPSTASH_REDIS_URL=redis://default:password@host:port
```

### 5️⃣ Rodar as Migrações do Banco
```sh
npm run migration:run
```

### 6️⃣ Iniciar o Servidor
```sh
npm run start:dev
```

## 📑 Documentação da API
A documentação da API pode ser acessada pelo Swagger:
```
http://localhost:3000/api/docs
```

## ✅ Rodando os Testes
Para rodar os testes unitários:
```sh
npm test
```

Para rodar os testes com coverage:
```sh
npm run test:cov
```

## 📌 Padrão de Commit e Pull Request

Utilizamos o **Guia do Commit Amigão**. Exemplos de commits:
```sh
feat(clientes): adiciona endpoint para criação de clientes
fix(messaging): corrige envio de mensagens duplicadas
```

### Template de Pull Request
```
## O que foi feito?

## Como testar?

## Checklist
- [ ] Código testado manualmente
- [ ] Testes automatizados passaram
- [ ] Documentação atualizada (se necessário)
```

---

## 📊 Desenvolvimento de um Painel Administrativo
Caso seja necessário desenvolver um painel administrativo para este sistema, seguem as estimativas:

1. **Tempo Estimado:** 3 a 4 meses
2. **Quantidade de Desenvolvedores:** 2 a 3
3. **Senioridade:** 1 pleno, 1 sênior e, se possível, 1 júnior para suporte

Isso pode variar conforme o escopo exato do projeto, mas essa seria uma estimativa inicial baseada na complexidade do sistema atual. 🚀
