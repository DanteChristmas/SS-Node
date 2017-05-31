import axios from 'axios'

import { isSet } from '../utils/validate-utils'
import { setDefaultQueryOptions, buildBaseURL } from './repo-helper'

export const PRODUCT_ROUTE = '/api/v1/products'

function buildProductURL(url, options) {
  url += isSet(options.types) ? `&types=${options.types}` : ''
  url += isSet(options.available) ? `&available=${options.available}` : ''
  url += isSet(options.minPrice) ? `&min_price=${options.minPrice}` : ''
  url += isSet(options.maxPrice) ? `&max_price=${options.maxPrice}` : ''

  return url
}

export function query(options) {
  return new Promise((resolve, reject) => {
    setDefaultQueryOptions(options)
    var url = buildBaseURL(PRODUCT_ROUTE, options)
    url = buildProductURL(url, options)
    axios.get(url)
    .then((response) => resolve(response.data))
    .catch((err) => reject(err))
  });
}
