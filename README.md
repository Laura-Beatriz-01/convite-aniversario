# Landing Page para Festa Infantil

Este projeto é uma landing page interativa e responsiva criada para convidar pessoas para uma festa infantil. A página inclui informações sobre o evento, redirecionamentos para Google Maps e WhatsApp, além de um design leve e amigável.

## Estrutura do Projeto

- **public/index.html**: Estrutura HTML da landing page com título, nome do aniversariante, data, horário, local da festa, botões para Google Maps e WhatsApp, sugestões de presentes e uma mensagem de agradecimento.
- **src/assets**: Diretório para imagens, ícones e outros recursos estáticos utilizados na página.
- **src/components/InvitationCard.js**: Componente que renderiza o cartão de convite, permitindo personalização da saudação, nome do aniversariante, idade e outros detalhes da festa.
- **src/styles/main.css**: Estilos da landing page, implementando layout responsivo, tipografia amigável, paleta de cores suaves e animações suaves com transições e efeitos de hover.
- **src/scripts/main.js**: Lógica JavaScript da página, incluindo redirecionamentos para Google Maps e WhatsApp, além de animações simples.
- **src/utils/index.js**: Funções utilitárias para manipulação de dados ou implementação de funcionalidades específicas, como codificação de mensagens para o WhatsApp.
- **package.json**: Configuração do npm, listando as dependências do projeto e scripts para facilitar o desenvolvimento.

## Instalação

1. Clone o repositório:
   ```
   git clone <URL do repositório>
   ```
2. Navegue até o diretório do projeto:
   ```
   cd landing-page-festa-infantil
   ```
3. Instale as dependências:
   ```
   npm install
   ```

## Uso

Para iniciar o projeto, utilize o seguinte comando:
```
npm start
```

Acesse a landing page em seu navegador através do endereço `http://localhost:3000`.

## Funcionalidades

- Redirecionamento para Google Maps para facilitar a localização do evento.
- Botão para enviar mensagens via WhatsApp.
- Cartão de convite personalizável.
- Design responsivo e amigável para todos os dispositivos.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.