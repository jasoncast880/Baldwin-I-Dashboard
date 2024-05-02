<template>
  <nav
      :class="[`navbar-dark`, `bg-dark`, 'navbar', 'navbar-expand-lg']"
  >
    <div class="container-fluid">
      <div style="display:flex; flex-directions:column; margin-top:10px; margin-bottom:10px;">
        <!--
        <button style="padding-top: 10px; margin-right: 10px; border-radius:10px;">
          <i class="bi bi-0-circle"></i>  
          <i class="bi bi-brightness-alt-high" style="transform: rotate(180deg);"></i>
          <i class="bi bi-0-circle"></i>  
        </button>
        -->
        <logo/>
        <a class="navbar-brand jacquard-12-charted-regular" >
          BALDWIN I
        </a>
      </div>
      <ul class="navbar-nav navbar-center d-flex justify-content-center align-items-center mb-2 mb-lg-0 ">
<!--
        <li v-for="(page, index) in pages" class="nav-item" :key="index">
          <navbar-link
              :page="page"
              :index="index"
          ></navbar-link>
        </li>
-->

        <router-link to="/dashboard"><navbar-divider icon="bi-file-bar-graph"/></router-link>
        <router-link to="/dashboard"><nav class="cool-font">DASHBOARD</nav></router-link>
        <navbar-divider icon="bi-book"> </navbar-divider>
        <router-link to="/docs"><nav class="cool-font">USER-MANUAL</nav></router-link>
        <navbar-divider icon="bi-pen"/>
        <router-link to="/docs"><nav class="cool-font">BLOG</nav></router-link>
      </ul>
     
      <!--
      <div>
        <button @click="goToLinkedIn"> 
          <i class="bi bi-linkedin"></i>
        </button>
        <button @click="goToGithub">
          <i class="bi bi-github"></i>
        </button>
      </div>
      -->
    </div>

  </nav>
</template>

<script>
import Logo from './Logo.vue';
import NavbarLink from './NavbarLink.vue';
import NavbarDivider from './NavbarDivider.vue';

export default {
  components: {
    Logo,
    NavbarLink,
    NavbarDivider,
  },
  created(){
    this.pages = this.$pages.getAllPages();
  },
  data() {
    return {
    }
  },
  methods: {
    goToLinkedIn(){
      window.open("https://linkedin.com/in/jason-castillanes-057316203");
    },
    goToGithub(){
      window.open("https://github.com/jasoncast880/Baldwin-I-Dashboard");
    },
  }
}
</script>

<style scoped>

.navbar-brand, .navbar-nav .nav-link {
  font-family: "Jacquard 24", system-ui;
  font-weight: 400;
  font-style: normal;
  font-size: 2.4rem;
}
.navbar-brand{
  font-size: 2.7rem;
}

.navbar .bi {
  font-size: 1.5rem;
}

.navbar-toggler {
  font-size: 1.25rem;
  padding: .75rem;
}

.navbar {
  position: relative; /* Ensure pseudo-elements are positioned relative to the navbar */
  background-color: transparent; /* Ensure the background of the navbar itself is transparent */
}

.navbar::before,
.navbar::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 10px; /* Adjust the height of the pattern */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Ctext x='0' y='8' fill='%23dee2e6' font-size='10'%3E%3D%3C/text%3E%3C/svg%3E");
  background-repeat: repeat-x;
}

.navbar::before {
  top: 0; /* Position above the navbar */
}

.navbar::after {
  bottom: 0; /* Position below the navbar */
}

.cool-font {
  font-family: "Jacquard 12 charted", system-ui;
  font-weight: 400;
  font-style: normal;
  font-size: 1.9rem;
  color: white;
  
  margin-right:10px;
}
</style>

