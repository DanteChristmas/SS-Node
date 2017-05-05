function query(req, res) {
  handleResponse(res, 200, 'success');
}

function find(req, res) {
  handleResponse(res, 200, 'success');
}

function create(req, res) {
  handleResponse(res, 200, 'success');
}

function update(req, res) {
  handleResponse(res, 200, 'success');
}

function del(req, res) {
  handleResponse(res, 200, 'success');
}

function handleResponse(res, code, statusMsg) {
  res.status(code).json({ status: statusMsg });
}

module.exports = {
  query,
  find,
  create,
  update,
  del
}
