import axios from "axios";
const url = "http://localhost:8080/api/v1/produtos";
export const listaDeProdutos = () => axios.get(url);
export const upload = (formData) => axios.post(url, formData);
export const cadastroDeProduto = (produto) => axios.post(url, produto);
