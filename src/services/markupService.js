const renderProductsMarkup = (products) => {
  return products
    .map(({ brand, title, price }) => {
      return ` <li>
          <h3>${title}</h3>
          <p>${brand}</p>
          <p>${price}</p>
        </li>`;
    })
    .join("");
};

const renderProductByIdMarkup = () => {};

export default {
  renderProductsMarkup,
  renderProductByIdMarkup,
};
