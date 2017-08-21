export default {
  menu (state, route) {
    let activeName = ''
    let openNames = []
    state.menu.forEach((n, i) => {
      if (n.path === route.path || (n.match && n.match.indexOf(route.name))) {
        activeName = i + ''
      } else if (n.children) {
        n.children.forEach((m, j) => {
          if (m.path === route.path || (m.match && m.match.indexOf(route.name) >= 0)) {
            activeName = i + '-' + j
            openNames.push(i + '')
          }
        })
      }
    })
    state.menuActiveName = activeName
    state.menuOpenNames = [...openNames]
  },
  set (state, data) {
    Object.assign(state, data)
  }
}
