import React from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter, Match, Miss, withRouter } from 'react-router-dom';

import * as actionCreators from './actions/root-actions';

import ProductsPage from './pages/productsPage';
import CustomersPage from './pages/customersPage';
import Nav from './components/nav';


export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Route exact path="/admin" component={(props, state, params) => <ProductsPage productList={this.props.productList} />} />
          <Route path="/admin/products" component={(props, state, params) => <ProductsPage productList={this.props.productList} />} />
          <Route path="/admin/customers" component={(props, state, params) => <CustomersPage customerList={this.props.customerList} />} />
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state) {
  return {
    productList: state.get('productList'),
    customerList: state.get('customerList')
  }
}

export const AppContainer = connect(mapStateToProps, actionCreators)(App);
