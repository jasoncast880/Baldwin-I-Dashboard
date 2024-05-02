<template>
  <button>
    <i :class="iconClass"></i>
  </button>
</template>

<script>
export default {
  props: {
    icon: String
  },
  computed: {
    iconClass() {
      return `bi ${this.icon}`;
    }
  },
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
}
</script>

<style scoped>
.button {
  border-radius: 10px;
  height:75px;
  width:100px;
}
</style>
