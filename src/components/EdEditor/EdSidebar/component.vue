<template>
  <div class="wrapper">

    <Title :prp="prps"></Title>
    <Position :prp="prps"></Position>
    <Size :prp="prps"></Size>
    <Margins :prp="prps"></Margins>
    <Paddings :prp="prps"></Paddings>
    <Nacked :prp="prps"></Nacked>

  </div>
</template>



<script type="text/javascript">
  import Title from './components/Title.vue'
  import Position from './components/Position.vue'
  import Size from './components/Size.vue'
  import Margins from './components/Margins.vue'
  import Paddings from './components/Paddings.vue'
  import Nacked from './components/Nacked.vue'

  export default{
    props:{
      chart:Object
    },
    computed:{
      prps(){
        return (this.chart && this.chart.props) ? this.chart.props : {}
      }
    },
    components:{
      Title,
      Position,
      Size,
      Margins,
      Paddings,
      Nacked
    }
  }  
</script>



<style type="text/css" scoped>
  .wrapper{
    width: 200px;
    min-width: 200px;
    height: 100%;
    background-color: #eee;
  }
  .row{
    margin-bottom: 2rem;
  }

</style>