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

<!-- ===========================商户信息======================== -->

    <div id="message" v-if="modules!=null && modules.length>0" >

      <h3 class="mes">商户信息</h3>
  <!-- <div class="mes_title">{{modules[0].data.restaurants}}</div> -->
      <div class="mes_title">{{modules[0].data.restaurants[0].restaurant_name}}</div>
      <div id="address">{{modules[0].data.restaurants[0].restaurant_address}}</div>
      <div id="tel">{{modules[0].data.restaurants[0].restaurant_phone_numbers[0]}}</div>
      
    </div>

    <div id="heng2"></div>

<!-- ===========================用户评价======================== -->

    <div id="user" v-if="modules!=null && modules.length>0" >

      <h3 class="mes">用户评价</h3>

    <!-- ===========================用户头像和用户名======================== -->

      <div id="userhead">
        <img src="../../static/images/22268465023065.png" style="float: left;">
        <span>{{modules[1].data.nick_name}}</span>
      </div>

    <!-- ===========================评分======================== -->

      <div id="evaluate">
        <span v-for="scores in modules[1].data.scores" class="eva_span">{{scores.name}}{{scores.score}}.0</span>
      </div>

    <!-- ===========================评价标签======================== -->

      <div id="tag2">
        <span v-for="tag2 in modules[1].data.tags" class="tag2_span">{{tag2.name}}</span>
      </div>

      <p id="pingjia">{{modules[1].data.text}}</p>

    <!-- ===========================评价图片======================== -->

      <ul id="pingjia_img" @click="imgShow = !imgShow">
        <li v-for="imgs in modules[1].data.images" class="pingjiatu">
          <img :src="imgs" class="imgs2">
        </li>
<<<<<<< HEAD
<!--         <span class="number">{{modules[1].data.images.length}}</span>
 -->      </ul>
=======
        <!-- <span class="number">{{modules[1].data.images.length}}</span> -->
      </ul>
>>>>>>> 203afcc1ebd909ef8f10d400416d85f2b850c1b3

    <!-- ===========================评价图片轮播======================== -->
      <div class="swiper-container" v-show="imgShow" @click="imgShow = !imgShow">
         <div class="swiper-wrapper">
           <div class="swiper-slide" v-for="imgs in modules[1].data.images">
               <img :src="imgs" class="imgs2">
           </div>
         </div>
         <!-- Add Pagination -->
         <div class="swiper-pagination"></div>
      </div>


      <div id="see">查看全部评价</div>

    </div>


    <div id="heng3"></div>



<!-- ===========================  MENU  ======================== -->
    <div id="menu" v-if="modules!=null && modules.length>0" >

      <h3 class="mes">MENU</h3>

      <div id="menu_juti" v-for="juti in modules[2].data.contents">
        <p class="menu_title">-{{juti.sub_title}}-</p>
        <p class="menu_list" v-for="list in juti.text">{{list}}</p>
      </div>

    </div>


    <div id="heng4"></div>
<!-- ===========================  亮点  ======================== -->
    <div id="liangdian" v-if="modules!=null && modules.length>0" >

      <h3 class="mes">亮点</h3>
      <!-- <p v-for="text in detail.text_array">{{detail.text}}</p> -->
      <div id="detail" v-for="detail in modules[3].data.lights">

        <img :src="detail.img_url">
        
        <p class="detail_p">{{detail.content}}</p>
      </div>


    </div>


  </div>
</template>

<script>
  // var bus = new Vue();
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
      modules:[],
      imgShow:false
    }
  },
  mounted(){
    axios.get(`/product/info/product_detail.json?product_id=${this.$route.params.id}`).then(res=>{
      // console.log(res.data)
      this.all = res.data;

      // console.log(res.data.basic)
      this.basic = res.data.basic
      // console.log(this.basic);

      // console.log(res.data.modules);
      this.modules = res.data.modules;

      this.pro_img = res.data.basic.product_images;
      // console.log(this.pro_img)
      this.$nextTick(function(){
        var swiper = new Swiper('.swiper-container', {
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                  return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
              },
            });
      });

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
    padding-bottom: 0;

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
      width: 100%;
      .eva_span{
        font-size: 12px;
        display: inline-block;
        text-align: left;
        color: #92969c;
        margin-bottom: 12px;
        border-right: 1px solid #a6a9ae;
        padding: 0 5px;
      }
    }
    #tag2{
      margin-bottom: 24px;
      .tag2_span{
        height: 20px;
        display: inline-block;
        margin-right: 10px;
        margin-top: 2px;
        line-height: 20px;
        padding: 0 5px;
        font-size: 20px;
        font-weight: 300;
        text-align: center;
        color: #92969c;
        border-radius: 2px;
        background-color: #f2f3f5;
      }
    }
    #pingjia{
      font-size: 16px;
      line-height: 1.5;
      color: #63666b;
      margin-bottom: 12px;
    }

    #pingjia_img{
      width: 100%;
      overflow: hidden;
      height: 113px;
      position: relative;
      border-bottom: 1px solid #e6e6e6;
      .pingjiatu{
        width: 30%;
        float: left;
        margin-right: 10px;
        margin-bottom: 10px;
        height: 105px;
        .imgs2{
          height: 100%;
        }
      }
      .number{
        position: absolute;
        width: 40px;
        height: 16px;
        line-height: 16px;
        bottom: 9px;
        right: 16px;
        font-size: 11px;
        text-align: center;
        color: #fff;
        border-radius: 50px;
        background-color: rgba(0,0,0,.4);
      }
    }
  }


  #see{
    display: block;
    padding: 13px 0 15px;
    line-height: 16px;
    font-size: 16px;
    color: #63666b;
  }


  #heng3{
    width: 100%;
    height: 8px;
    background-color: #fafafa;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
  }

  #menu{
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

    #menu_juti{
      margin-top: 25px;
      .menu_list{
        font-size: 20px;
        line-height: 1.6;
        text-align: center;
        color: #76797e;
      }
      .menu_title{
        font-size: 20px;
        line-height: 1.6;
        text-align: center;

      }
    }

  }

  #heng4{
    width: 100%;
    height: 8px;
    background-color: #fafafa;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
  }


  #liangdian{
    background-color: #fff;
    padding: 25px 20px;
    padding-bottom: 0;

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
    #detail{
      margin-top: 38px;
      .detail_p{
        font-size: 18px;
        line-height: 1.6;
        color: #63666b;
        /* margin: 15px 20px 20px; */
        margin-top: 15px;
      }
    }
  }
/* =============================评价图片轮播样式================= */

.swiper-container {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.5);
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* background: #fff; */

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color:#000;
  opacity: 1;
  background: rgba(0,0,0,0.2);
}
.swiper-pagination-bullet-active {
  color:#fff;
  background: #007aff;
}




  
</style>