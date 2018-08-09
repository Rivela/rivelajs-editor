<template>
  <div class="row">
    <label>Padding:</label>
    <div class="cols">
      <input type="range" v-model="prp.paddingTop" />
      <input type="range" v-model="prp.paddingBottom" />
      <input type="range" v-model="prp.paddingLeft" />
      <input type="range" v-model="prp.paddingRight" />
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