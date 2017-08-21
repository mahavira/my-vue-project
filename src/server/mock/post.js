exports.path = '/api/post'
exports.type = 'post'
exports.export = function (req, res) {
  return {
    title: '标题',
    content: '内容'
  }
}
