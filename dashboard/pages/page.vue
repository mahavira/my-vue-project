<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>文件</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.path + item.filename">
          <td>{{item.path + item.filename}}</td>
          <td>
            <el-button type="danger" icon="delete"></el-button>
            <el-button type="primary" icon="edit"></el-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: []
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    fetch() {
      this.$http.get('/dashboard/api/pages').then(({ data }) => {
        console.log(data)
        this.data = data
      })
    }
  }
}
</script>
