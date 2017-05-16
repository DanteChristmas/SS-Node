import React from 'react';

export default class ProductsPage extends React.PureComponent {
  constructor(props) {
    console.log(props);
    super(props)
  }

  render() {
    return (
      <div className="products-page-container">
        <h1>This is the app right here.</h1>
        <p>This is a p tag</p>
        <ul>
        {this.props.productList.get('products').map((product) =>
          <li key={product.get('_id')}>{product.get('name')}</li>
        )}
        </ul>
      </div>
    )
  }
}
