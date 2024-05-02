<script>
export default {
  components: {
  },
  methods: {
  },
}

</script>

<template>
  <div class="container libre-baskerville-bold">

    <div class="SERVICE-STATUS-BOX box-1 center-div ">  
      <div class="top-left-text">Alexa Service Status:</div>
      <div style="font-size:45px; margin-right: 20px;">
        <i class="valid-icon bi bi-check-circle-fill" style="padding:5px; color:green;"></i> 
        <i class="bi bi-dash-circle-fill" style="padding:5px; color:yellow"></i>
        <i class="bi bi-x-circle-fill" style="padding:5px; color:red"></i>
      </div>
      <span>
        Baldwin I Is Under Maintenance At the Moment!
      </span>
    </div>
    
    <div class="API-GATEWAY-STATUS-BOX box-2 center-div">
      <div class="top-left-text">API Gateway Status:</div>
      <div class="flex-column" style="padding-right:10px;">
        <div class="mr-4 flex-row">
          <i class="bi bi-alexa"></i>
          <i class="bi bi-three-dots"></i>
          <i class="bi bi-cloud-arrow-up-fill"></i>
          <p> Alexa-Skill--Firebase Cloud Function: </p>
          <i class="invalid-icon bi bi-check-circle-fill" style="color:green"></i>
        </div>
        <span class="text-secondary fst-italic" style="margin-top: 2px;">
          Server Status: 400 | Last Updated Request: 12:00:03NPT
        </span>
      </div>

      <div class="flex-column">
        <div class="mr-4 flex-row">
          <i class="bi bi-cloud-arrow-up-fill"></i>
          <i class="bi bi-three-dots"></i>
          <i class="bi bi-server"></i>
          <p> Firebase Cloud Function--Database: </p>
          <i class="invalid-icon bi bi-x-circle-fill" style="color:red"></i>
        </div>
        <span class="text-secondary fst-italic" style="margin-top: 2px;">
        Server Status: 400 | Last Updated 'POST' Request: 12:00:03 NPT
        </span>
      </div>
    </div>

    <div class="WEEKLY-USERS-BOX box-1 centre-div">
      <div class="top-left-text">Weekly Users Stats:</div>
    </div>

    <div class="DEVELOPER-NOTES-BOX box-2 centre-div">
      <div class="top-left-text">Developer Notes:</div>
    </div>
  </div>
</template>

<style scoped>
.valid-icon {
}
.invalid-icon {
}

.container {
  border-left: 2px solid rgb(187 187 187);
  border-right: 2px solid rgb(187 187 187);
}
.box-1{
  height:150px;
  background-color: rgb(238 238 238);
  position: relative;
}
.box-2{
  height:150px;
  position: relative;
}

.center-div {
  display:flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
}
.flex-row {
  display:flex;
  flex-direction:row;
}
.flex-column {
  display:flex;
  flex-direction:column;
}

.top-left-text{
  position:absolute;
  top:0;
  left:0; 
  margin:10px;
}

</style>
