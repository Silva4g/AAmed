import axios from "axios";

// A baseURL muda se estiver em um dipositivo fisico
// olhar o endereço na aba do expo quando abrir
const api = axios.create({
  baseURL: "http://192.168.0.53:3333"
});

export default api;
