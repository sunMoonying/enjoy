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
	background: #fff;
	color: #2c3038;
	position: fixed;
  z-index: 999;
	bottom: 0;
	left: 0;
  box-shadow: 0 -1px 0 0 rgba(0,0,0,.1);
	display: flex;
	li{
		flex : 1 ;
		text-align: center
	}
}
</style>