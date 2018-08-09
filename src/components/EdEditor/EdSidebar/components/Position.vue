<template>
  <div class="row">
    <label>Position:</label>
    <div class="cols">
      <input type="number" v-model="prp.x" />
      <input type="number" v-model="prp.y" />
    </div>
  </div>
</template>

<script type="text/javascript">
  export default{
    props:{
      prp:Object
    }
  }
</script>