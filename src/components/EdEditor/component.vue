<template>
  <div id="editor">
    <EdCanvas :charts="charts"></EdCanvas>
    <EdSidebar v-show="showSidebar"></EdSidebar>
  </div>
</template>



<script type="text/javascript">
  import EdCanvas from './EdCanvas/component.vue'
  import EdSidebar from './EdSidebar/component.vue'

  export default {
    props:{
      charts:Array
    },
    data(){
      return{
        showSidebar:true
      }
    },
    components:{
      EdCanvas,
      EdSidebar
    }
  }
</script>



<style type="text/css">
  #editor{
    width: 100%;
    height: 100%;
    display: flex;
    flex:1;
  }

</style>