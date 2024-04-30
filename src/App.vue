<template>
  <navbar
    :pages="pages"
  ></navbar>

  <router-view></router-view>

<!--
  <page-viewer
    v-if="pages.length > 0"
    :page="pages[activePage]"
  ></page-viewer>
-->
    
</template>

<script>
import Navbar from './components/Navbar.vue'
import PageViewer from './components/PageViewer.vue'
//import BigScroll from './components/BigScroll.vue'

export default {
  components: {
    Navbar,
    PageViewer
  },
  methods: {
      pageCreated(pageObj) {
        this.pages.push(pageObj);
    },
  }
}
</script>

<style>
</style>
