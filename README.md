# CONVICTI Analytics

Aplicação frontend utilizando Vue que permita ao usuário acessar e visualizar estatísticas de uso de uma aplicação. A visualização dos dados estatísticos dependerá do nível de permissão do usuário. Desenvolvida para um desafio técnico de Front-End.

## Capturas de tela e demonstração

#### Fluxo de funcionalidades e telas - Desktop:

https://github.com/user-attachments/assets/604ce7d9-d12c-42e0-8206-d6b8f027957a

#### Fluxo de funcionalidades e telas - Mobile:

https://github.com/user-attachments/assets/56ad2731-de00-498b-9140-0688b8b75c66

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Vue.js 3**
- **Vite**
- **TypeScript**
- **TailwindCSS**
- **Axios**
- **Toastify**
- **Pinia**

## 📂 Estrutura do Projeto

```plaintext
📂 convicti-stats
├── 📂 src
│   ├── 📂 api  # Requisições para a API
│   ├── 📂 assets      # Imagens e arquivos estáticos
│   ├── 📂 components  # Componentes reutilizáveis
│   ├── 📂 composables # Lógicas reutilizáveis de alguns componentes ou páginas
│   ├── 📂 views       # Páginas principais
│   ├── 📂 router      # Rotas da aplicação
│   ├── 📂 services    # Requisições HTTP
│   ├── 📂 store       # Gerenciamento de estado com o Pinia
│   ├── 📂 utils       # Funções úteis para a aplicação
│   ├── App.vue        # Componente raiz
│   ├── main.ts        # Ponto de entrada do Vue
├── 📜 package.json
├── 📜 vite.config.ts
└── ...
```

## 🔧 Como Rodar o Projeto

Antes de tudo, você deve saber que para conseguir rodar o projeto precisa ter o Node.js instalado em sua máquina. Se quiser saber mais, [visualize a documentação aqui](https://nodejs.org/pt). 

Node.js instalado, então bora:

Siga os passos abaixo para rodar o projeto localmente:

1. **Clone este repositório:**
   ```sh
   git clone https://github.com/SamillyNunes/convicti-stats.git
   ```

2. **Acesse a pasta do projeto:**
   ```sh
   cd convicti-stats
   ```

3. **Instale as dependências:**
   ```sh
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```sh
   npm run dev
   ```

O projeto estará disponível em `http://localhost:5173/`.

- ⚠️ Atenção: Aqui você deve saber que, para que a integração com o backend funcione normalmente, é necessário que, caso tenha acesso, implemente a permissão das requisições vinda desta origem para não ter **problemas com o CORS**. Caso isso não seja possível, recomendo o uso [desta extensão do Google Chrome](https://chromewebstore.google.com/detail/digfbfaphojjndkpccljibejjbppifbc?utm_source=item-share-cb) ou uma similar que possa ativar o CORS na página apenas enquanto roda o projeto.  

## 📌 Funcionalidades Implementadas

- ✅ **Login**
- ✅ **Logout**
- ✅ **Rotas privadas (acesso a Dashboard e Configurações apenas para usuários logados)**
- ✅ **Permissões por usuário**
- ✅ **Busca e cálculos de informações de Downloads, Avaliações, Erros, Feedbacks, e Novas Funcionalidades**
- ✅ **Criação, atualização e apresentação de informações de Perfil e Usuário**
- ✅ **Apresenta informação quando não há nenhum item no backend**
- ✅ **Consumo de API com Axios**
- ✅ **Estilização com TailwindCSS**
- ✅ **Notificações locais em casos de erros e sucessos**
- ✅ **Responsividade em telas desde mobile até desktops**


