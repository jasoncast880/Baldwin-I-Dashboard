<template>
  <h1> Jobs </h1>
  <div v-for = "job in jobs" :key="job.id" class="job">
    <h2>{{ job.title }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs')
      .then((res)=>res.json())
      .then(data => this.jobs =data)
      .catch(err => console.log(err.message))
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
