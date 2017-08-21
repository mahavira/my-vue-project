let env = process.env.NODE_ENV
const host = env === 'development' ? 'http://localhost/' : env === 'production' ? 'http://localhost/' : 'https://debug.url.com/'
const root = env === 'development' ? '' : ''
export default {
  env: env,
  routerRoot: root,
  serverHost: host,
  serverRoot: '/'
}
