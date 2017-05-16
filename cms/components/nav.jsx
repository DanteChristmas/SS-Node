import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export default class Nav extends React.PureComponent {
  constructor(props) {
    super(props);
    this.toggleNavDrop = this.toggleNavDrop.bind(this);
  }

  componentWillMount() {
    this.setState({dropDownOpen: false});
  }

  toggleNavDrop() {
    this.setState({dropDownOpen: !this.state.dropDownOpen});
  }

  getDropDownClasses() {
    return classNames('navbar-collapse', {
      collapse: !this.state.dropDownOpen
    });
  }

  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" aria-label="Toggle Navigation" onClick={this.toggleNavDrop}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/admin">Sully's Straps CMS</Link>
        <div className={this.getDropDownClasses()} id="navbarToggle">
          <ul className="navbar-nav mr-auto mt-2 mt-md-0">
            <li className="nav-item">
              <Link to="/admin/products" className="nav-link">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/customers" className="nav-link">Customers</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
