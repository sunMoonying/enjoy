<template>
  <div class="entry">
    <ul class="head">
      <li class="head_all" style="float: left;">全部</li>
      <li class="head_sort" style="float: left;">智能排序</li>
    </ul>
    <ul v-if="food!=null && food.length>0" class="ul_list">
      <li v-for = "data in food" @click = "bandclick(data)" class="food_li">
        <img :src="data.product_image" class="food_img" style="float: left">
        <p style="float: left;" class="food_name">{{data.name}}</p>
        <p style="float: left;" class="food_price">{{data.price/100}}元/{{data.show_entity_name}}
        <span>￥{{data.original_price/100}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>
<!-- 动态获取列表页内容 -->
<script> 
import router from "../router";
import axios from "axios" 
export default {
  name: 'entry',
  data(){
    return{
      food : []
    }
  },
  mounted(){
    // console.log(this.$route.params.id1);
    axios.get(`/4/tab/category_product_list.json?category_id=${this.$route.params.id1}&sort=1&from_id=0&city_id=140&page=0`).then(res=>{
      // console.log(res.data)
      this.food = res.data
    })

  },
  methods : {
    bandclick(data){
      // console.log(data);
      router.push(`/detail/${data.product_id}`);
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .entry{
    overflow: hidden;
  }

  .head{
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
    font-size: 13px;
    color: #2c3038;
    line-height: 40px;
    .head_all{
      width: 49%;
      border-right: 1px solid #dcdee0;
      text-align: center;
    }
    .head_sort{
      width: 50%;
      text-align: center;
    }
  }


  .food_li{
    height: 126px;
    width: 100%;
    padding: 15px;
    border-bottom: 1px solid #e6e6e6;
  }
  .food_img{
    /* height: 115px; */
    width: 188px;
  }
  .food_name{
    width: 160px;
    height: 60px;
    line-height: 1.3;
    font-size: 16px;
    color: #2c3038;
    margin-bottom: 11px;
    margin-left: 10px;
  }
  .food_price{
    color: #ff3939;
    margin-left: 10px;
  }
  span{
    text-decoration: line-through;
    color: #92979c;
  }
</style>