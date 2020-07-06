import axios from "axios";

// A baseURL muda se estiver em um dipositivo fisico
// olhar o endereço na aba do expo quando abrir
const api = axios.create({
  //mudar de ip japa e vini
<<<<<<< HEAD
  baseURL: "http://192.168.0.53:3333",
=======
  baseURL: "http://10.0.0.200:3333",
>>>>>>> 6175107537f9f2662388c6a5bb9b7cbc2556b257
});

export default api;
