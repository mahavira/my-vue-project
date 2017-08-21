module.exports = [{
  path: '/',
  component: (resolve) => require(['@/components/Hello.vue'], resolve)
}, {
  path: '/hello2',
  component: (resolve) => require(['@/components/Hello2.vue'], resolve)
}, {
  path: '/hello3',
  component: (resolve) => require(['@/components/Hello2.vue'], resolve),
  children: [{
    path: '/hello4',
    component: (resolve) => require(['@/components/Hello2.vue'], resolve)
  }]
}]
