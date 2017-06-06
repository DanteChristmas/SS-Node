import React from 'react'

import ProductForm from '../components/productForm'

export default class CreateProduct extends React.PureComponent {

  render() {
      return (
        <div className="create-product-page-container">
          <ProductForm product={this.props.product} />
        </div>
      )
  }
}
