<template>
  <div class="navbar">
    <slot></slot>
    <span @click = "handclick()" class="fenlei">分类</span>
    <!-- <img src="../../static/images/index.png"> -->
    <i class="iconfont icon-account i1" @click = "bandclick()"></i>
    <i class="iconfont icon-search i2" @click="showClick()"></i>


    <div id="search_div" v-show="search_show">
      <input type="text" placeholder="搜索本地精选/快递到家">
      <span class="search_span">搜索</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      search_show:false
    }
  },
  methods : {
    handclick(){
      console.log('ddd')
      this.$router.push('/index/list');
    },
    bandclick(){
      console.log(1)
      this.$router.push('/login');
    },
    showClick(){
      this.search_show = !this.search_show
    }
  }
}
</script>

<style scoped lang="scss">
	.navbar{

		height: 44px;
    width: 100%;
		background: #000;
		color: #fff;
    i{
      float: right
    }
	}
  .fenlei{
      line-height: 44px;
      padding-left: 17px;
      font-size: 16px;
    }
  i{
    position: absolute;
  }
  .i1{
    top: 15px;
    right: 62px;
  }
  .i2{
    top: 15px;
    right: 15px;
  }


  .navbar{
      position: relative;
      #search_div{
        height: 38px;
        width: 100%;
        background-color:#fff;
        position: absolute;
        top: 44px;
        left: 0;
        z-index: 2;
        padding:8px 15px ;
        input{
          height: 36px;
          background-color: #f2f3f4;
          border: 0;
          width: 78%;
          line-height: 36px;
          padding-left: 10px;
          font-size: 16px;
        }
        span{
          color: #000;
          font-size: 18px;
          padding-left: 10px;
        }
      }
    }

</style>