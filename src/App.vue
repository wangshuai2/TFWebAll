<template>
  <div id="app">
    <nav-components></nav-components>
    <router-view></router-view>
    <footer-components></footer-components>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    'nav-components': Nav,
    'footer-components': Footer
  }
}
</script>

