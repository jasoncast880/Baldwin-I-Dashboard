<template>
  <navbar
    :pages="pages"
    :active-page="activePage"
    :nav-link-click="(index) => activePage = index"
  ></navbar>

  <page-viewer
    v-if="pages.length > 0"
    :page="pages[activePage]"
  ></page-viewer>
    
</template>

<script>
import Navbar from './components/Navbar.vue'
import PageViewer from './components/PageViewer.vue'
//import BigScroll from './components/BigScroll.vue'

export default {
  components: {
    Navbar,
    PageViewer,
    //BigScroll
  },
  created() {
    this.getPages();
  },
  data() {
    return {
      activePage: 0,
      pages: []
    }
  },
  methods: {
    async getPages() {
      let res = await fetch('pages.json');
      let data = await res.json();

      this.pages = data;
    },
    /*
    pageCreated(pageObj){
      this.pages.push(pageObj);
    }
    */
  }
}
</script>

<style>
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
</style>
