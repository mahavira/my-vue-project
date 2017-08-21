<template>
  <div>
    <el-tree :data="data" :props="defaultProps" :default-expand-all=true></el-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      defaultProps: {
        children: 'children',
        label: 'path'
      }
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    fetch() {
      this.$http.get('/dashboard/api/routers').then(({ data }) => {
        this.data = data
      })
    }
  }
}
</script>
