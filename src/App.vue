<template>
  <navbar
    :pages="pages"
  ></navbar>

  <div class="container">
  <router-view ></router-view>
  </div>
<!--
  <page-viewer>
    v-if="pages.length > 0";
    :page="pages[activePage]"
  </page-viewer>
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
  },
}
</script>

<style>
.navbar {
  display: block;
  position: fixed;
}
.container {
  padding-left: 5px;
  padding-right:5px;

}
.libre-baskerville-regular {
  font-family: "Libre Baskerville", serif;
  font-weight: 400;
  font-style: normal;
}

.libre-baskerville-bold {
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  font-style: normal;
}
</style>
