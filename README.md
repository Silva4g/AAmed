<h3 align="center">
    <img alt="logo" title="#logo" width="150px" src=".github/icon.png">
</h3>

<h3 align="center">AAMED - NODE, REACT, REACT NATIVE</h3>

<div align="center">  
  <a href="https://github.com/Silva4g/TCC/blob/master/LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen" />
  </a>
</div>

---

### 💻 Tecnologias utilizadas 
- [Node](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

---

### 🚧 Instalações
  - Clone o repositório:

  ```bash
  $ git clone https://github.com/Silva4g/TCC.git
  ```
  - [Node.js](https://nodejs.org/en/) versão acima de 10.
  - Recomendamos instalar o editor [VSCode](https://code.visualstudio.com/download).
  - Instalar o [MongoDB](https://www.mongodb.com/download-center) para a execução do banco de dados.
  - Instalar o react native junto com o expo globalmente.
  ``` sh
  $ npm install -g expo-cli
  ```
  - Recomendamos o [yarn](https://classic.yarnpkg.com/pt-BR/docs/install/#windows-stable) mas pode utilizar o npm para a execução de código.
  - Pelo prompt de comando entre na pasta backend, web e mobile e execute o comando a baixo em cada pasta respectivamente.
  ```sh
  $ yarn install
  ```
  ou 
  ```
  $ npm install
  ```
 
  ---

  ### ⏯ Executando a aplicação

  #### Backend

  Para o login, cadastro e a página de gerenciamento do hospital funcione, é preciso que o servidor Node esteja sendo executado.
  Dentro da pasta backend:
  ```
  $ C:pasta-que-esta-o-projeto/backend
  ```
  Insira este comando
  ```
  $ node src/index.js
  ```
  Observação: Para fazer todas as funcionalidades do backend, é necessário o mongodb instalado na sua máquina e o nome do banco deve ser "tcc"

  #### Web

  Para fazer os testes no sistema da web (front-ent) é necessário apenas um comando
  dentro da pasta web:
  ```
  $ C:pasta-que-esta-o-projeto/web
  ```
   Insira este comando
  ```
  $ yarn start
  ```
  ou
  ```
  $ npm start
  ```
  Pronto, agora é só esperar o navegador executar a página

  #### Mobile

  Aqui é um pouco diferente pois você deve ter o EXPO instalado globalmente ( siga o guia de instalações acima)
  Dentro da pasta mobile
  ```
  $ C:pasta-que-esta-o-projeto/mobile
  ```
  Insira este comando
  ```
  $ yarn start
  ```
  ou
  ```
  $ npm start
  ```
  O navegador irá abrir uma página que será o console da aplicação mobile
  Instale o Expo em seu dispositivo móvel
  Depois de instalado, abra e scaneie o QR CODE no navegador
  Utilize o app mobile em seu prórpio dispositivo
  Caso ocorra algum erro, trocar o endereço de IP do arquivo api.js para o que for apresentado na página do expo ou o IP da máquina. ex: http://192.168...:3333

  ---

  ### ✋ Dependências

  #### Backend

  - aws-sdk
  - axios
  - bcryptjs
  - cep-promise
  - cookie-parser
  - cors
  - dotenv
  - express
  - express-fileupload
  - jsonwebtoken
  - mongoose
  - morgan
  - multer
  - multer-s3
  - nodemailer
  - nodemon
  - socket.io

  #### Web

  - axios
  - cep-promise
  - cpf-cnpj-validator
  - jquery
  - react-bootstrap
  - react-dom
  - react-router-dom
  - react-scripts
  - react-icons
  - react-input-mask
  - react-responsive-carousel
  - react-router-dom
  - react-slideshow-image
  - socket.io-client
  - styled-components

  #### Mobile

  - axios
  - expo
  - expo-font
  - expo-linear-gradient
  - expo-location
  - formik
  - gerador-validador-cpf
  - moment
  - react-dom
  - react-native-animatable
  - react-native-maps
  - react-native-maps-directio
  - react-native-masked-text
  - react-native-reanimated
  - react-native-safe-area-context
  - react-native-screen
  - react-native-vector-icons
  - toggle-switch-react-native
  - socket.io-client
  - styled-components
  
---

### 🔒 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
