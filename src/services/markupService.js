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

const renderProductByIdMarkup = ({ brand, title, price }) => {
  return `<div>
          <h3>${title}</h3>
          <p>${brand}</p>
          <p>${price}</p>
</div>`
};

export default {
  renderProductsMarkup,
  renderProductByIdMarkup,
};
