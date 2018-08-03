<template>
  <div class="my">
  	<ul class="bottom-bar">
  		<router-link to = "/my/kolsell" tag = "li" activeClass = "">热门商品</router-link>
  		<router-link to = "/my/kol" tag = "li" activeClass = "">购物车</router-link>
  		<router-link to = "/my/myself" tag = "li" activeClass = "">个人中心</router-link>
  	</ul>
    <section>
    	<router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: 'my',
  data () {
    return {
      
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul{
	height: 40px;
	line-height: 40px;
	width: 100%;
	background: #000;
	color: #fff;
	position: fixed;
  z-index: 999;
	bottom: 0;
	left: 0;
	display: flex;
	li{
		flex : 1 ;
		text-align: center
	}
}
.bottom-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    color: #2c3038;
    font-size: 10px;
    background-color: #fff;
    box-shadow: 0 -1px 0 0 rgba(0,0,0,.1);
    padding-top: 5px;
    display: flex;
    height: 44px;}
    .bottom-bar li[data-v-2eea505b] {
    width: 50%;
    flex: 1;
    list-style: none
}
  .bottom-bar li img{
    display: block;
    margin: 0 auto;
    height: 22px;
  }
</style>