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

const renderProductByIdMarkup = ({ brand, title, description, price }) => {
	const brandRow = brand ? `<p>${brand}</p>` : "";
	return `<div>
          <h3>${title}</h3>
		  ${brandRow}
          <p>${description}</p>
          <p>${price}</p>
</div>`;
};

export default {
	renderProductsMarkup,
	renderProductByIdMarkup,
};
