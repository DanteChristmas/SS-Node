import React from 'react';

import CustomerTable from '../components/customerTable';

export default class CustomersPage extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="customers-page-container">
        <CustomerTable customers={this.props.customerList.get('customers')} />
      </div>
    )
  }
}
