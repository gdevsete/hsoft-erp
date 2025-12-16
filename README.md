# 🚀 HSOFT ERP - Sistema de Gestão de Clientes

> Um sistema ERP moderno e intuitivo para gestão completa de clientes, desenvolvido com React ⚛️

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Status](https://img.shields.io/badge/Status-Pronto_para_Produção-00944e?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

**[Ver Demo](#-como-rodar) • [Funcionalidades](#-o-que-o-sistema-faz) • [Tecnologias](#️-tecnologias-usadas)**

</div>

---

## 👨‍💻 Desenvolvedor

**Guilherme Oliveira**  
*Profissional Full Stack*

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com)

---

## 🎯 O que o sistema faz?

Imagine ter **todos os seus clientes organizados** em um só lugar, com:

- 📋 **Cadastro completo** - Nome, CPF/CNPJ, endereços, telefones, emails
- 🔍 **Busca inteligente** - Encontre qualquer cliente em segundos
- 📅 **Calendário bonito** - Selecione datas com poucos cliques
- 📱 **Interface moderna** - Design limpo e profissional
- ⚡ **Super rápido** - Tudo funciona instantaneamente

### ✨ Destaques

| Recurso | Descrição |
|---------|-----------|
| 🎨 **Design Premium** | Interface inspirada nos melhores sistemas ERP |
| 🔥 **6 Abas Organizadas** | Endereço, Telefone, Email, Complemento, Financeiro e Anexos |
| 🎯 **Filtros Poderosos** | Combine múltiplos filtros para encontrar exatamente o que procura |
| 📆 **Date Picker Custom** | Calendário interativo para seleção de datas |
| ✅ **Máscaras Automáticas** | CPF/CNPJ, telefone e CEP formatados automaticamente |

---

## 🛠️ Tecnologias Usadas

<table>
<tr>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="48" height="48" alt="React" />
<br>React
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="48" height="48" alt="JavaScript" />
<br>JavaScript
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="48" height="48" alt="CSS3" />
<br>CSS3
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="48" height="48" alt="HTML5" />
<br>HTML5
</td>
</tr>
</table>

**Principais bibliotecas:**
- ⚛️ React 18.2.0 - Interface moderna
- 🛣️ React Router DOM 6.21.0 - Navegação suave
- 🎭 React Input Mask 2.0.4 - Máscaras de entrada

---

## 📦 Como Rodar?

### Passo 1️⃣: Clone o Repositório

```bash
git clone https://github.com/seu-usuario/hsoft.git
cd hsoft
```

### Passo 2️⃣: Instale as Dependências

```bash
npm install
```

> ☕ Vai levar uns minutinhos... Aproveite para pegar um café!

### Passo 3️⃣: Execute o Projeto

```bash
npm start
```

### Passo 4️⃣: Abra no Navegador

```
🌐 http://localhost:3000
```

**Pronto! 🎉** O sistema já está rodando!

---

## 🚀 Deploy no Vercel

### Método Super Rápido (Recomendado)

1️⃣ **Suba seu código para o GitHub**

```bash
git add .
git commit -m "Deploy HSOFT ERP"
git push origin main
```

2️⃣ **Acesse [vercel.com](https://vercel.com)**

3️⃣ **Clique em "New Project"**

4️⃣ **Importe seu repositório do GitHub**

5️⃣ **Clique em "Deploy"**

✨ **É isso!** Seu sistema estará online em minutos!

### Variáveis de Ambiente (se necessário)

```env
REACT_APP_API_URL=https://sua-api.com
```

---

## 📸 Preview do Sistema

### 🏠 Tela Principal
Lista de clientes com filtros avançados

### ➕ Cadastro de Cliente
Formulário organizado em 6 abas intuitivas

### 📅 Calendário Interativo
Seleção de datas moderna e responsiva

---

## 🎨 Paleta de Cores

```css
🟢 Verde Principal: #00944e
🔵 Azul HSOFT: #1e4d8b  
⚪ Background: #eeeeee
🟢 Botão Incluir: #28a745
🔵 Botão Imprimir: #007bff
```

---

## 📂 Estrutura de Pastas

```
hsoft/
│
├── 📁 public/
│   └── index.html
│
├── 📁 src/
│   ├── 📁 components/
│   │   ├── Header.js          # 🎯 Cabeçalho do sistema
│   │   ├── ClientList.js      # 📋 Lista de clientes
│   │   ├── ClientForm.js      # ✏️ Formulário de cadastro
│   │   └── DatePicker.js      # 📅 Calendário customizado
│   │
│   ├── App.js                 # 🏠 Componente principal
│   ├── index.js               # 🚀 Ponto de entrada
│   └── index.css              # 🎨 Estilos globais
│
├── package.json               # 📦 Dependências
└── README.md                  # 📖 Você está aqui!
```

---

## 🎮 Como Usar?

### 1. Visualizar Clientes
- Abra o sistema e veja a lista de 15 clientes já cadastrados
- Use os filtros para encontrar quem você procura

### 2. Buscar Cliente
- Clique no dropdown "Cliente" e selecione
- Ou use os filtros de Estado, Situação, Email, etc.

### 3. Cadastrar Novo Cliente
- Clique no botão verde **"Incluir"**
- Preencha os dados básicos
- Navegue pelas 6 abas e adicione mais informações
- Clique em **"Salvar"**

### 4. Selecionar Data
- Clique em qualquer campo de data
- Escolha no calendário que aparece
- Ou digite manualmente no formato DD/MM/AAAA

---

## 🌟 Funcionalidades Detalhadas

<details>
<summary>📋 <b>Gestão de Clientes</b></summary>

- ✅ 15 clientes pré-cadastrados
- ✅ Busca por código, nome ou CNPJ
- ✅ Filtros múltiplos simultâneos
- ✅ Tabela organizada e responsiva
- ✅ Ações de visualizar, editar e excluir

</details>

<details>
<summary>✏️ <b>Formulário Multi-Abas</b></summary>

**Aba Endereço**
- Múltiplos endereços por cliente
- CEP com busca automática
- Tipo (Comercial, Residencial)

**Aba Telefone**
- Vários telefones por cliente
- Ramal e departamento
- Tipo (WhatsApp, Fixo, Celular)

**Aba Email**
- Múltiplos emails
- Opções: Nota Fiscal, Boleto, Venda, Orçamento

**Aba Complemento**
- Informações adicionais
- Observações gerais

**Aba Financeiro**
- Dados tributários
- Regime de tributação

**Aba Anexos**
- Upload de documentos
- Visualização de PDFs

</details>

<details>
<summary>🔍 <b>Sistema de Filtros</b></summary>

Filtre clientes por:
- 👤 Cliente (dropdown)
- 👔 Vendedor
- 🏢 Empresa
- 📍 Estado/Cidade
- ✅ Situação (Ativo/Inativo)
- 📧 Email
- 📱 Celular
- 📊 Grupo (Varejo/Atacado)
- 🗺️ Rota (Nordeste/Sul/Norte)
- 👥 Tipo (Física/Jurídica)

</details>

---

## 🐛 Problemas Comuns

### ❌ Erro ao instalar dependências

```bash
# Limpe o cache e tente novamente
npm cache clean --force
npm install
```

### ❌ Porta 3000 já está em uso

```bash
# Use outra porta
PORT=3001 npm start
```

### ❌ Página em branco no deploy

- Verifique se o `package.json` tem o script de build
- No Vercel, use: `npm run build` como comando de build

---

## 📊 Dados de Exemplo

O sistema vem com **15 clientes fictícios** para demonstração:

- 🏢 Empresas de diversos segmentos
- 📍 Localizações em 6 estados diferentes
- 👥 Mix de pessoas físicas e jurídicas
- ✅ Alguns ativos, outros inativos
- 📧 Dados de contato completos

---

## 🔮 Próximas Melhorias

- [ ] 🔐 Sistema de login e autenticação
- [ ] 💾 Integração com banco de dados
- [ ] 📊 Dashboard com gráficos
- [ ] 📱 Versão mobile nativa
- [ ] 🌙 Modo escuro
- [ ] 🔔 Notificações em tempo real
- [ ] 📤 Exportar relatórios (PDF/Excel)
- [ ] 🤖 Backup automático

---

## 📝 Scripts Disponíveis

```bash
npm start        # 🚀 Inicia servidor de desenvolvimento
npm run build    # 📦 Cria versão otimizada para produção
npm test         # 🧪 Executa testes
npm run eject    # ⚠️ Ejeta configurações (não recomendado)
```

---

## 🤝 Contribuindo

Quer melhorar o HSOFT? Siga estes passos:

1. 🍴 Fork o projeto
2. 🌿 Crie uma branch (`git checkout -b feature/MinhaFeature`)
3. 💾 Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. 📤 Push para a branch (`git push origin feature/MinhaFeature`)
5. 🎉 Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo `LICENSE` para mais detalhes.

---

## 💬 Contato

**Guilherme Oliveira** - *Profissional Full Stack*

- 📧 Email: seu-email@exemplo.com
- 💼 LinkedIn: [linkedin.com/in/seu-perfil](https://linkedin.com)
- 🐙 GitHub: [@seu-usuario](https://github.com/seu-usuario)

---

<div align="center">

### ⭐ Se este projeto te ajudou, deixe uma estrela!

**Desenvolvido com 💚 por Guilherme Oliveira**

[⬆ Voltar ao topo](#-hsoft-erp---sistema-de-gestão-de-clientes)

</div>

## 🔧 Instalação

1. Instale as dependências:
```bash
npm install
```

## ▶️ Como executar

Execute o projeto em modo de desenvolvimento:
```bash
npm start
```

O sistema será aberto automaticamente no navegador em [http://localhost:3000](http://localhost:3000)

## 📦 Build para produção

Para criar uma versão otimizada para produção:
```bash
npm run build
```

## 🎨 Estrutura do Projeto

```
hsoft/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js          # Barra de navegação superior
│   │   ├── Header.css
│   │   ├── ClientList.js      # Tela de listagem de clientes
│   │   ├── ClientList.css
│   │   ├── ClientForm.js      # Formulário de cadastro
│   │   └── ClientForm.css
│   ├── App.js                 # Componente principal
│   ├── App.css
│   ├── index.js               # Ponto de entrada
│   └── index.css
├── package.json
└── README.md
```

## 🎯 Funcionalidades Implementadas

### Tela de Listagem
- Busca por razão social, nome fantasia ou CNPJ/CPF
- Filtros por estado/cidade, situação, grupo, rota e tipo
- Visualização em tabela organizada
- Ações de visualizar, editar e excluir
- Botão para incluir novos clientes
- Botão de impressão

### Formulário de Cadastro
- **Dados Básicos**: Código, CPF/CNPJ, RG/IE, contribuinte, regime tributário, status
- **Aba Telefone**: Adicionar múltiplos telefones com ramal, tipo, departamento e contato
- **Aba Endereço**: Adicionar múltiplos endereços com CEP, bairro, complemento
- **Aba E-mail**: Adicionar múltiplos e-mails com permissões (nota, boleto, venda, orçamento)
- **Aba Complemento**: Vendedor, tabela de preço, grupo, transportadora, rota, datas, inscrições
- **Aba Financeiro**: Configurações financeiras
- **Aba Anexos**: Upload e gerenciamento de arquivos (PDFs, documentos)

### Design
- Header com logo HSOFT e navegação completa
- Cores exatas do sistema original
- Botões com estados hover
- Formulários com máscaras de entrada (CPF/CNPJ, telefone, CEP)
- Tabelas responsivas com ações inline
- Tabs para organização de conteúdo

## 🛠️ Tecnologias Utilizadas

- **React 18.2** - Biblioteca JavaScript para interface
- **React Router DOM 6.21** - Navegação entre páginas
- **React Input Mask 2.0** - Máscaras para inputs (CPF, telefone, CEP)
- **CSS3** - Estilização pura sem frameworks

## 🎨 Paleta de Cores

- **Verde Principal**: #00944e (botões de ação positiva)
- **Verde Escuro**: #007a3d (hover)
- **Azul**: #007bff (botões secundários)
- **Cinza Claro**: #f8f9fa (backgrounds)
- **Cinza Médio**: #dee2e6 (bordas)
- **Branco**: #ffffff (cards e modais)

## 📱 Responsividade

O sistema é totalmente responsivo e se adapta a diferentes tamanhos de tela:
- Desktop (>1400px)
- Tablet (768px - 1400px)
- Mobile (<768px)

## 🔒 Próximas Funcionalidades (Sugeridas)

- Integração com backend/API REST
- Autenticação e controle de acesso
- Validação completa de formulários
- Mensagens de sucesso/erro
- Confirmação antes de excluir
- Paginação na listagem
- Exportação para Excel/PDF
- Dashboard com gráficos
- Módulos Comercial, Financeiro, Fiscal e Relatórios

## 📝 Licença

Este projeto foi desenvolvido como réplica fiel da interface HSOFT.

---

Desenvolvido com ❤️ usando React
