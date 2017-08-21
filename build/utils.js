var fs = require('fs')
var path = require('path')
var config = require('../config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  var cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    var loaders = [cssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}

//递归创建目录 异步方法
function mkdirs(dirname, callback) {
  fs.exists(dirname, function (exists) {
    if (exists) {
      callback();
    } else {
      //console.log(path.dirname(dirname));
      mkdirs(path.dirname(dirname), function () {
        fs.mkdir(dirname, callback);
      });
    }
  });
}
//递归创建目录 同步方法
function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
}
exports.mkdirs = mkdirs
exports.mkdirsSync = mkdirsSync

var load = function (path, name) {
  if (name) {
    return require(path + name)
  }
  return require(path)
}
/**
 * 加载某目录下的所有文件
 */
exports.loadDir = function (dir, suffix) {
  suffix = suffix || '.js'
  var patcher = {}
  fs.readdirSync(__dirname + '/' + dir).forEach(function (filename) {
    var reg = new RegExp("\\" + suffix + "$")
    if (!reg.test(filename)) {
      return;
    }
    var name = path.basename(filename, suffix);
    var _load = load.bind(null, './' + dir + '/', name);

    patcher.__defineGetter__(name, _load);
  });
  return patcher;
}


function readFileList(path, filesList) {
  var files = fs.readdirSync(path);
  files.forEach(function (itm, index) {
      var stat = fs.statSync(path + itm);
      if (stat.isDirectory()) {
      //递归读取文件
        readFileList(path + itm + "/", filesList)
      } else {
          var obj = {};//定义一个对象存放文件的路径和名字
          obj.path = path;//路径
          obj.filename = itm//名字
          filesList.push(obj);
      }
  })
}
exports.readFileList = readFileList