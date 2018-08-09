<template>
  <div class="wrapper">
    <img src="../../assets/logo.png" />

    <ul>
      <li v-for="item in menu" :key="item.label">
        <a href="" @click.prevent="addChart(item)">{{ item.label }}</a>
      </li>
    </ul>
    
  </div>
</template>





<script type="text/javascript">
  import datamenu from './datamenu'

  export default{
    data(){
      return{
        menu:datamenu.list
      }
    },
    methods:{
      addChart(item){
        this.$emit('addchart', item)
      }
    }
  }
</script>






<style type="text/css" scoped>
  .wrapper{
    padding: .5rem;
    background-color: #ddd;
    display: flex;
    align-items: center;
  }

  ul{
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  ul li a{
    background-color: #eee;
    text-decoration: none;
    padding: 1rem;
    display: block;
 }

  ul li{
    border-right: 1px solid #fff;
  }

  ul li:last-child{
    border:none;
  }

  ul li a:hover{
    background-color: #000;
    color: white;
  }

  img{
    width: 30px;
  }
</style>