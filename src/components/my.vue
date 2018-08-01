<template>
  <div class="my">
  	<ul>
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
	bottom: 0;
	left: 0;
	display: flex;
	li{
		flex : 1 ;
		text-align: center
	}
}
</style>