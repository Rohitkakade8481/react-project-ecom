import axios from "axios";

const api = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});


export const getProducts = () => {
  return api.get("/products");
};


export const getProductById = (id) => {
  return api.get(`/products/${id}`);
};

export const getCategories = () => {
  return api.get("/categories");
};

export const getProductsByCategory = (id) => {
  return api.get(`/categories/${id}/products`);
};

export default api;