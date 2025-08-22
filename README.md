# 📝 Lista de Tarefas — Next.js 15 + Jest + Testing Library

Projeto desenvolvido para colocar em prática conceitos de **testes unitários** em **Next.js 15 (App Router)** com **TypeScript**.

O objetivo é implementar e testar funcionalidades reais com foco em **componentes reutilizáveis**, **Server Components** e **hooks personalizados**.

---

## 🚀 Tecnologias utilizadas
- [Next.js 15](https://nextjs.org/) — App Router + TypeScript
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/) — Test Runner
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) — Testes de UI
- Conventional Commits — Padrão para mensagens de commit

---

## 📂 Estrutura do projeto

app/
└── page.tsx

components/
└── NovaTarefa.tsx

hooks/
└── useContadorDeTarefas.ts

lib/
└── tarefas.ts

tests/
├── NovaTarefa.test.tsx
├── useContadorDeTarefas.test.ts
└── page.test.tsx


---

## 📌 Funcionalidades
- ✅ Exibir lista de tarefas mockada (simulação de API local)
- ✅ Adicionar nova tarefa via formulário controlado
- ✅ Contar tarefas atuais com hook `useContadorDeTarefas`
- ✅ Testes unitários para:
  - Componente `<NovaTarefa />`
  - Hook `useContadorDeTarefas`
  - Renderização da página `app/page.tsx`

---

## 🧪 Testes

Foram utilizados **Jest** e **Testing Library** para garantir:
- Renderização correta dos elementos
- Validação do formulário
- Submissão de novas tarefas
- Valores retornados pelo hook
- Renderização da página com lista inicial

Rodando os testes:
```bash
# executar todos os testes
npm test
```

---

## 📦 Como rodar o projeto

1- Clonar o repositório
````bash
git clone https://github.com/ValfranJr/Task-List
cd Task-List
````
2- Instalar dependências

````bash
npm install
# ou
pnpm install
````

3- Rodar em modo desenvolvimento

````bash
npm run dev
````

4- Visualizando o projeto no navegador

Abrir o navegador em http://localhost:3000

## 📝 Como rodar os testes
 Após a instalação dos pacotes, rodar os testes é simples:

1- Rodar o projeto em modo desenvolvimento
````bash
npm run dev
````

2- Rodar os testes
````bash
npm test
````

---