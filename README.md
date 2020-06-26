# AAMed

# INDICE
 - [Instalações necessarias](#instalacoes) - todas as aplicações usadas na nossa plataforma.
 - [Executar a plataforma](#codigos) - Como executar nossa plataforma.
 
# IMAGENS
  EM BREVE.


# Instalações
  - [Node.js](https://nodejs.org/en/) versão acima de 10.
  - Recomendamos instalar o editor [VSCode](https://code.visualstudio.com/download).
  - Instalar o [mongodb](https://www.mongodb.com/download-center) para a execução do banco de dados.
  - E instalar o react native junto com o expo globalmente.
  ``` sh
  $ npm install -g expo-cli
  ```
  - Recomendamos o [yarn](https://classic.yarnpkg.com/pt-BR/docs/install/#windows-stable) mas pode utilizar o npm para a execução de codigo.
  - Pelo prompt de comando entre na pasta backend, web e mobile e execute o comando a baixo em cada pasta respectivamente.
  ```sh
  $ yarn install
  ```
  ou 
  ```
  $ npm install
  ```

  ## Web
  - Para fazer os testes no sistema da web (front-ent) é necessário apenas um comando
  - Dentro da pasta web:
  ```
  $ C:pasta-que-esta-o-projeto/web
  ```
  - Insira este comando
  ```
  $ yarn start
  ```
  ou
  ```
  $ npm start
  ```
  - Pronto, agora é só esperar o navegador executar a página

  ## Backend
  - Para o login, cadastro e a pagina de hospital logado funcione, é preciso que o servidor node esteja sendo executado.
  - Dentro da pasta backend:
  ```
  $ C:pasta-que-esta-o-projeto/backend
  ```
  - Insira este comando
  ```
  $ node src/index.js
  ```
  - Observação: Para fazer todas as funcionalidades do backend, é necessário o mongodb instalado na sua máquina e o nome do banco deve ser "tcc"

  ## Mobile
  - Aqui é um pouco diferente pois você deve ter o expo instalado globalmente ( seiga o guia de instalações acima)
  - Dentro da pasta mobile
  ```
  $ C:pasta-que-esta-o-projeto/mobile
  ```
  - Insira este comando
  ```
  $ yarn start
  ```
  ou
  ```
  $ npm start
  ```
  - O navegador irá abrir uma página que será o console da aplicação mobile
  - Instale o Expo em seu dispositivo móvel
  - Depois de instalado, abra e scaneie o QR CODE no navegador
  - Utilize o app mobile em seu prórpio dispositivo
  - Caso ocorra algum erro, trocar o endereço de IP do arquivo api.js para o que for apresentado na página do expo ou o IP da máquina. ex: http://192.168...:3333
  
  ## Dependencias
  - react
  - react icons
  - react input mask
  - react responsive carousel
  - react router dom
  - axios
  - jquery
  - cpf-cnpj-validator
  - cep-promisse
  - nodemon
  - multer
  - bcryptjs
  - aws-sdk
  - cors
  - dotnev
  - jsonwebtoken
  - morgan
  - mongoose
  - react-native
  - react-native-gesture-handler
  - react-native-naps
  - react-native-reanimeted
  - react-native-safe-area-context
  - react-native-screens
