<template>
  <div class="wrapper">
    <svg v-canvas-drag></svg>
  </div>
</template>


<script type="text/javascript">
  import '../../../assets/style.css'
  import 'rivelajs/lib/rivela.min.css'
  import CanvasDrag from './directives/SvgDragViewBox.js'

  import * as d3 from 'd3'
  import 'rivelajs'


  export default{
    created(){
      window.d3 = d3 // KEEP IT. hack way to make rivela work on vue-cli
    },
    directives:{
      "canvas-drag": CanvasDrag
    },
    props:{
      charts: Array
    },
    data(){
      return{
        icharts:[]
      }
    },
    mounted(){
      this.$watch('icharts', this.updateCharts, {deep:true})
      this.icharts = this.charts
    },
    methods:{
      pickChart(e){
        console.log(e)
      },
      updateCharts(){
        var vm = this
        var svg = this.$el.querySelector('svg')

        if(!vm.icharts) return

        var cha = d3.select(svg)
          .selectAll('.rivela')
          .data(vm.icharts, (d, i) => `${d.method}_${i}`)
        
        var enterCharts = cha.enter()
          .append('g')
          .attr('class', (d, i) => `${d.method}_${i}`)
          
        var exitCharts = cha.exit()
          .remove('g')

        cha.merge(enterCharts).merge(exitCharts).each(function(d, i) {
          // eslint-disable-next-line
          var chart = rivela[d.method]()
            .series(d => d.data)

          for(var k in d.props){
            if(k!=='x' && k!=='y') chart[k](d.props[k])
          }

          d3.select(this)
            .attr('transform', `translate(${d.props.x}, ${d.props.y})`)
            .datum(d)
            .call(chart)
            .on('click', function(d, i){
                var ob = d3.select(this).datum()
                vm.$emit('selected', ob)
            })
        })



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
  }
  svg text{
    pointer-events: none;
    user-select: none;
  }
</style>