import axios from "axios";

// A baseURL muda se estiver em um dipositivo fisico
// olhar o endereço na aba do expo quando abrir
const api = axios.create({
  //mudar de ip japa e vini
  baseURL: "http://192.168.15.6:3333",
});

export default api;
