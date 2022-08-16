<template>
  <div id="app">
    <!-- 路由动画 -->
    <transition name="scale">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    if (localStorage.getItem('store')) {
      // 页面加载前读取sessionStorage里的状态信息
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(localStorage.getItem('store'))
        )
      )
    }
    window.addEventListener('beforeunload', () => {
      // 在页面刷新前将vuex里的信息保存到sessionStorage里
      localStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style scoped lang="scss">
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
#app {
  background-color: $bg;
  overflow: hidden;
}

@font-face {
  font-family: 'led regular';
  src: url('./assets/font/font1.ttf');
}
</style>
<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
