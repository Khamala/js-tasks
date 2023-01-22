import "./styles/normalize.css";
import "./styles/index.css";

import productsApi from "./requests/products";
import usersApi from "./requests/users";
import postsApi from "./requests/posts";

import renderService from "./services/markupService";

// Завдання 1
const renderProducts = async () => {
  const listProducts = document.querySelector("#allProducts");
  const data = await productsApi.getProducts();
  listProducts.innerHTML = renderService.renderProductsMarkup(data.products);
};

// renderProducts();

// Завдання 2
const renderProductById = () => {
  const form = document.querySelector("#singleProductForm");
  const div = document.querySelector('#singleProduct');
  form.addEventListener ('submit', async (event) => { 
    event.preventDefault()
    const productId = event.target.elements.id.value;
    
    const product = await productsApi.getProductById(productId);
    const productMarkUp = renderService.renderProductByIdMarkup(product);
    div.innerHTML = productMarkUp;


  
  });

}
renderProductById()
// Завдання 3

// Завдання 4

// Завдання 5

// productsApi.searchProductsByCategory('smartphones');
// productsApi.filterProducts(5, 10, ['title', 'price']);
// productsApi.getCategories();
// productsApi.getProductsByLastCategory();
// productsApi.addProduct();
// productsApi.updateProduct(10);
// productsApi.deleteProduct(1);

// usersApi.getUsers();
// usersApi.getUserById(10);
// usersApi.getUsersByName('Med');
// usersApi.getCartsByUserId(1);
// usersApi.getPostsByUserId(1);
// usersApi.getTodosByUserId(1);
// usersApi.addUser();

// postsApi.getPosts();
// postsApi.getPostById(10);
// postsApi.getPostByContentKey('dreams');
// postsApi.getPostComments(5);
// postsApi.addPost();
// postsApi.updatePost(1);
// postsApi.deletePost(15);
