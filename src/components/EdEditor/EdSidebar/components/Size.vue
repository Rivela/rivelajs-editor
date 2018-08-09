<template>
  <div class="row">
    <label>Size:</label>
    <div class="cols">
      <input type="number" v-model="prp.width" />
      <input type="number" v-model="prp.height" />
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