<template>
  <div class="sidebar">
      <ul>
  		<router-link to = '/index/home' tag = 'li' activeClass = 'active'>
        <i class="iconfont icon-all"></i>  
      </router-link>
  		<router-link to = '/index/discovery' tag = 'li' activeClass = 'active'>   <i class="iconfont icon-compass"></i>
      </router-link>
  		<router-link to = '/invite' tag = 'li' activeClass = 'active'>
        <i class="iconfont icon-gifts"></i>
      </router-link>
  		<router-link to = '/my' tag = 'li' activeClass = 'active'>
          <i class="iconfont icon-account"></i>
      </router-link>
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
  height: 50px;
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
  z-index: 100;
}
ul{
  height: 50px;
	display: flex;
	background: #fff;
	color: #fff;
	li{
		flex: 1;
		text-align: center;
    color: #a6a6a6;
	}
}
.active{
  color: #3c3c3c;
}
i{
  font-size: 22px;
  line-height: 50px;
}
</style>