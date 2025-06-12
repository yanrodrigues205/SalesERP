# ERP de Vendas

Está é uma aplicação para manipulação de um sistema back-end, com interfaces amigáveis e responsivas, visando a experiência do usuário.

---

## 📦 Tecnologias Utilizadas

- [React](https://react.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Bootstrap 5](https://getbootstrap.com/)
- Context API (para autenticação ou estado global)
- Axios (para consumo de APIs)
- [Socket.IO](https://socket.io/) – Comunicação em tempo real
- [SweetAlert2](https://sweetalert2.github.io/) – Alertas modernos e estilizados
- [react-data-table-component](https://react-data-table-component.netlify.app/) – Tabelas interativas com paginação e busca

---

## 📁 Estrutura de Pastas

```plaintext
src/
│
├── assets/        # Imagens, fontes e outros arquivos estáticos
├── components/    # Componentes reutilizáveis (ex: Botão, Modal)
├── contexts/      # Estado global usando React Context (ex: AuthContext)
├── hooks/         # Hooks personalizados (ex: useAuth, useWindowSize)
├── layouts/       # Estrutura de layout (ex: AdminLayout, AuthLayout)
├── pages/         # Páginas acessadas por rotas (Home, Login, Dashboard)
├── routes/        # Configuração de rotas com React Router
├── services/      # Lógica de acesso à API (ex: authService.js)
├── styles/        # Estilos globais, SCSS ou customizações do Bootstrap
├── utils/         # Funções utilitárias (ex: formatDate, masks)
├── App.jsx        # Componente raiz com integração de rotas
└── main.jsx       # Ponto de entrada da aplicação
