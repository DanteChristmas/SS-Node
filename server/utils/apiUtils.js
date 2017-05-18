function handleResponse(res, code, statusMsg, data, meta) {
  res.status(code).json({ status: statusMsg, content: data, meta });
}

function buildMeta(meta, options) {
  meta.current_page = options.page || 1;
  const limit = options.limit || 50;
  meta.total_pages = Math.ceil(meta.total / limit);

  return meta;
}

function getLimit(options) {
  return options.limit || 50;
}

function getOffset(options) {
  return !!options.page ? (options.page - 1) * limit : null;
}

function setKnexPage(sql, limit, offset) {
  sql.limit(limit);
  if(!!offset)
    sql.offset(offset);

  return sql;
}

module.exports = {
  buildMeta,
  handleResponse,
  getLimit,
  getOffset,
  setKnexPage
}
