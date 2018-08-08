<template>
  <div class="wrapper">
    <svg></svg>
  </div>
</template>


<script type="text/javascript">
  //import * as d3 from 'd3'
  import '../../../assets/style.css'
  import 'rivelajs/lib/rivela.min.css'

  import * as d3 from 'd3'
  import 'rivelajs'


  export default{
    name: 'editor',
    created(){
      window.d3 = d3 // KEEP IT. hack way to make rivela work on vue-cli
    },
    methods:{
      addChart(item){
        var chart = rivela[item.method]()
        var cnv = this.$el.querySelector('svg')

        d3.select(cnv)
          .datum(item.data)
          .call(chart)
      }
    }
  }
</script>


<style type="text/css" scoped>
  .wrapper{
    width: 100%;
    height: 100%;
  }
  svg{
    width: 100%;
    height: 100%;
    border:1px solid red;
  }
</style>