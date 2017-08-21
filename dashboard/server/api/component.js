exports.path = '/api/components'
exports.type = 'get'
exports.export = function (req, res) {
  var utils = require('../../../build/utils')
  var _list = []
  utils.readFileList('./src/components/', _list)
  return _list
}
