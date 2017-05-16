import React from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter, Match, Miss, withRouter } from 'react-router-dom';

import * as actionCreators from './actions/root-actions';

import ProductsPage from './pages/productsPage';
import CustomersPage from './pages/customersPage';


export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/admin" component={(props, state, params) => <ProductsPage productList={this.props.productList} />} />
          <Route path="/admin/customers" component={(props, state, params) => <CustomersPage />} />
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state) {
  return {
    productList: state.get('productList')
  }
}

export const AppContainer = connect(mapStateToProps, actionCreators)(App);
