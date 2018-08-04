<template>
  <div class="detail">

    <div id="banner" v-if="pro_img!=null&& pro_img.length>0">
      <swipe class="my-swipe">
        <swipe-item class="slide1" v-for="img,index in pro_img" :key = "index">
          <img :src="img.img_url">
        </swipe-item>
      </swipe>
    </div>
    
    <div id="info" v-if="basic!=null">
      <div>
        <span class="title_name">{{basic.short_name}}-</span>
        <span class="title_name">{{basic.spec}}</span>
      </div>
      <p class="huodong">{{basic.description}}</p>

      <p class="price">{{basic.price/100}}元
        <span class="num">/{{basic.show_entity_name}}</span>
        <span class="nonum">￥{{basic.origin_price/100}}</span>
        <span class="gun"></span>
        <span class="tui">随时退</span>
      </p>

      <div id="tags">
        <span class="tag" v-for="tag in basic.display_property_group">{{tag.name}}</span>
      </div>
    </div>


    <div id="heng"></div>


    <div id="message" v-if="modules!=null && modules.length>0" >

      <h3 class="mes">商户信息</h3>
  <!-- <div class="mes_title">{{modules[0].data.restaurants}}</div> -->
      <div class="mes_title">{{modules[0].data.restaurants[0].restaurant_name}}</div>
      <div id="address">{{modules[0].data.restaurants[0].restaurant_address}}</div>
      <div id="tel">{{modules[0].data.restaurants[0].restaurant_phone_numbers[0]}}</div>
      
    </div>

    <div id="heng2"></div>

    <div id="user" v-if="modules!=null && modules.length>0" >

      <h3 class="mes">用户评价</h3>

      <div id="userhead">
        <img src="../../static/images/22268465023065.png" style="float: left;">
        <span>{{modules[1].data.nick_name}}</span>
      </div>

      <ul id="evaluate">
        <li v-for="scores in modules[1].data.scores" style="float: left">{{scores.name}}{{scores.score}}.0</li>
      </ul>
        
    </div>

  </div>
</template>

<script>
  // import router from "../router";
  import axios from "axios";
  require('vue-swipe/dist/vue-swipe.css');
  import { Swipe, SwipeItem } from 'vue-swipe';


export default {
  name: 'detail',
  data () {
    return {
      all:[],
      basic:null,
      pro_img:[],
      modules:[]
    }
  },
  mounted(){
    //https://api.ricebook.com/product/info/product_detail.json?product_id=1046843
  	console.log(this.$route.params.id);
    axios.get(`/product/info/product_detail.json?product_id=${this.$route.params.id}`).then(res=>{
      console.log(res.data)
      this.all = res.data;

      // console.log(res.data.basic)
      this.basic = res.data.basic
      // console.log(this.basic);

      // console.log(res.data.modules);
      this.modules = res.data.modules;

      this.pro_img = res.data.basic.product_images;
      // console.log(this.pro_img)

    })
  },
  components:{
    Swipe,
    SwipeItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#banner{
  height: 250px;
}
  .my-swipe {
    height: 100%;
    color: #fff;
    font-size: 30px;
    text-align: center;
    background: pink;
    width: 100%;
    img{
      width: 100%;
    }
  }
  
  #info{
    background-color: #fff;
    padding: 20px 20px 15px;
    .title_name{
      width: 294px;
      font-size: 21px;
      color: #2c3038;
      font-weight: 600;
    }
    .huodong{
      width: 374px;
      font-size: 20px;
      line-height: 1.33;
      color: #92969c;
      margin-top: 12px;
    }
    .price{
      font-size: 20px;
      line-height: 40px;
      color: #fc3838;
      margin-top: 10px;
      .num{
        font-size: 18px;
        line-height: 40px;
        margin-right: 7px;
      }
      .nonum{
        margin-left: 10px;
        text-decoration: line-through;
        color: #92969c;
        margin-right: 14px;
      }
      .gun{
        height: 18px;
        background: #92969c;
        display: inline-block;
        width: 1px;
        vertical-align: -3px;
        margin-right: 14px;
      }
      .tui{
        font-size: 20px;
        color: #92969c;
      }
    }
    #tags{
      width: 374px;
      padding-top: 15px;
      border-top: 1px solid #e6e6e6;


      .tag{
        display: inline-block;
        padding: 3px 5px;
        font-size: 10px;
        border-radius: 4px;
        margin-right: 10px;
        color: rgb(50, 87, 130);
        border: 1px solid rgb(50, 87, 130);
        background-color: rgb(246, 250, 255);
      }
    }
  }
  #heng{
    width: 100%;
    height: 8px;
    background-color: #fafafa;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
  }


  #message{
    background-color: #fff;
    padding: 25px 20px;
    .mes{
      position: relative;
      font-size: 20px;
      font-weight: bolder;
      line-height: 1;
      text-align: center;
      color: #2c3038;
      display: block;
      margin-bottom: 12px;
    }
    .mes::after{
      content: " ";
      position: absolute;
      bottom: -12px;
      left: 50%;
      margin-left: -15px;
      width: 30px;
      border-top: 3px solid #e0e0e0;
      display: block;
    }
    .mes_title{
      border-bottom: 1px solid #e6e6e6;
      padding: 33px 0 15px;
      font-size: 18px;
      color: #2c3038;
    }
    #address{
      padding: 15px 0 10px;
      font-size: 18px;
      color: #63666b;
      border-bottom: 1px solid #e6e6e6;
    }
    #tel{
      padding: 15px 0 10px;
      font-size: 18px;
      color: #63666b;
      border-bottom: 1px solid #e6e6e6;
    }
  }
  #heng2{
    width: 100%;
    height: 8px;
    background-color: #fafafa;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
  }

  #user{
    background-color: #fff;
    padding: 25px 20px;
    .mes{
      position: relative;
      font-size: 20px;
      font-weight: bolder;
      line-height: 1;
      text-align: center;
      color: #2c3038;
      display: block;
      margin-bottom: 12px;
    }
    .mes::after{
      content: " ";
      position: absolute;
      bottom: -12px;
      left: 50%;
      margin-left: -15px;
      width: 30px;
      border-top: 3px solid #e0e0e0;
      display: block;
    }
    #userhead{
      height: 30px;
      line-height: 30px;
      overflow: hidden;
      margin-bottom: 12px;
      margin-top: 30px;
      img{
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
      span{
        font-size: 15px;
        font-weight: 500;
        line-height: 30px;
        color: #1a1a1a;
        margin-right: 10px;
        float: left;
      }
    }
    p{
      font-size: 24px;
      text-align: left;
      color: #92969c;
      margin-bottom: 24px;
    }
    #evaluate{
      li{
        font-size: 12px;
        text-align: left;
        color: #92969c;
        margin-bottom: 12px;
        border-right: 1px solid #a6a9ae;
        padding: 0 4px;
      }
    }
  }
  
</style>