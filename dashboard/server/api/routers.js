exports.path = '/api/routers'
exports.type = 'get'
exports.export = function (req, res) {
  var s = require('../../../src/router/routers.js')
  return s
}
