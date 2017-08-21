var utils = require('./utils')
var apis = utils.loadDir('../dashboard/server/api')
const SERVER_ROOT = '/dashboard'
for (var k in apis) {
  (function(mock){
    if (!mock.path) return
    app[mock.type](SERVER_ROOT + mock.path, function (req, res) {
      res.json(mock.export(req, res))
    })
  }(apis[k]))
}
