<template>
  <button>
    <i class="`bi bi-${icon}`"></i>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
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
}
.icon-style {
  height:75px;
  width:auto;
}
</style>
