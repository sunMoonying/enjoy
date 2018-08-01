<template>
  <div class="sidebar">
      <ul>
  		<router-link to = '/index/home' tag = 'li' activeClass = 'active'>首页</router-link>
  		<router-link to = '/index/discovery' tag = 'li' activeClass = 'active'>商城</router-link>
  		<router-link to = '/invite' tag = 'li' activeClass = 'active'>邀请</router-link>
  		<router-link to = '/my' tag = 'li' activeClass = 'active'>我的</router-link>
      </ul>
  
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sidebar{
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0
}
ul{
	display: flex;
	background: #000;
	color: #fff;
	height: 40px;
	li{
		flex: 1;
		text-align: center
	}
}
</style>