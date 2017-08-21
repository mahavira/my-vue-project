<template>
  <el-menu mode="vertical" :router="true">
    <el-menu-item v-for="item in routers" key="item.page" @click="$router.push(item.path)" :index="item.path" :route="$route">
      <i class="el-icon-message"></i>
      {{item.title}}
    </el-menu-item>
  </el-menu>
</template>

<script>
import routers from './router/routers'
export default {
  data() {
    return {
      routers
    }
  }
}
</script>
