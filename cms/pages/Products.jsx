import React from 'react';

import ProductTable from '../components/productTable';
import Pager from '../components/pager';

export default class ProductsPage extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="products-page-container">
        <ProductTable products={this.props.productList.get('products')} />
        <Pager meta={this.props.productList.get('meta')} setPage={this.props.setPage} />
      </div>
    )
  }
}
