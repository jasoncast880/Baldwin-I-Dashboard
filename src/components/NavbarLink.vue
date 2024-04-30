<template>
  <li>
    <router-link
        :to="`/${index}`"
        class="nav-link cool-font"
        active-class="active emphasize"
        aria-current="page"

        :title="`this link goes to the ${page.link.text} page`"
    >{{ page.link.text }}</router-link>
  </li>
</template>

<script>
export default {
  props: ['page', 'index']
}
</script>

<style scoped>
.emphasize {
  text-decoration: underline !important;
}

.cool-font {
  font-family: "Jacquard 12 Charted", system-ui;
  font-weight: 400;
  font-style: normal;
  font-size: 2.3rem;
}
</style>
