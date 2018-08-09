<template>
  <div class="row">
    <label>Nacked:</label>
    <input type="checkbox" v-model="prp.nacked" />
  </div>
</template>

<script type="text/javascript">
  export default{
    props:{
      prp:Object
    }
  }
</script>