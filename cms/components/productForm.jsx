import React from 'react'

export default class ProductForm extends React.PureComponent {
  render() {
    return (
      <div className="product-form-container">
        <form>
          <div className="form-group row">
            <label htmlFor="create_product_name">Name:</label>
            <div className="col-xs-12">
              <input type="text" className="form-control" id="create_product_name" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="create_product_type">Type:</label>
            <div className="col-xs-8">
              <select className="form-control" id="create_product_type">
                <option value="STRAP">Strap</option>
                <option value="MERCH">Merch</option>
                <option value="APPAREL">Apparel</option>
              </select>
            </div>
            <div className="form-check col-xs-4">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" />
                Available:
              </label>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="create_product_price">Price:</label>
            <div className="col-xs-12">
              <input type="number" className="form-control" id="create_product_price" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
