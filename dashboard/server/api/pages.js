exports.path = '/api/pages'
exports.type = 'get'
exports.export = function (req, res) {
  var utils = require('../../../build/utils')
  var _list = []
  utils.readFileList('./src/pages/', _list)
  return _list
}
