<template>
  <div id="app">
    <EdHeader @addchart="onAddChart"></EdHeader>
    <EdEditor ref="editor"></EdEditor>
  </div>
</template>

<script>
  import 'normalize-css'
  import './assets/style.css'

  import EdHeader from './components/EdHeader/component.vue'
  import EdEditor from './components/EdEditor/component.vue'

  export default {
    components:{
      EdHeader,
      EdEditor
    },
    mounted(){
      console.log('mounted')
    },
    methods:{
      onAddChart(item){
        this.$refs.editor.addChart(item)
      }
    }
  }
</script>


<style type="text/css">

  #app{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
