import React from 'react';
import { connect } from 'react-redux';

import * as actionCreators from './actions/root-actions';


export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="the-app">
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

function mapStateToProps(state) {
  return {
    productList: state.get('productList')
  }
}

export const AppContainer = connect(mapStateToProps, actionCreators)(App);
