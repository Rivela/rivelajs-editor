<template>
  <div id="editor">
    <EdCanvas ref="canvas"></EdCanvas>
    <EdSidebar v-show="showSidebar"></EdSidebar>
  </div>
</template>



<script type="text/javascript">
  import EdCanvas from './EdCanvas/component.vue'
  import EdSidebar from './EdSidebar/component.vue'

  export default {
    data(){
      return{
        showSidebar:true
      }
    },
    methods:{
      addChart(item){
        this.$refs.canvas.addChart(item)
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