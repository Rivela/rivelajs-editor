<template>
  <div id="app">
    <EdHeader @addchart="onAddChart"></EdHeader>
    <EdEditor :charts="icharts"></EdEditor>
  </div>
</template>

<script>
  import 'normalize-css'
  import './assets/style.css'

  import EdHeader from './components/EdHeader/component.vue'
  import EdEditor from './components/EdEditor/component.vue'

  import sample from './sampledata.js'

  export default {
    components:{
      EdHeader,
      EdEditor
    },
    props:{
      charts:Array
    },
    data(){
      return{
        icharts:sample.charts
      }
    },
    methods:{
      onAddChart(item){
        var ob = {
          method: 'barchart',
          data: [2, 5, 3, 2, 5, 3, 2, 5, 3, 2, 5, 3, 2, 5, 3],
          props: {x: 0, y: 400, width: 400, height: 200}
        }
        this.icharts.push(ob)
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
