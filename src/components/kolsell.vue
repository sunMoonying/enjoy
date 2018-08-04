<template>
  <div class="kolsell" v-if = "datalist.length !== 0">
    		<img :src="datalist[0].data.tabs[0].url" alt="">
    <ul>
      <li v-for = "data in tabs" @click = "bandclick(data)">
         <img :src="data.url+'?imageView2/1/w/200/h/200'" alt="">
         <div class="info">
           <div data-v-36292087="" class="info">
              <p data-v-36292087="" class="title">{{data.title}}</p> 
                <p data-v-36292087="" class="des">{{data.desc}}</p> 
                  <div data-v-36292087="" class="price">
                      <p data-v-36292087="" class="special_price">
                          <span data-v-36292087="" class="special_tag">会员价:</span> 
                          <span data-v-36292087="" class="num">{{(data.special_price)/100}}</span> 
                          <span data-v-36292087="" class="spec">元</span>
                       </p> 
                      <p data-v-36292087="" class="origin_price">市场价:{{(data.enjoy_price)/100}}元</p>
                      <div data-v-36292087="" class="buy">立即购买</div>
                  </div>
            </div>
         </div>
    	</li>
    </ul>
  </div>
</template>

<script>
import router from '../router';
import axios  from 'axios';
export default {
  name: 'kolsell',
  data () {
    return {
      datalist : [],
      tabs : []
    }
  },
  methods : {
  	bandclick(data){

  	}
  },
  mounted(){
    axios.get('/hub/home/v1/mini_app/homepage.json').then((res)=>{
      // console.log(res.data);
      this.datalist = res.data;
      this.tabs = this.datalist[1].data.tabs
    })
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.kolsell{
  overflow: hidden;
}
 img{
  width: 100%;
 }
 ul{
  list-style: none;
      padding: 0 20px;
  li{
    position: relative;
    overflow: hidden;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 335px;
    border-top: 1px solid #e0e0e0;
    img{
      float: left;
    display: block;
    width: 100px;
   height: 100px;
    }
  }
 }
 .info{
  float: right;
      position: relative;
    height: 100px;
 }
.info .title[data-v-36292087] {
    width: 220px;
    line-height: 1.2;
    font-size: 15px;
    font-weight: 500;
    color: #2c3038;
    line-height: 1.2em;
    height: 2.4em;
    overflow: hidden;}
    .info .des[data-v-36292087] {
    width: 220px;
    margin-top: 5px;
    font-size: 12px;
    color: #92969c;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.info .price .special_price[data-v-36292087] {
    height: 22.5px;
    font-weight: 500;
    color: #fa4f00;
    font-size: 12px;}
    .info .price .special_price .num[data-v-36292087] {
    font-size: 20px;}
    .info .price .origin_price[data-v-36292087] {
    margin-top: 6px;
    font-size: 12px;
    color: #92969c;}
 .buy{
  position: absolute;
    right: 0;
    bottom: 0;
    min-width: 80px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    border-radius: 15px;
    background-color: #fba700;
    font-size: 13px;
 }

</style>