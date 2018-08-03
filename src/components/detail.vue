<template>
  <div class="detail">
    <div id="banner" v-if="pro_img!=null&& pro_img.length>0">
      <swipe class="my-swipe" v-for="img in pro_img">
        <swipe-item class="slide1"">
          <img :src="img.img_url">
        </swipe-item>
      </swipe>
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
      basic:[],
      pro_img:[]
    }
  },
  mounted(){
    //https://api.ricebook.com/product/info/product_detail.json?product_id=1046843
  	console.log(this.$route.params.id);
    axios.get(`/product/info/product_detail.json?product_id=${this.$route.params.id}`).then(res=>{
      // console.log(res.data)
      this.all = res.data;

      // console.log(res.data.basic)
      this.basic = res.data.basic
      // console.log(this.basic);

      this.pro_img = res.data.basic.product_images;
      console.log(this.pro_img)

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
  .my-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    background: pink;
  }

  .slide1 {
    background-color: #0089dc;
    color: #fff;
  }

</style>