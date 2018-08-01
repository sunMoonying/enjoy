<template>
  <div class="list">
    <ul @click = "backclick()">
    	<li v-for = "data in datalist" @click = "handclick(data)">
    		{{data}}
    	</li>
    </ul>
  </div>
</template>
<!-- 需要动态获取列表 -->
<script>
import router from "../router" 
export default {
  name: 'list',
  data () {
    return {
      datalist : ['中国菜','西餐','咖啡甜点']
    }
  },
  methods : {
  	handclick(data){
  		router.push(`/entry/${data}`);
  	},
  	backclick(){
  		this.$emit('xxevent')
  	}
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list{
	position: fixed;
	top: 40px;
	left: 0;
	height: 100%;
	width: 100%;
	background: #f60;
	z-index: 100
}
</style>