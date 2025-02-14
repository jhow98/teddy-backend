# 📌 Projeto Backend - Arquitetura e Documentação

Este repositório contém o backend de um sistema desenvolvido com NestJS e TypeScript, seguindo princípios de arquitetura limpa. Ele inclui integração com um banco de dados relacional, um serviço de mensageria para processamento assíncrono e um módulo de **observabilidade**, garantindo **monitoramento de métricas e logs**.

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
 ┃ ┃ ┃ ┣ 📂 tests
 ┃ ┃ ┃ ┃ ┣ 📜 clientes.service.spec.ts
 ┃ ┃ ┃ ┃ ┣ 📜 clientes.controller.spec.ts
 ┃ ┃ ┣ 📂 messaging
 ┃ ┃ ┃ ┣ 📜 messaging.module.ts
 ┃ ┃ ┃ ┣ 📜 messaging.service.ts
 ┃ ┃ ┃ ┣ 📜 messaging.processor.ts
 ┃ ┣ 📂 config
 ┃ ┣ 📂 common
 ┃ ┃ ┣ 📂 logger
 ┃ ┃ ┃ ┣ 📜 logger.service.ts
 ┃ ┃ ┣ 📂 metrics
 ┃ ┃ ┃ ┣ 📜 metrics.module.ts
 ┃ ┃ ┃ ┣ 📜 metrics.service.ts
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
- **Mensageria Upstash (Redis)**
- **BullMQ para filas**
- **Swagger para documentação da API**
- **Observabilidade (Prometheus, Winston, Bull Board)**

## 🔧 Instalação e Configuração

### 1️⃣ Clonar o Repositório
```sh
git clone https://dev.azure.com/jhonatanlopes98/Teddy
```

### 2️⃣ Instalar Dependências
```sh
npm install
```

### 3️⃣ Iniciar o Servidor
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

## 📊 Observabilidade e Monitoramento

Este projeto implementa **observabilidade** com **monitoramento de métricas e logs**.

### 🔹 Logs estruturados
Utilizamos **Winston** para capturar logs estruturados e armazená-los localmente.

- Os logs são gravados na pasta `logs/`
- Níveis de log: `info`, `warn`, `error`, `debug`

### 🔹 Métricas com Prometheus
Utilizamos **Prometheus** para expor métricas no endpoint `/metrics`.

- **Métricas padrão** (CPU, memória, event loop)
- **Métrica personalizada**: `clientes_criados_total` (quantidade de clientes criados)

#### 📌 Como acessar as métricas

1. **Iniciar o servidor**
   ```sh
   npm run start
   ```

2. **Acessar as métricas no navegador ou via `curl`**
   ```sh
   curl http://localhost:3000/metrics
   ```

3. **Exemplo de saída**
   ```txt
   # HELP clientes_criados_total Número total de clientes criados
   # TYPE clientes_criados_total counter
   clientes_criados_total 5
   ```

---

### 🔹 Monitoramento de Filas (BullMQ)
Este projeto utiliza BullMQ para gerenciar filas de mensagens de forma eficiente.

#### 📌 Como acessar o Bull Board (monitoramento das filas)

1. **Iniciar o servidor**
   ```sh
   npm run start
   ```

2. **Acessar as métricas no navegador ou via `curl`**
   ```
   http://localhost:3000/bull-board/queue/clientesQueue
   ```
   
   No painel, você pode visualizar tarefas pendentes, em andamento e concluídas.

---

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
