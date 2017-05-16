import React from 'react';

export default class ProductTable extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className="table table-hover">
        <thead className="thead-inverse">
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Price</th>
            <th>Available</th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map((product) =>
            <tr key={product.get('_id')}>
              <td>{product.get('name')}</td>
              <td>{product.get('type')}</td>
              <td>{product.get('price')}</td>
              <td>{product.get('available').toString()}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}
