<template>
  <div id="app">
    <NavBar />
    <router-view>
      <Home />
    </router-view>
  </div>
</template>

<script>
import NavBar from './components/moleculas/NavBar'
import Home from './components/organismos/Home'
export default {
  components: {
    NavBar,
    Home
  }
}
</script>

<style>
</style>
