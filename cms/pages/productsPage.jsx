import React from 'react';

import ProductTable from '../components/productTable';

export default class ProductsPage extends React.PureComponent {
  constructor(props) {
    console.log(props);
    super(props)
  }

  render() {
    return (
      <div className="products-page-container">
        <ProductTable products={this.props.productList.get('products')} />
      </div>
    )
  }
}
