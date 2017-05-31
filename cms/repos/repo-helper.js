import { isSet } from '../utils/validate-utils'

export function setDefaultQueryOptions(options) {
  options.page = isSet(options.page) ? options.page : 1
  options.limit = isSet(options.limit) ? options.limit : 50
  // options.sort = isSet(options.sort) ? options.sort : 'last_modified'
  // options.sortDir = isSet(options.sortDir) ? options.sortDir : 'DESC'
}

export function buildBaseURL(apiPath, options) {
  return apiPath + `?page=${options.page}&limit=${options.limit}`
}
