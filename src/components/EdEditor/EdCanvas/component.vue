<template>
  <div class="wrapper">
    <svg></svg>
  </div>
</template>


<script type="text/javascript">
  import '../../../assets/style.css'
  import 'rivelajs/lib/rivela.min.css'

  import * as d3 from 'd3'
  import 'rivelajs'


  export default{
    name: 'editor',
    created(){
      window.d3 = d3 // KEEP IT. hack way to make rivela work on vue-cli
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
      updateCharts(){
        console.log('updateCharts', this.icharts)

        var svg = this.$el.querySelector('svg')

        var cha = d3.select(svg)
          .selectAll('.rivela')
          .data(this.icharts)
        
        var enterCharts = cha.enter()
          .append('g')
          .attr('class', (d, i) => `${d.method}_${i}`)

        var exitCharts = cha.exit()
          .remove('g')

        cha.merge(enterCharts).merge(exitCharts).each(function(d, i) {
          // eslint-disable-next-line
          var chart = rivela[d.method]()
          d3.select(this)
            .attr('transform', `translate(${d.props.x}, ${d.props.y})`)
            .datum(d.data)
            .call(chart)
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
    border:1px solid red;
  }
</style>