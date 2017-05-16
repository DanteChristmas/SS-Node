import React from 'react';

export default class CustomersPage extends React.PureComponent {
  constructor(props) {
    console.log(props);
    super(props)
  }

  render() {
    return (
      <div className="customers-page-container">
        <h1>Customers Page</h1>
      </div>
    )
  }
}
