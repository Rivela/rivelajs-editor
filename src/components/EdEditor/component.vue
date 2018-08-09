<template>
  <div id="editor">
    <EdCanvas ref="canvas" :charts="charts" @selected="onChartSelected"></EdCanvas>
    <EdSidebar :chart="icurrent" v-show="showSidebar"></EdSidebar>
  </div>
</template>



<script type="text/javascript">
  import EdCanvas from './EdCanvas/component.vue'
  import EdSidebar from './EdSidebar/component.vue'

  export default {
    props:{
      charts:Array,
      current:Object
    },
    data(){
      return{
        showSidebar:true,
        icurrent:null
      }
    },
    mounted(){
      this.$watch('icurrent', this.$refs.canvas.updateCharts, {deep:true})
    },
    methods:{
      onChartSelected(item){
        this.icurrent = item
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