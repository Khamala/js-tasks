import apiInstance from "../services/api.js";

// PRODUCTS

const getProducts = async () => {
  return (await apiInstance.get("/products")).data;
};

const getProductById = async (id) => {
  return (await apiInstance.get(`/products/${id}`)).data;
};

const getCategories = async () => {};

const searchProductsByCategory = async () => {};

const filterProducts = async () => {};

const getProductsByLastCategory = async () => {};
const addProduct = async () => {};

const updateProduct = async () => {};

const deleteProduct = async () => {};

export default {
  getProducts,
  getProductById,
  searchProductsByCategory,
  filterProducts,
  getCategories,
  getProductsByLastCategory,
  addProduct,
  updateProduct,
  deleteProduct,
};
