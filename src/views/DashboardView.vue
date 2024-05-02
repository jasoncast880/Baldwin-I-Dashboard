<script>
export default {
  components: {
  },
  methods: {
  },
}

</script>

<template>
  <div class="container">
    <div class="box-1 center-div libre-baskerville-bold">  
      <i class="invalid-icon bi bi-check-circle-fill" style="color:green"></i>
      Server Status: 400 | Last Updated 'POST' Request: 12:00:03 NPT
    </div>
    <div class="box-2">
    </div>
    <div class="box-1">
    </div>
    <div class="box-2">
    </div>
    <div class="box-1">
    </div>
  </div>
</template>

<style scoped>
.valid-icon {
  font-size: 50px;   
}
.invalid-icon {
  font-size: 50px;
}

.container {
  border-left: 2px solid black;
  border-right: 2px solid black;
}
.box-1{
  height:150px;
  background-color: rgb(238 238 238);


}
.box-2{
  height:150px;
}

.center-div {
  display:flex;
  justify-content: center;
  align-items: center;
}

</style>
