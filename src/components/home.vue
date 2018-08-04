<template>
  <div class="home">


    <div id="index_list" v-if="datalist!=null&& datalist.length>0" >
      

      <ul>
        <h3>{{datalist[0].group_section.title}}</h3>
         <div class="date">{{datalist[0].group_section.desc}}</div>
        <li v-for="data in datalist[0].tabs">
          <img :src="data.url">
          <div class="product_title">{{data.title}}</div>
          <div class="product_shuo">{{data.desc}}</div>
          
        </li> 
      </ul>

       <ul>
        <h3>{{datalist[1].group_section.title}}</h3>
         <div class="date">{{datalist[1].group_section.desc}}</div>
        <li v-for="data in datalist[1].tabs">
          <img :src="data.url">
          <div class="product_title">{{data.title}}</div>
          <div class="product_shuo">{{data.desc}}</div>
          
        </li> 
      </ul>


      <ul>
        <h3>{{datalist[2].group_section.title}}</h3>
         <div class="date">{{datalist[2].group_section.desc}}</div>
        <li v-for="data in datalist[2].tabs">
          <img :src="data.url">
          <div class="product_title">{{data.title}}</div>
          <div class="product_shuo">{{data.desc}}</div>
          
        </li> 
      </ul>
    </div>
  </div>
</template>

<script>
import router from "../router" //路由对象
import axios from "axios"
export default {
  name: 'home',
  data () {
    return {
      datalist : []
    }
  },
  methods:{
    bandclick(data){
      // console.log(111)
      router.push(`/detail/${data}`);
    }
  },
  mounted(){
    axios.get('/hub/home/v1/web/week_choice.json?city_id=140&page=0').then(res=>{
        // console.log(res.data)
        this.datalist = res.data
        // console.log(this.datalist[0].tabs[0])
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
    height: 284px;
    padding: 20px 0;
    border-bottom: 1px solid #e0e0e0;
    .product_title{
      margin-top: 15px;
      font-size: 20px;
      color: #2c3038;
    }
    .product_shuo{
      margin-top: 8px;
      font-size: 11px;
      color: #92969c;
    }
  }
  #index_list{
    line-height: 1;
    h3{
      font-size: 21px;
    }
    .date{
      font-size: 12px;
      color: #ff3939;
      margin-top: 5px;
    }
  }
  img{
    height: 223px;
  }
  
  
  
</style>