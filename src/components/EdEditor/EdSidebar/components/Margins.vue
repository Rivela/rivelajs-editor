<template>
  <div class="row">
    <label>Margins:</label>
    <div class="cols">
      <input type="range" v-model="prp.marginTop" />
      <input type="range" v-model="prp.marginBottom" />
      <input type="range" v-model="prp.marginLeft" />
      <input type="range" v-model="prp.marginRight" />
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