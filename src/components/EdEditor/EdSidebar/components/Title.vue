<template>
  <div class="row">
    <label>Title:</label>
    <div class="cols">
      <input type="text" v-model="prp.title" />
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