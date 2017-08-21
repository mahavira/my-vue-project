<template>
  <div id="app">
    <div class="wrapper wrapper-flex">
      <div class="wrapper-left">
        <main-menu></main-menu>
      </div>
      <div class="wrapper-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from './Menu'
export default {
  components: {MainMenu}
}
</script>
<style>
* {
  box-sizing: border-box
}
body{
  margin: 0;
  padding: 0;
  background:#23282d
}
.wrapper {
  padding: 10px;
  margin: 10px;
  min-height: 100vh;
  background: #FFF
}

.wrapper-left {
  width: 220px;
  background: #eef1f6
}

.wrapper-right {
  margin: 0 10px;
}

.wrapper-flex {
  display: flex;
}

.wrapper-flex .wrapper-left {
  flex: 0 0 auto;
}

.wrapper-flex .wrapper-right {
  flex: 1 1 auto;
}
</style>
