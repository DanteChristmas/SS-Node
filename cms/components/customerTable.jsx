import React from 'react';

export default class CustomerTable extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className="table table-hover">
        <thead className="thead-inverse">
          <tr>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {this.props.customers.map((customer) =>
            <tr key={customer.get('_id')}>
              <td>{customer.get('last_name')}</td>
              <td>{customer.get('first_name')}</td>
              <td>{customer.get('email')}</td>
              <td>{customer.get('zip_code')}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}
